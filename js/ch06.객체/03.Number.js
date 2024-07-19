// 표준 내장 객체 - Number
let num = 273;
let NumberFromConstructor = new Number(273);
console.log(num, NumberFromConstructor);

const pi = Math.PI;
console.log(pi);                    // 3.141592653589793
console.log(pi.toFixed(5));         // 3.14159
console.log(pi.toFixed(6));         // 3.141593 , 소수점 이하 6자리까지 보여줌, 반올림
console.log(pi.toExponential());    // 3.141592653589793e+0
console.log((1000*pi).toExponential()); // 3.141592653589793e+3
console.log(pi.toPrecision(3));

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Math.pow(2, 53) - 1);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);    //-Infinity Infinity

//NaN  (Not a Number)
let a = parseInt('string');
console.log(Number.isNaN(a));