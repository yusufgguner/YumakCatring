const fs = require('fs');
const https = require('https');
const path = require('path');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => { file.close(resolve); });
        }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(resolve); });
      }
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
};

const images = {
  // Hizmetler
  'public/images/hizmetler-v2/kurumsal.jpg': 'https://images.unsplash.com/photo-1414235077428-338988a2e8c0?w=2000&q=100', // Corporate
  'public/images/hizmetler-v2/toplanti.jpg': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=2000&q=100', // Meeting
  'public/images/hizmetler-v2/kokteyl.jpg': 'https://images.unsplash.com/photo-1555244162-803834f70033?w=2000&q=100', // Cocktail
  'public/images/hizmetler-v2/ozel-gun.jpg': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2000&q=100', // Wedding
  'public/images/hizmetler-v2/mevlut.jpg': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=2000&q=100', // Gathering
  'public/images/hizmetler-v2/fuar.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=2000&q=100', // Fair
  'public/images/hizmetler-v2/tasimali.jpg': 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=2000&q=100', // Transport

  // Galeri
  'public/images/galeri-v2/gal-01.jpg': 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=2000&q=100',
  'public/images/galeri-v2/gal-02.jpg': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=2000&q=100',
  'public/images/galeri-v2/gal-03.jpg': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=2000&q=100',
  'public/images/galeri-v2/gal-04.jpg': 'https://images.unsplash.com/photo-1478144592103-25e218a04891?w=2000&q=100',
  'public/images/galeri-v2/gal-05.jpg': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=2000&q=100',
  'public/images/galeri-v2/gal-06.jpg': 'https://images.unsplash.com/photo-1493770348161-369560ae357d?w=2000&q=100',
  'public/images/galeri-v2/gal-07.jpg': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=2000&q=100',
  'public/images/galeri-v2/gal-08.jpg': 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=2000&q=100',
  'public/images/galeri-v2/gal-09.jpg': 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=2000&q=100',
  'public/images/galeri-v2/gal-10.jpg': 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=2000&q=100',
  'public/images/galeri-v2/gal-11.jpg': 'https://images.unsplash.com/photo-1530103862676-de8892b125f4?w=2000&q=100',
  'public/images/galeri-v2/gal-12.jpg': 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=2000&q=100',
};

async function run() {
  for (const [filepath, url] of Object.entries(images)) {
    const fullPath = path.join(__dirname, filepath);
    console.log(`Downloading ${filepath}...`);
    try {
        await download(url, fullPath);
        console.log(`Success: ${filepath}`);
    } catch(e) {
        console.log(`Error: ${e.message}`);
    }
  }
  console.log("Done");
}

run();
