const fs = require('fs');

const dataTs = fs.readFileSync('src/data.ts', 'utf8');
const txt = fs.readFileSync('Daftar_Guru.txt', 'utf8');

const lines = txt.split('\n').slice(4); // Skip header

const txtData = lines.map(line => {
  const parts = line.split('|').map(s => s.trim());
  if (parts.length >= 4) {
    return {
      no: parts[0],
      name: parts[1],
      subject: parts[2],
      duty: parts[3]
    };
  }
  return null;
}).filter(Boolean);

// Find TEACHERS_DATA block
const teachersStart = dataTs.indexOf('export const TEACHERS_DATA = [');
const teachersEnd = dataTs.indexOf('];', teachersStart) + 2;

let teachersStr = dataTs.substring(teachersStart, teachersEnd);

// Regex to extract objects
const objRegex = /\{([^}]+)\}/g;
let match;
const teachers = [];
while ((match = objRegex.exec(teachersStr)) !== null) {
  const inner = match[1];
  const idMatch = /id:\s*"([^"]+)"/.exec(inner);
  const nameMatch = /name:\s*"([^"]+)"/.exec(inner);
  const imageMatch = /image:\s*"([^"]+)"/.exec(inner);
  
  if (idMatch && nameMatch && imageMatch) {
    teachers.push({
      id: idMatch[1],
      name: nameMatch[1],
      image: imageMatch[1]
    });
  }
}

// Function to normalize name for comparison
const normalize = (name) => {
  return name.toLowerCase().replace(/[^a-z]/g, '');
};

// Map txtData to teachers
teachers.forEach(t => {
  const n1 = normalize(t.name);
  let bestMatch = null;
  
  txtData.forEach(txtRow => {
    const n2 = normalize(txtRow.name);
    // simple includes check or exact match
    if (n1 === n2 || n1.includes(n2) || n2.includes(n1)) {
       bestMatch = txtRow;
    } else {
       // Check first name and last name
       const p1 = t.name.toLowerCase().replace(/[,.]/g, '').split(' ');
       const p2 = txtRow.name.toLowerCase().replace(/[,.]/g, '').split(' ');
       if (p1[0] === p2[0] && p1[p1.length-1] === p2[p2.length-1]) {
         bestMatch = txtRow;
       }
    }
  });

  if (bestMatch) {
    t.subject = bestMatch.subject;
    t.extraDuty = bestMatch.duty;
  }
});

// Reconstruct string
const newTeachersStr = 'export const TEACHERS_DATA = [\n' + teachers.map(t => {
  let s = `  { id: "${t.id}", name: "${t.name}", image: "${t.image}"`;
  if (t.subject) s += `, subject: "${t.subject}"`;
  if (t.extraDuty) s += `, extraDuty: "${t.extraDuty}"`;
  s += ' }';
  return s;
}).join(',\n') + '\n];';

const newFileContent = dataTs.substring(0, teachersStart) + newTeachersStr + dataTs.substring(teachersEnd);

fs.writeFileSync('src/data.ts', newFileContent, 'utf8');
console.log('Done!');
