/*arrow function adalah cara menyederhanakan function dengan menggunakan tanda =>
    const variabel = () => {
        }
*/

function test(apa){
return 'ini menggunakan ' + apa ;
}
console.log(test('function'));

// 1 parameter
const test1 = (apa) => {
    return 'ini menggunaankan ' + apa;
};
 console.log(test1('arrow function'));

// 2 parameter
const tambah = (nilai, nilai1) => {
    return 'hasil = ' + (nilai + nilai1) / 2 * 10;
};
console.log(tambah(5,5));

const kurang = (a = 20, b = 5) => {
    return b + a;
};
console.log(kurang());



