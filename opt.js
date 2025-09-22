let sonuc;
let a = 10;
let b = 20;
let c = 30;


//* Aritmatik işlemler
sonuc = a + b; // toplama
sonuc = a - b; // çıkarma
sonuc = a * b; // çarpma
sonuc = a / b; // bölme
sonuc = c % a; // mod alma

//* Atama işlemleri
sonuc = a; // atama
sonuc += a; // sonuc = sonuc + a;
sonuc -= a; // sonuc = sonuc - a;
sonuc *= a; // sonuc = sonuc * a;
sonuc /= a; // sonuc = sonuc / a;
sonuc %= a; // sonuc = sonuc % a;

//Karşılaştırma işlemleri
sonuc = (a == b); // eşit mi
sonuc = (a != b); // eşit değil mi
sonuc = (a === b); // hem değer hem tür olarak eşit mi
sonuc = (a !== b); // hem değer hem tür olarak eşit değil mi
sonuc = (a > b); // büyük mü
sonuc = (a < b); // küçük mü
sonuc = (a >= b); // büyük eşit mi
sonuc = (a <= b); // küçük eşit mi

//* Mantıksal işlemler
sonuc = a < b; // küçüktür
sonuc = a > b; // büyüktür
sonuc = a <= b; // küçük eşittir
sonuc = a >= b; // büyük eşittir
sonuc = a == b; // eşittir
sonuc = a != b; // eşit değildir

//* Artırma ve Azaltma işlemleri
sonuc = ++a; // a'nın değeri 1 artar ve sonra atama yapılır
sonuc = --a; // a'nın değeri 1 azalır ve sonra atama yapılır
sonuc = a++; // atama yapılır sonra a'nın değeri 1 artar
sonuc = a--; // atama yapılır sonra a'nın değeri 1 azalır   

console.log(sonuc);
console.log(a);