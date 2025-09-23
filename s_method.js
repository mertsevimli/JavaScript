let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi.";

let sonuc;

sonuc = kursAdi.toLowerCase(); // tamamını küçük harf yapar
sonuc = kursAdi.toUpperCase(); // tamamını büyük harf yapar
sonuc = kursAdi.length; // karakter sayısını verir
sonuc = kursAdi[1];// index numarasına göre karakter verir
sonuc = kursAdi.slice(0, 6);// başlangıç ve bitiş index numarasına göre karakter verir
sonuc = kursAdi.slice(10);// başlangıç index numarasına göre karakter verir
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6); // başlangıç ve bitiş index numarasına göre karakter verir
sonuc = kursAdi.substring(10); // başlangıç index numarasına göre karakter verir

sonuc = kursAdi.replace("Eğitimi","Kursu"); // karakter değişimi yapar
sonuc = kursAdi.trim(); // baştaki ve sondaki boşlukları siler
sonuc = kursAdi.trimEnd();
sonuc = kursAdi.trimStart();

sonuc = kursAdi.indexOf("Komple");
sonuc = kursAdi.split(" ");
sonuc = kursAdi.split(" ")[0];
sonuc = kursAdi.split(" ")[3];


console.log(sonuc);