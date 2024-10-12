// "a"

// DERS 2 : DEĞİŞKENLER

// var age;
// console.log(age);

// age = 20;
// console.log(age);

// var fullname = "ceren efe";
// console.log(fullname);

// var fullname = "alara efe";
// console.log(fullname);

// Değişken Tanımlama Kuralları

// Sayısal ifade ile başlayamaz örneğin 1sayi olmaz sayi1 olur

// var sayi1;
// var _sayi2;
// var $sayi3;

// Komut isimleri ile tanımlama yapılmaz. var for ya da var switch gibi..

// Birden fazla kelime

// var ad = "ceren";
// var soyad = "efe";

// var ad_soyad = "Ceren Efe";
// var adSoyad = "Ceren Efe";

// Case Sentive (Büyük küçük harf duyarlılığı)

// var firstName = "Ceren";
// var FirstName = "Efe";

// console.log(firstName);
// console.log(FirstName);

// var, let, const

// let city = "Kocaeli";
// console.log(city);

//var email = "abc@gmail.com";
//console.log(email);

//email = "def@gmail.com";
//console.log(email);

// const email = "def@gmail.com";
// console.log(email);

// email = "def@gmail.com";
// console.log(email);

// const değer sabit olsun ve hiç değişmesin diye var.


// DERS 3 : DEĞİŞKEN TİPLERİ

// 1- Primitive Types ----------------------

// String

// let firstName = "Ceren";
// console.log(typeof firstName);

// Number 

// let age = 20;
// console.log(typeof age);

// let money = 100.05;
// console.log(typeof money);

//boolean

// let isActive = true;
// console.log(typeof isActive);

// null

// let job = null;
// console.log(typeof job);


// undefined (tanımlanmamış)

// let car;
// console.log(typeof car);


// 2- Reference Types = Objects ----------------------

//object
// array

// let names = ['ceren', 'efe', 'ali'];
// console.log(typeof names);

// // function

// var calculateAge = function() {
//     return 0;
// };

// console.log(typeof calculateAge);

// DERS 4 : TÜR DÖNÜŞÜMÜ

// örnek 1 --------

let num1 = '5';
console.log(typeof num1);

let num2 = '5';
let num3 = '10';

console.log(num2 + num3);

// örnek 2 --------

let sayi1 = Number('2');
let sayi2 = Number('2');

let total = sayi1+sayi2;

console.log(total);
console.log(typeof total);

// Number to string

let val;
val = String(100);

console.log(val);
console.log(typeof val);
console.log(val.length);

// arry to string

let abc;
abc = String([1,2,3,4]);

console.log(abc);
console.log(typeof abc);
console.log(abc.length);

//toString

val = (10).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

//string to number

val = Number('10');

console.log(val);
console.log(typeof val);
console.log(val.length);
//length sadece stringlere özgü 

//parseInt
//parseFloat

val = parseInt('10');          // örnek 1 -----

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseInt('10.5');        // örnek 1 -----

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = parseFloat('10.5');      // örnek 1 -----

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

















