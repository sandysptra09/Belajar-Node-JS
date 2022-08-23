var nama = "Ahmad";
var gaji = 4500000;
var transport = 10000;
var kerja = 24;
var jumltransport = transport * kerja;
var infak = 50000;
var bpjs = 250000;
var pajak = 2.5;
var jumlpajak = pajak * gaji / 100;
var total = jumlpajak + infak + bpjs;
var gajibersih = (gaji - total)

console.log(" Gaji Kotor             : Rp."+gaji)
console.log(" ========================") +"<br>"
console.log(" Potongan Pajak 2,5%    : " + jumlpajak);
console.log(" Potongan BPJS          : " + bpjs);
console.log(" Biaya Infak            : " + infak);
console.log(" ========================") +"<br>"
console.log(" Total Potongan         : " + total)
console.log(" ========================") +"<br>"
console.log(" Jumlah Biaya Transport : " + transport);
console.log(" Total Hari Kerja       : " + kerja + " hari ");
console.log(" ========================") +"<br>"
console.log(" Total Tunjangan        : " + jumltransport)
console.log(" ========================") +"<br>"
console.log(" Perhitungan Gaji       : " );
console.log(" (Gaji Kotor - Potongan) + Tunjangan ")
console.log(" (" + gaji + " - " + total + ")" + " + " + jumltransport)
console.log(" ========================")
console.log(" Gaji Bersih            : " + ((gaji - total) + jumltransport))
