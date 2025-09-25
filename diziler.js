// let urun1 = "iphone 12";
// let urun2 = "iphone 13";
// let urun3 = "iphone 13 pro";

let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
console.log(urunler);
console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

let fiyatlar = [7000, 8000, 12000];
let renkler = ["siyah", "beyaz", "mavi"];

let urun1 = ["iphone 12", 7000, "siyah"];
let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 8000;
urun2[2] = "beyaz";
let urun3 = ["iphone 13 pro",
     12000, 
     ["mavi", "siyah", "beyaz"]];

     console.log(urun3[2]);
        console.log(urun3[2][0]);
        console.log(urun3[2][1]);
        console.log(urun3[2][2]);
     console.log(typeof urun3[2]);

console.log(fiyatlar);
console.log(fiyatlar[0]);
console.log(fiyatlar[1]);
console.log(fiyatlar[2]);

let karisik = ["iphone 13", 8000, true, "ipad", 10000, false];
console.log(karisik);
console.log(karisik[0]);
console.log(karisik[1]);
console.log(karisik[2]);
console.log(karisik[3]);
console.log(karisik[4]);
console.log(karisik[5]);

console.log(`${urunler[0]}- ${fiyatlar[0]}- ${renkler[0]}`);
console.log(`${urunler[1]}- ${fiyatlar[1]}- ${renkler[1]}`);
console.log(`${urunler[2]}- ${fiyatlar[2]}- ${renkler[2]}`);

let kursAdi = "Komple Web Geliştirme Kursu";
console.log(kursAdi[5]);
console.log(kursAdi.split(" "));

