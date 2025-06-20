//destructuring digunakan untuk menyerderhanakan pemograman dari array maupun object dengan memmbuat sebuah variabel

//menggunakan destructuring

const motor = ["honda", "yamaha", "suzuki", 2, 10, true];
const [firstMoto, secondMoto] = motor;
const sum = `motor pertama dan kedua adalah ${firstMoto} & ${secondMoto}`;
console.log(sum);

//tanpa desctructuring
/*
const motor = ["honda", "yamaha", "suzuki", 2];
const firstMoto = motor[0];
const secondMoto = motor[1];
const another = motor[3];
const sum = `menampilkan array motor ${firstMoto}, ${secondMoto} & ${another}`;
console.log(sum);
*/

//ketika ingin meng skip beberapa nilai array
const [first, second,...another] = motor;
const x = `menampilkan nilai array ${firstMoto}, ${secondMoto} & ${another}`;
console.log(x);

//destructuring object
const userInformation  = {nama: "Mumtaz", umur: 20, tinggal: "bekasi"};
const {nama, umur, tinggal} = userInformation;
const tot = `nama ${nama}, umur ${umur}, & tempat tinggal ${tinggal}`;
console.log(tot);

// mengganti nilai variabel di object
const {nama: namaLengkap, tinggal: tempatTinggal} = userInformation;
const to = `ini sudah diganti variabel objectnya = nama ${namaLengkap}, umur ${umur}, & tempat tinggal ${tempatTinggal}`;
console.log(to);
