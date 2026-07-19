const fs = require('fs');

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

dataTs = dataTs.replace(/subject:\s*"([^"]+)"/g, (match, subject) => {
  let newSubject = subject;
  if (newSubject !== '-') {
     // Title case
     newSubject = newSubject.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
     // Special cases
     newSubject = newSubject.replace('Pkn', 'PKn').replace('Pak', 'PAK').replace('Mtk', 'MTK').replace('Bk', 'BK').replace('Kka', 'KKA').replace('Pjok', 'PJOK');
  }

  return `subject: "${newSubject}"`;
});

fs.writeFileSync('src/data.ts', dataTs, 'utf8');
console.log('Done format_subject');
