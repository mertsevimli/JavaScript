

// dict, json, object

let userA = {
    "name": "Mert",
    "soyad" : "Sevimli",
    "age": 30,
    "isAdmin": true,
    "courses": ["html", "css", "js"],
    "wife": null,
    "adres": {
        "city": "İstanbul",
        "ilce": "Kağıthane",
        "zip": 34000
    },
    "hobiler": ["sinema", "kitap", "spor"]
}

let usersB = {
    "name": "Gizem",
    "soyad" : "Sevimli",
    "age": 30,
    "isAdmin": true,
    "courses": ["html", "css", "js"],
    "wife": null,
    "adres": {
        "city": "İstanbul",
        "ilce": "Kağıthane",
        "zip": 34000
    },
    "hobiler": ["sinema", "kitap", "spor"]
}

let sonuc;
sonuc = userA.name;
sonuc = userA.soyad;
sonuc = userA["age"];
sonuc = userA.adres.ilce;
sonuc = userA.hobiler[0];

let users = [
    userA,
    usersB
];
sonuc = users[1].name;

let urunler = [
    {
        "urun_adi": "iphone 14", 
        "urun_fiyat": 30000
    },
    {
        "urun_adi": "samsung s22", 
        "urun_fiyat": 12000
    },
]
sonuc = urunler[0].urun_adi;
console.log(sonuc);