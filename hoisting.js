"use strict";

/*    Hoisting 
Bu lug'avi manosi ko'tarish degani dasturchilar tevaga olib chiqib qo'yish deb tushunadi

*/

let first = "first";
let second = "second";
let third = "third";

//

console.log(fourth);
var fourth;
/*
Hozir bu yerda undefined qaytaradi sababi hali unga qiymat bermadik
*/

console.log(fourth);
var fourth = "fourth";

/*
Unga qiymat bersak ham bizga undefined qaytaradi sababi shu yerda hoisting bo'lyapti
yani Hoisting bu faqat ozaruvchini o'zini tevaga olib chiqib qo'yadi:


var fourth 
let first = "first";
let second = "second";
let third = "third";


huddi shunday.
lekin agar o'zgaruvchi elon qilib qiymat bergandan keyn clg qilib chaqirsak 
bizga qiymatni chiqarib beradi:

var fourth = "fourth";

console.log(fourth);  // fourth

*/
var fourth = "fourth";

console.log(fourth);
