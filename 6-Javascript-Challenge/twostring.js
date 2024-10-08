//1.  jika fungsi menggunakan dua string (a dan b) sebagai parameter. jika a berisi b, tambahkna b ke awal a.
// jika tidak, tambahkan di ahir. return hasilnya

function twostring(a, b) {
  return a.includes(b) ? a + b : b + a;
}

// console.log(twostring("cihuy", "c"));

// 2. tulis fungsi yang menggunakan angka sebagai parameter. jika angkanya genap, kembalikan true. jika tidak, kebalikan false
function genap(num) {
  return num % 2 === 0 ? true : false;
}

// console.log(genap(10));

// 3. tulis fungsi yang menggunakan dua string (a dan b) sebagai parameter. return ada berapa character (a) di kalimat (b)
function include(a, b) {
  b.split(a);
  let panjang = b.split(a).length - 1;
  return panjang;
}

// console.log(include("m", "laala amaa saaa"));

// jika fungsi menggunakan angka (a) sebagai parameter. jika a adalah bilangan bulat ( bukan desimal ), kembalikan true. jika tidak, kemmbalikan false.
function bulat(num) {
  return Number.isInteger(num);
}
console.log(bulat(10));
