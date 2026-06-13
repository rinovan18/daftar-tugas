# Explode Quiz - Google Sheets Integration Guide

## Cara Menggunakan Komponen `explode-quiz` dengan Google Sheets

### 1. Setup Google Apps Script

1. Buka [Google Apps Script](https://script.google.com/)
2. Buat project baru
3. Salin dan tempel kode berikut:

```javascript
// Google Apps Script - submitQuizResult
function submitQuizResult(payload) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Quiz Results') || ss.insertSheet('Quiz Results');
    
    // Header jika sheet kosong
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Score']);
    }
    
    // Tambahkan data
    sheet.appendRow([
      payload.timestamp,
      payload.name,
      payload.score
    ]);
    
    console.log('Data saved to Sheets:', payload);
    return { status: 'success', message: 'Data saved!' };
  } catch (e) {
    console.error('Error saving to Sheets:', e);
    return { status: 'error', message: e.toString() };
  }
}

// Deployment
// 1. Click "Deploy" → "New deployment"
// 2. Select type: "Web app"
// 3. Execute as: "Me"
// 4. Who has access: "Anyone" (untuk public access)
// 5. Click "Deploy"
// 6. Copy the "Deploy URL" (misal: https://script.google.com/macros/s/xxx/exec)
```

4. Simpan project
5. Deploy sebagai Web App
6. Berikan akses "Anyone" (penting agar komponen bisa call dari luar)

### 2. Setup Komponen HAX

Di halaman HAXcms (misal: `pages/item-lesson-1-content/index.html`):

```html
<explode-quiz 
  script-function-name="submitQuizResult"
></explode-quiz>
```

Atau dengan questions kustom (JSON):

```html
<explode-quiz 
  questions='[{"question":"Siapakah presiden pertama Indonesia?","choices":["Soeharto","Soekarno","B.J. Habibie","Jokowi"],"correctIndex":1},{"question":"Berapa hasil 5 + 5?","choices":["8","9","10","11"],"correctIndex":2}]'
  script-function-name="submitQuizResult"
></explode-quiz>
```

### 3. Setup Google Apps Script URL di Komponen

Komponen mencari `google.script.run` yang tersedia otomatis saat di-host di Google Apps Script environment. Untuk external hosting (HAXcms), perlu embed komponen via iframe atau direct integration.

**Opsi A: Direct Integration (recommended)**

Upload `explode-quiz.js` ke Google Drive, lalu load via script tag:

```html
<script type="module">
  // Load dari Google Drive (public URL)
  import 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
  
  // Atau dari CDN
  // import 'https://cdn.jsdelivr.net/gh/your-repo/explode-quiz.js';
</script>
```

**Opsi B: Google Apps Script HTML Template**

Buat Google Apps Script HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <script src="https://apis.google.com/js/api.js"></script>
  <script>
    function onload() {
      google.script.run.withSuccessHandler(function(html) {
        document.body.innerHTML = html;
      }).getFile('explode-quiz.html');
    }
  </script>
</head>
<body onload="onload()">
  Loading...
</body>
</html>
```

### 4. Test Integration

1. Buka halaman dengan komponen `explode-quiz`
2. Isi nama dan jawab soal
3. Setelah selesai, check Google Sheets — data harus muncul
4. Console log akan menampilkan status:

```
[explode-quiz] Data berhasil dikirim ke Sheets
```

atau

```
[explode-quiz] Gagal mengirim ke Sheets: ...
```

### 5. Troubleshooting

| Issue | Solution |
|-------|----------|
| `google.script.run not defined` | Komponen di-host di luar Google Apps Script environment |
| CORS error | Google Apps Script perlu deploy dengan "Execute as: Anyone" |
| Data tidak muncul | Check sheet name — komponen gunakan "Quiz Results" |
| Import error | Pastikan `canvas-confetti` bisa di-load (atau disable via CDN) |

### 6. Custom Script Function Name

Komponen support custom function name via attribute:

```html
<explode-quiz 
  script-function-name="saveToMySheet"
></explode-quiz>
```

Di Apps Script, buat function dengan nama yang sama:

```javascript
function saveToMySheet(payload) {
  // Your custom logic
}
```

---

## Notes

- Komponen ini menggunakan `canvas-confetti` untuk efek konfeti (auto-import via dynamic import)
- Google Sheets integration bersifat opsional — jika `google.script.run` tidak tersedia, komponen tetap berfungsi tanpa menyimpan ke Sheets
- Semua data dikirim dalam format JSON: `{ timestamp: ISO8601, name: string, score: number }`
