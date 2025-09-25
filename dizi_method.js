let ogrenciler = ["Mert", "Ahmet", "Mehmet", "Ayşe"];

sonuc = ogrenciler.length; // dizinin uzunluğunu verir

// Array to String
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" , "); // elemanları birleştirir arasına ne koyarsak onu ekler

//* Eleman silme

// sonuc = ogrenciler.pop(); // sondaki elemanı siler ve sildiği elemanı döner

// sonuc = ogrenciler.shift(); // baştaki elemanı siler ve sildiği elemanı döner


//* Eleman ekleme

// sonuc = ogrenciler.push("Zeynep"); // sona eleman ekler ve dizinin son uzunluğunu döner
// sonuc = ogrenciler.toString();

// sonuc = ogrenciler.unshift("Ayşe"); // başa eleman ekler ve dizinin son uzunluğunu döner
// sonuc = ogrenciler.toString();

let markalar1 = ["BMW", "Mercedes", "Fiat"];
let markalar2 = ["Renault", "Anadol"];
let markalar3 = ["Toyota"];

sonuc = markalar1.concat(markalar2, markalar3); // dizileri birleştirir

sonuc = markalar1.splice(0, 1,); // 1.indexten başla 0 eleman sil 2 eleman ekle


console.log(sonuc);
console.log(markalar1);