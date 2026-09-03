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
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (res) => {
            res.pipe(file);
            file.on('finish', () => { file.close(resolve); });
        }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
      } else if (response.statusCode !== 200) {
        fs.unlink(dest, () => reject(new Error(`Failed to get '${url}' (${response.statusCode})`)));
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(resolve); });
      }
    }).on('error', (err) => { fs.unlink(dest, () => reject(err)); });
  });
};

const images = {
  // --- HİZMETLER ---
  // Kurumsal Catering & Personel Yemeği (Elegant corporate dining spread)
  'public/images/hizmetler-v3/kurumsal.jpg': 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=2000&q=100', 
  
  // İş Toplantısı (Coffee break / pastries / meeting table)
  'public/images/hizmetler-v3/toplanti.jpg': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=2000&q=100', 
  
  // Kokteyl / VIP (Cocktail event, drinks, finger food)
  'public/images/hizmetler-v3/kokteyl.jpg': 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2000&q=100', 
  
  // Düğün / Davet Organizasyonu (Wedding table setup)
  'public/images/hizmetler-v3/ozel-gun.jpg': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=2000&q=100', 
  
  // Mevlüt Yemekleri (Traditional food / large gathering feast)
  'public/images/hizmetler-v3/mevlut.jpg': 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=2000&q=100', 
  
  // Fuar Catering (Event catering / buffet line)
  'public/images/hizmetler-v3/fuar.jpg': 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=2000&q=100', 
  
  // Taşımalı Mobil Catering (Packed food boxes / delivery)
  'public/images/hizmetler-v3/tasimali.jpg': 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=2000&q=100', 

  // --- GALERİ ---
  // gal-02: Açık büfe hattında sıcak yemek sunumu (Chafing dishes buffet)
  'public/images/galeri-v3/gal-02.jpg': 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=2000&q=100',
  
  // gal-06: Özel gün organizasyonunda tatlı büfesi düzeni (Desserts / cakes)
  'public/images/galeri-v3/gal-06.jpg': 'https://images.unsplash.com/photo-1535227798054-e4373ef3795a?w=2000&q=100',
  
  // gal-01: Kokteyl davetinde canapé ve finger food sunumu (Finger food tray)
  'public/images/galeri-v3/gal-01.jpg': 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=2000&q=100',
  
  // gal-08: Kurumsal davet için hazırlanmış masa düzeni (Elegant corporate table)
  'public/images/galeri-v3/gal-08.jpg': 'https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=2000&q=100',
  
  // gal-05: Chafing dish ile sıcak yemek servisi (Scooping hot food)
  'public/images/galeri-v3/gal-05.jpg': 'https://images.unsplash.com/photo-1555244162-803834f70033?w=2000&q=100',
  
  // gal-03: Canapé tabağı yakın plan detay (Close up gourmet food)
  'public/images/galeri-v3/gal-03.jpg': 'https://images.unsplash.com/photo-1485962398705-ef6a13cb1512?w=2000&q=100',
  
  // gal-10: Yumak Catering merkez mutfağında hazırlık (Chef in kitchen)
  'public/images/galeri-v3/gal-10.jpg': 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=2000&q=100',
  
  // gal-04: Etkinlik öncesi büfe kurulumu (Empty elegant catering table)
  'public/images/galeri-v3/gal-04.jpg': 'https://images.unsplash.com/photo-1530103862676-de8892b125f4?w=2000&q=100',
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
