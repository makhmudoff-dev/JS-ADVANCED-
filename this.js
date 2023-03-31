/* window 

window bu global object js ni global ojecti

*/

function myName() {
  console.log("My name: ", this); // bu yerda this global objectga yol ko'rsatyapti
}

/* bind 

bind bizga ontekstni yo'nalishini o'zgartirib berishga yordam beradi quyida 
misolda ko'rishiz mumkin. 
*/

const car = {
  name: "cobalt",
  year: 2022,
  sayName: myName,
  sayNameWindow: myName.bind(window), // bu yerda bind kontekstni yo'nalishini o'zgartirib berdi
  info: function (Model, Color) {
    console.log(`Car name is: ${this.name}`);
    // This bu obyect yani car.name === this.name
    console.log(`Year: ${this.year}`);
    console.log(`Model: ${Model}`);
    console.log(`Color: ${Color}`);
  },
};

// car.info();

const jentra = {
  name: "jentra",
  year: "2017",
};

// car.info.bind(jentra)();

// bu yerda bind bizga kontekstni yo'nalishini
// o'zgartirib beryapti. aslida biz car ni info siga murojat qilyapmiz lekin bizga
// jentrani infosini beryapti chunki biz bind ishlatib yo'nalishni o'zgartirib oldik

// bind defualt holatda function qaytaradi
// shuning uchun () function chaqirib qoyishimiz kerak
// tevada misolga qarasez tushunib olasiz.

// Call
// bind dan farqi funksyani o'zi chaqiradi. Bind da () yozib chaqirishimiz kerak edi.
// car.info.call(jentra);    ==> () yozish shart mas.
// ikkalasini farqi shunda xolos. Call ham kontekstni yo'nalishini o'zgartirib beradi.

car.info.bind(jentra, "chevrolet", "red")(); // () => func chaqiramiz
car.info.call(jentra, "chevrolet", "red"); // () => func chaqirmimiz call ni o'zi chaqiradi
car.info.apply(jentra, ["chevrolet", "red"]); // () => func chaqirmimiz apply ni o'zi chaqiradi

// call bilan apply ni farqi

// call da parametrlarni yozib ketiluradi chevrolet, red,
// apply ni call dan bitta farqi parametrlar [] ichiga yoziladi
