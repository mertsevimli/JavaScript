let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");// string ifadeyi sayıya çevirir
sonuc = parseInt("10.6");// ondalıklı sayıları almaz
sonuc = parseFloat("10.6");// ondalıklı sayıları da alır
sonuc = parseInt("10a"); // 10
sonuc = parseInt("a10");// NaN

sonuc = isNaN("10"); // kontrol et

let sayi = 15.12355467;// virgülden sonra 5 hane alır

sonuc = sayi.toPrecision(5); // toplam 5 hane alır
// sonuc = sayi.toFixed(5); // virgülden sonra 5 hane alır

sonuc = Math.round(2.4); // en yakın sayıya yuvarlar
sonuc = Math.round(2.6); // en yakın sayıya yuvarlar
sonuc = Math.ceil(2.2); // her zaman yukarı yuvarlar
sonuc = Math.floor(2.6); // her zaman aşağı yuvarlar
sonuc = Math.sqrt(25); // karekök
sonuc = Math.pow(2,3); // üs alma
sonuc = Math.abs(-10); // mutlak değer
sonuc = Math.min(4,6,8,3,9);// en küçük sayıyı verir
sonuc = Math.max(4,6,8,3,9); // en büyük sayıyı verir
sonuc = Math.floor(Math.random() * 100) + 50; // 50-149 arasında rastgele sayı

console.log(typeof sonuc);
console.log(sonuc);