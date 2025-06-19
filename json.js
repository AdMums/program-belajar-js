/* JSON adalah singkatan JavaScript Object Notation, JSON digunakan untuk melakukan pertukan data antara 
 aplikasi web dan server. JSON diapit oleh tanda kurung awal dan didalamnya terdiri 2 pasangan key dan value
 untuk memisahkan key dan value bisa menggunakan tanda koma. Value (nilai) bisa tipe data string, bloolean, 
 array, angka dan null. Sedangkan untuk function tidak bisa digunakan dalam Json
 */

// JSON
const testJson = '{"mobil": "avanza", "nilai": "true", "angka" : "5"}'; // cth penulisan varibale JSON

console.log(testJson); // menampilkan seluruh nilai testJson


//Js Object
const jsObject = {
    mobil: "avanza",
    nilai: "true",
    angka: 5
    };
console.log(jsObject);
console.log(JSON.stringify(jsObject)); //mengirim data ke server yang awalnya js object menjadi json

//console.log(JSON.parse(jsObject)); //menerima data yang dikirim server kedalam string js

