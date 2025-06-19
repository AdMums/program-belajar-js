// cth 1
/*
const cat = { 
    nama: 'imut',
    umur : "2 th",
    cuy : function (){ // object method sama kyak function biasanya
        console.log('meeoww meeeoowwww');
    }
};
cat.cuy();
console.log(cat);
*/

// cth 2

const cat = {
    nama : 'Imut',
    cuy : function(apae){
        return 'meowww meeeoowww ' + apae;
    }
}
console.log(cat.cuy('cihuyyyyy'));
console.log(cat.nama);