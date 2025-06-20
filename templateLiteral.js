/*template literal berfungsi untuk mempermudah menambahkan variabel dan ekspresi didalam string, dengan menggunakan
`code $ {nameVariabel}`;
ohh ya perlu di ketahui kunci utama dari template literal adalah penggunaan tanda backtick (`) bukan tanda kutip 1 (')
*/

//cth program expresi string biasa 
const name = "Mumtaz Cantik";
const age = 20;
console.log ("nama saya " + name + " " + age + " th");

// menggunakan template literal
const literal = `nama saya ${name} ${age} th`;
console.log(literal);

// operator pembanding literal
const a = 10;
const b = 5;
const c = `jadi total penjumlahn ${a} & ${b} adalah ${a + b}`;
console.log(c);

//function, ketika ingin menampilkan di console cukup gunakan tanda kutip saja
const temp = (name) =>{
    return `your phone ${name}`;
};
console.log(temp`samsung`); //function biasa console.log(temp("samsung"));

