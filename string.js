let ad = "Mert";
let soyad = "Sevimli";
let yas = 30;
let sehir = "İstanbul";

let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'da yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// backtick option+ ü nün altındaki tuş `
// mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'da yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı. Ve bitmiyor`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);