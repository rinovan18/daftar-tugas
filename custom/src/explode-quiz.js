// explode-quiz component untuk HAXcms dengan Google Sheets integration
// Copy dari elements/explode/explode-quiz.js

import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

const DEFAULT_QUESTIONS = [
  {
    question: "Apa ibu kota Indonesia?",
    choices: ["Bandung", "Surabaya", "Jakarta", "Medan"],
    correctIndex: 2,
  },
  {
    question: "Berapa hasil dari 7 × 8?",
    choices: ["54", "56", "58", "60"],
    correctIndex: 1,
  },
  {
    question: "Planet terdekat dengan Matahari adalah?",
    choices: ["Venus", "Bumi", "Mars", "Merkurius"],
    correctIndex: 3,
  },
];

class ExplodeQuiz extends I18NMixin(DDDSuper(LitElement)) {
  static get tag() {
    return "explode-quiz";
  }

  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: false,
      gizmo: {
        title: "Explode Quiz",
        description:
          "Interactive multiple-choice quiz with confetti and Google Sheets integration",
        icon: "icons:question-answer",
        color: "purple",
        tags: ["Education", "Interactive", "Content"],
      },
      settings: {
        configure: [
          {
            property: "questions",
            title: "Daftar Soal",
            description: "Array soal kustom (JSON)",
            inputMethod: "code-editor",
          },
          {
            property: "scriptFunctionName",
            title: "Nama Fungsi Apps Script",
            description:
              "Nama fungsi Google Apps Script untuk menerima hasil kuis",
            inputMethod: "textfield",
          },
        ],
        advanced: [],
      },
    };
  }

  static get properties() {
    return {
      ...super.properties,
      questions: { type: Array, attribute: true },
      scriptFunctionName: { type: String, attribute: true },
      _screen: { state: true },
      _studentName: { state: true },
      _currentIndex: { state: true },
      _score: { state: true },
      _answered: { state: true },
      _selectedIndex: { state: true },
      _feedbackText: { state: true },
      _feedbackPositive: { state: true },
      _validationError: { state: true },
      _nameInputValue: { state: true },
    };
  }

  constructor() {
    super();
    this.questions = DEFAULT_QUESTIONS;
    this.scriptFunctionName = "submitQuizResult";
    this._screen = "name";
    this._studentName = "";
    this._currentIndex = 0;
    this._score = 0;
    this._answered = false;
    this._selectedIndex = -1;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._validationError = "";
    this._nameInputValue = "";
    this._confettiFn = null;
    this.t = {
      // Layar_Nama
      quizTitle: "Kuis Interaktif",
      quizInstruction: "Masukkan nama Anda untuk memulai kuis.",
      namePlaceholder: "Nama Anda...",
      startButton: "Mulai Kuis",
      validationNameEmpty: "Nama tidak boleh kosong.",
      validationNameShort: "Nama harus lebih dari 2 karakter.",

      // Layar_Soal
      questionOf: "Soal",
      of: "dari",
      scoreLabel: "Skor",
      feedbackCorrect: "Mantap, Benar!",
      feedbackWrongPrefix: "Yah, Salah. Jawaban benar: ",

      // Layar_Hasil
      resultHeading: "Hasil Kuis",
      resultName: "Nama",
      resultScore: "Skor",
      resultTotal: "Total Soal",
      resultPercentage: "Persentase",
      messageHigh: "Luar Biasa! Kamu Hebat!",
      messageMedium: "Bagus! Terus Berlatih!",
      messageLow: "Jangan Menyerah! Coba Lagi!",
      restartButton: "Mulai Ulang",

      // Aksesibilitas aria-label
      ariaNameInput: "Kolom nama siswa",
      ariaStartButton: "Tombol mulai kuis",
      ariaAnswerButton: "Pilihan jawaban",
      ariaRestartButton: "Mulai ulang kuis",
      ariaScoreDisplay: "Skor saat ini",
      ariaProgressLabel: "Kemajuan kuis",
      ariaFeedback: "Umpan balik jawaban",
    };
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (this.questions && this.questions.length === 0) {
      this.questions = DEFAULT_QUESTIONS;
    }
  }

  connectedCallback() {
    super.connectedCallback();

    // Dynamic import canvas-confetti
    import("canvas-confetti/dist/confetti.module.mjs")
      .then((mod) => {
        this._confettiFn = mod.default;
      })
      .catch((err) => {
        console.warn(
          "[explode-quiz] canvas-confetti gagal dimuat — efek konfeti dinonaktifkan:",
          err,
        );
        this._confettiFn = null;
      });
  }

  _fireConfetti() {
    if (typeof this._confettiFn !== "function") return;
    try {
      this._confettiFn({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    } catch (err) {
      console.error("[explode-quiz] Konfeti gagal dieksekusi:", err);
    }
  }

  _startQuiz() {
    const trimmed = this._nameInputValue.trim();
    if (trimmed.length <= 2) {
      this._validationError =
        trimmed.length === 0
          ? this.t.validationNameEmpty
          : this.t.validationNameShort;
      return;
    }
    this._studentName = trimmed;
    this._validationError = "";
    this._screen = "question";
  }

  _renderNameScreen() {
    return html`
      <h1 class="quiz-title">${this.t.quizTitle}</h1>
      <p class="quiz-instruction">${this.t.quizInstruction}</p>
      <div class="input-group">
        <input
          id="name-input"
          .value="${this._nameInputValue}"
          @input="${(e) => (this._nameInputValue = e.target.value)}"
          @keydown="${(e) => {
            if (e.key === "Enter") this._startQuiz();
          }}"
          .placeholder="${this.t.namePlaceholder}"
          aria-label="${this.t.ariaNameInput}"
          type="text"
        />
      </div>
      <button
        class="start-btn"
        @click="${this._startQuiz}"
        aria-label="${this.t.ariaStartButton}"
      >
        ${this.t.startButton}
      </button>
      ${this._validationError
        ? html`<p class="validation-error">${this._validationError}</p>`
        : ""}
    `;
  }

  _renderQuestionScreen() {
    const currentQuestion = this.questions[this._currentIndex];
    const progressLabel = `${this.t.questionOf} ${this._currentIndex + 1} ${this.t.of} ${this.questions.length}`;

    return html`
      <header class="quiz-header">
        <span class="progress-label" aria-label="${this.t.ariaProgressLabel}"
          >${progressLabel}</span
        >
        <span class="score-display" aria-label="${this.t.ariaScoreDisplay}"
          >${this.t.scoreLabel}: ${this._score}</span
        >
      </header>

      <div class="question-text">${currentQuestion.question}</div>

      <div class="answer-grid">
        ${currentQuestion.choices.map((choice, index) => {
          let btnClass = "answer-btn";
          if (this._answered) {
            if (index === currentQuestion.correctIndex) {
              btnClass += " answer-btn--correct";
            } else if (index === this._selectedIndex) {
              btnClass += " answer-btn--wrong";
            }
          }

          return html`
            <button
              class="${btnClass}"
              ?disabled="${this._answered}"
              @click="${() => this._selectAnswer(index)}"
              aria-label="${this.t.ariaAnswerButton}: ${choice}"
            >
              ${choice}
            </button>
          `;
        })}
      </div>

      ${this._feedbackText
        ? html`
            <div
              class="feedback-area"
              aria-live="polite"
              aria-label="${this.t.ariaFeedback}"
            >
              ${this._feedbackText}
            </div>
          `
        : ""}
    `;
  }

  _selectAnswer(choiceIndex) {
    if (this._answered) return;

    this._answered = true;
    this._selectedIndex = choiceIndex;

    const currentQuestion = this.questions[this._currentIndex];
    const correctIndex = currentQuestion.correctIndex;
    const isCorrect = choiceIndex === correctIndex;

    if (isCorrect) {
      this._score += 1;
      this._feedbackText = this.t.feedbackCorrect;
      this._feedbackPositive = true;
      this._fireConfetti();
    } else {
      this._feedbackText = `${this.t.feedbackWrongPrefix}${currentQuestion.choices[correctIndex]}`;
      this._feedbackPositive = false;
    }

    // Schedule advance after delay
    setTimeout(() => {
      this._advanceQuiz();
    }, 1200);
  }

  _advanceQuiz() {
    if (this._currentIndex < this.questions.length - 1) {
      this._currentIndex += 1;
      this._answered = false;
      this._selectedIndex = -1;
      this._feedbackText = "";
      this._feedbackPositive = false;
    } else {
      this._submitToSheets(this._studentName, this._score);
      this._screen = "result";
      // Trigger confetti if score >= 80%
      if (this._score / this.questions.length >= 0.8) {
        this._fireConfetti();
      }
    }
  }

  _renderResultScreen() {
    const percentage = Math.round((this._score / this.questions.length) * 100);
    let message = this.t.messageLow;

    if (percentage >= 80) {
      message = this.t.messageHigh;
    } else if (percentage >= 50) {
      message = this.t.messageMedium;
    }

    return html`
      <h2 class="result-heading">${this.t.resultHeading}</h2>

      <div class="result-name">${this.t.resultName}: ${this._studentName}</div>
      <div class="result-score">
        ${this.t.resultScore}: ${this._score} / ${this.questions.length}
      </div>
      <div class="result-percentage">
        ${this.t.resultPercentage}: ${percentage}%
      </div>

      <p class="result-message">${message}</p>

      <button
        class="restart-btn"
        @click="${this._restartQuiz}"
        aria-label="${this.t.ariaRestartButton}"
      >
        ${this.t.restartButton}
      </button>
    `;
  }

  _restartQuiz() {
    this._screen = "name";
    this._studentName = "";
    this._currentIndex = 0;
    this._score = 0;
    this._answered = false;
    this._selectedIndex = -1;
    this._feedbackText = "";
    this._feedbackPositive = false;
    this._validationError = "";
    this._nameInputValue = "";
  }

  _submitToSheets(name, score) {
    if (
      typeof globalThis.google === "undefined" ||
      !globalThis.google?.script?.run
    ) {
      console.warn(
        "[explode-quiz] google.script.run tidak tersedia — melewati pengiriman ke Sheets",
      );
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      name,
      score,
    };

    globalThis.google.script.run
      .withSuccessHandler(() =>
        console.log("[explode-quiz] Data berhasil dikirim ke Sheets"),
      )
      .withFailureHandler((err) =>
        console.error("[explode-quiz] Gagal mengirim ke Sheets:", err),
      )
      [this.scriptFunctionName](payload);
  }

  render() {
    switch (this._screen) {
      case "name":
        return this._renderNameScreen();
      case "question":
        return this._renderQuestionScreen();
      case "result":
        return this._renderResultScreen();
      default:
        return this._renderNameScreen();
    }
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          max-width: 640px;
          margin: 0 auto;
          padding: var(--ddd-spacing-8);
          font-family: var(--ddd-font-primary);
        }

        .quiz-title {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-primary);
        }

        .quiz-instruction {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-secondary);
        }

        .input-group {
          margin-bottom: var(--ddd-spacing-4);
        }

        input#name-input {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          box-sizing: border-box;
          font-family: var(--ddd-font-primary);
        }

        input#name-input:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .start-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .start-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .start-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .validation-error {
          margin-top: var(--ddd-spacing-2);
          color: var(--ddd-theme-error);
          font-size: var(--ddd-font-size-s);
        }

        /* Question Screen Styles */
        .quiz-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: var(--ddd-spacing-6);
          font-weight: var(--ddd-font-weight-bold);
        }

        .progress-label,
        .score-display {
          color: var(--ddd-theme-primary);
        }

        .question-text {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-secondary);
        }

        .answer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--ddd-spacing-3);
          margin-bottom: var(--ddd-spacing-6);
        }

        @media (max-width: 480px) {
          .answer-grid {
            grid-template-columns: 1fr;
          }

          .answer-btn {
            min-height: 44px;
          }
        }

        .answer-btn {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-medium);
          background: var(--ddd-theme-polaris-surface);
          color: var(--ddd-theme-on-surface);
          border: 1px solid var(--ddd-theme-polaris-border);
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition:
            background 0.2s,
            border-color 0.2s;
        }

        .answer-btn:hover:not([disabled]) {
          background: var(--ddd-theme-polaris-surface-hover);
        }

        .answer-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }

        .answer-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .answer-btn--correct {
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
          border-color: var(--ddd-theme-success);
        }

        .answer-btn--wrong {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
          border-color: var(--ddd-theme-error);
        }

        .feedback-area {
          padding: var(--ddd-spacing-4);
          border-radius: var(--ddd-radius-md);
          font-weight: var(--ddd-font-weight-medium);
          text-align: center;
        }

        .feedback-area.positive {
          background: var(--ddd-theme-success);
          color: var(--ddd-theme-on-success);
        }

        .feedback-area.negative {
          background: var(--ddd-theme-error);
          color: var(--ddd-theme-on-error);
        }

        /* Result Screen Styles */
        .result-heading {
          font-size: var(--ddd-font-size-xl);
          font-weight: var(--ddd-font-weight-bold);
          margin-bottom: var(--ddd-spacing-6);
          color: var(--ddd-theme-primary);
        }

        .result-name,
        .result-score,
        .result-percentage {
          font-size: var(--ddd-font-size-m);
          margin-bottom: var(--ddd-spacing-4);
          color: var(--ddd-theme-secondary);
        }

        .result-message {
          font-size: var(--ddd-font-size-l);
          font-weight: var(--ddd-font-weight-bold);
          margin: var(--ddd-spacing-6) 0;
          color: var(--ddd-theme-primary);
          text-align: center;
        }

        .restart-btn {
          width: 100%;
          padding: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-m);
          font-weight: var(--ddd-font-weight-bold);
          background: var(--ddd-theme-polaris-primary);
          color: var(--ddd-theme-on-primary);
          border: none;
          border-radius: var(--ddd-radius-md);
          cursor: pointer;
          transition: background 0.2s;
        }

        .restart-btn:hover {
          background: var(--ddd-theme-accent);
        }

        .restart-btn:focus-visible {
          outline: none;
          box-shadow: 0 0 0 3px
            var(--ddd-theme-polaris-focus-ring, var(--ddd-theme-link-light));
        }
      `,
    ];
  }
}

globalThis.customElements.define(ExplodeQuiz.tag, ExplodeQuiz);
