const https = require('https');
https.get('https://infopublik.id/kategori/nusantara/753436/komite-sma-1-halut-sambut-baik-muhtar-taha-jadi-kepala-sekolah-yang-baru', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="(.*?)"/i);
    if(match) console.log('Image URL:', match[1]);
    else {
      // try looking for standard img tags inside article
      const imgMatch = data.match(/<img[^>]+src="([^">]+)"/i);
      console.log('Fallback img tag:', imgMatch ? imgMatch[1] : 'Not found');
    }
  });
});
