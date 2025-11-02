// @ts-check
//
// ☝🏽 The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion on the web
// and supported IDEs when implementing this exercise. You don't need to
// understand types, JSDoc, or TypeScript in order to complete this JavaScript
// exercise, and can completely ignore this comment block and directive.
//
// 👋🏽 Hi again!
//
// A quick reminder about exercise stubs:
//
// 💡 You're allowed to completely clear any stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./door-policy.spec.js.
//
// 💡 You don't need to write JSDoc comment blocks yourself; it is not expected
// in idiomatic JavaScript, but some companies and style-guides do enforce them.
//
// Good luck with that door policy!

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
export function frontDoorResponse(line) {
  return line[0]
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  let kataKecil = word.toLowerCase();  // ubah kata menjadi huruf kecil
  let hurufPertama = kataKecil.split('')[0].toUpperCase(); // buat huruf awal di sebuah kata menjadi kecil
  let final = kataKecil.replace(kataKecil[0], hurufPertama); // mengganti huruf awal di word menjadi huruf besar
  return final;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  var menghapusSpasi = line.trimEnd(); // menghapus spasi yang banyak di akhir line
  var hurufTerakhir = menghapusSpasi.charAt(menghapusSpasi.length - 1); // mengambil huruf terakhir dari line
  return hurufTerakhir;
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  return frontDoorPassword(word) + ', please'; // mengubah huruf pertama menggunakan fungsi lalu menggabungkannya
}
