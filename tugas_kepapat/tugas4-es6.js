//dikengken ndamel 6 data transaksi
const transaksi = [
    {id : 1, barang : "surya", harga : 27.500, qty : 10, kategori : "Rokok"},
    {id : 2, barang : "the space for the unbound", harga : 49.000, qty : 5, kategori :"game"},
    {id : 3, barang : "fordive shelby", harga : 239.000, qty : 9, kategori : "parfum"},
    {id : 4, barang : "bobber benely", harga : 8.350000, qty : 6, kategori : "sepeda"},
    {id : 5, barang : "hashirama sage mode", harga : 1.500000, qty: 7, kategori : "patung action figure"},
    {id : 6, barang : "BHS masterpiece", harga : 13.900000, qty : 5, kategori : "sarung"},
];

//filter() gae barang
const barangRokok = 
transaksi.filter(
    (item) => item.kategori === "Rokok"
);
console.log("~~ DAFTAR BARANG ~~");
console.log(barangRokok);

//map() dinggo notal
const transaksiSubtotal = 
transaksi.map(
    (item) => {
        const { id, barang, harga, qty, kategori } = item;
        return {
            id,
            barang,
            harga,
            qty,
            kategori,
            subtotal: harga * qty
        };
    }
);
console.log("~~ TOTAL SABEN BARANG ~~");
console.log(transaksiSubtotal);

//reduce() dinggo nggabungke subtotal
const totalBelanja = 
transaksiSubtotal.reduce(
    (total, item) => total + item.subtotal,
    0
);
console.log("~~ KABEHANE BLANJANE ~~");
console.log("Rp" +
    totalBelanja.toLocaleString("id-ID")
)
