let simdi = new Date(); // şu anki tarih ve saat bilgisi
// get methods
sonuc = simdi;
sonuc = simdi.getDate(); // ayın kaçıncı günü
sonuc = simdi.getDay(); // ayın kaçıncı günü 0 pazar 6 cumartesi
sonuc = simdi.getFullYear(); // yıl bilgisi
sonuc = simdi.getHours(); // saat bilgisi
sonuc = simdi.getMinutes(); // dakika bilgisi
sonuc = simdi.getSeconds(); // saniye bilgisi
sonuc = simdi.getMilliseconds(); // milisaniye bilgisi
sonuc = simdi.getTime(); // 1 ocak 1970 den itibaren geçen süreyi ms cinsinden verir


// Set Methods
// simdi.setFullYear(2030); // yılı 2030 yapar
// simdi.setMonth(0); // ayı ocak yapar 0 aralık 11
// simdi.setDate(15); // ayın 15 i yapar
// simdi.setHours(10); // saati 10 yapar
// simdi.setMinutes(30); // dakikayı 30 yapar
// simdi.setSeconds(45); // saniyeyi 45 yapar

sonuc = simdi;
let dogumTarihi = new Date(1995, 3, 17); // ay bilgisi 0 dan başlar

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
 // ms cinsinden farkı verir

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; // iki tarih arasındaki fark saniye cinsinden
let dakika = saniye / 60;

sonuc = 


console.log(sonuc);
console.log(typeof sonuc);

