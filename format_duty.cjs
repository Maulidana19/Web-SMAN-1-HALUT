const fs = require('fs');

let dataTs = fs.readFileSync('src/data.ts', 'utf8');

dataTs = dataTs.replace(/extraDuty:\s*"([^"]+)"/g, (match, duty) => {
  let newDuty = duty;
  if (newDuty === 'KEPSEK') newDuty = 'Kepala Sekolah';
  else if (newDuty === 'WAKAKUR') newDuty = 'Wakil Kepala Sekolah Bidang Kurikulum';
  else if (newDuty === 'WAKASIS') newDuty = 'Wakil Kepala Sekolah Bidang Kesiswaan';
  else if (newDuty === 'WAKASARPRAS') newDuty = 'Wakil Kepala Sekolah Bidang Sarana dan Prasarana';
  else if (newDuty === 'BEND. BOSP') newDuty = 'Bendahara BOSP';
  else if (newDuty.toLowerCase() === 'ka perpustakaan') newDuty = 'Kepala Perpustakaan';
  else if (newDuty.startsWith('WK.')) newDuty = newDuty.replace('WK.', 'Wali Kelas');
  else if (newDuty === '-') newDuty = '-';
  else {
     // general title case for anything else
     newDuty = newDuty.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }

  return `extraDuty: "${newDuty}"`;
});

fs.writeFileSync('src/data.ts', dataTs, 'utf8');
console.log('Done format_duty');
