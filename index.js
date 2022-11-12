// Importing the module
const crypto = require('crypto-js');

var data = "Hello World!";

var key = "password@12552";

var encrypted = crypto.AES.encrypt(data, key).toString();

console.log("Encrypted data");

console.log(encrypted);


console.log("Decrypted data");

var decrypted = crypto.AES.decrypt(encrypted, key).toString(crypto.enc.Utf8);


console.log(decrypted);
