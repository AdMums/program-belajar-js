// penggunaan this bertujuan untuk memanggil semua properties yang terdapat didalam objek

const myLife = {
    name : 'Mumtaz',
    panggilan : 'Mucan',
    umur : 17,
    display : function (){
        this.umur = 24; // memperbarui properties umur yang awal nya 17 menjadi 24

        console.log(this);
        console.log(this.name);// digunakan untuk menampilkan satu aja properties
    }
}
myLife.display();

console.log(myLife.name);// menampilkan properties name

console.log(myLife);// menampilkan semua properties di dalam object