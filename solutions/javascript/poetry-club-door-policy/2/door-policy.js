export function frontDoorResponse(line) {
  return line[0]
}

export function frontDoorPassword(word) {
  let kataKecil = word.toLowerCase();  // ubah kata menjadi huruf kecil
  let hurufPertama = kataKecil.split('')[0].toUpperCase(); // buat huruf awal di sebuah kata menjadi kecil
  let final = kataKecil.replace(kataKecil[0], hurufPertama); // mengganti huruf awal di word menjadi huruf besar
  return final;
}

export function backDoorResponse(line) {
  var menghapusSpasi = line.trimEnd(); // menghapus spasi yang banyak di akhir line
  var hurufTerakhir = menghapusSpasi.charAt(menghapusSpasi.length - 1); // mengambil huruf terakhir dari line
  return hurufTerakhir;
}

export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'; // mengubah huruf pertama menggunakan fungsi lalu menggabungkannya
}
