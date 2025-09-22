// var maasAli = 5000;
// var maasCan = 6000;

// var zam = 0.35; // zam oranı
// console.log(maasAli + maasAli * zam); // maaş ali
// console.log(maasCan + maasCan * zam); // maaş can

//* Türkçe karakter kullanmamalıyız
//*Arada boşluk kullanmamalıyız
//* Rakamla başlamamalıyız

//* Var la  Let arasındaki fark
// var global scope
// let block scope

// var ile tanımlanan değişkenler yeniden tanımlanabilir

// var urunAdi = "iphone 14"; //* Karakter adı String oluyor
// let urunFiyat = 30000; //* Tırnak içine alırsak karakter adı String oluyor
//* Tırnaksız ise number oluyor

// console.log(typeof urunAdi); //typeof değişkenin türünü verir
// console.log(typeof urunFiyat);

// let sayi1 = "20";
// let sayi2 = "30";

// console.log(Number(sayi1) + Number(sayi2)); // 2030
//* Tırnaksız yazarsak toplama işlemi yapar
// let sayi3 = 20;
// let sayi4 = 30;
// console.log(sayi3 + sayi4); // 50

let sayi3 = 20;
let sayi4 = 30;

console.log(sayi3.toString() + sayi4.toString()); // "2030"

let isim = "Ali Can";
let soyad = "Yılmaz";

console.log(isim + " " + soyad); // Ali Can Yılmaz

let başarilimi = "true"; // true veya false
console.log(typeof başarilimi); // string

let başarilimi2 = true; // true veya false
console.log(typeof başarilimi2); // boolean

let bosmu = null;
console.log(typeof bosmu); // object

let tanimsiz;
console.log(typeof tanimsiz); // undefined

let sinavNotu = 40;
let basarilimi= sinavNotu >= 50;
console.log(basarilimi);

let yas;
console.log(yas); // undefined yaşının içeriği tanımlanmadı