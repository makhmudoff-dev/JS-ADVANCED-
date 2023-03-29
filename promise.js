const users = [
  { name: "John", lastName: "Hooly", email: "john@example.com" },
  { name: "Muhammad", lastName: "Mali", email: "mali@example.com" },
  { name: "Dilbar", lastName: "Dilbar", email: "dilbar@example.com" },
];

function getUsers() {
  setTimeout(() => {
    let result = "";
    users.forEach((user) => {
      result += `<li>${user.name} ${user.lastName}</li>`;
      document.body.innerHTML = result;
    });
  }, 1000);
}

function addUser(user) {
  // promise har doim resolve va reject parametrlarni oz ichiga oladi agar tog'ri bo'lsa resolve
  // va reject. Agar bizda promise hech qanday muammo bo'lmasa natija qaytish uchun resolvni chaqiramiz
  // agar error bo'lsa reject ga borib tushadi
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Qandaydur xatolik bor");
      }
    }, 2000);
  });
}

addUser({ name: "Halim", lastName: "Salim", email: "salim@gmail.com" }).then(
  getUsers
);

// Biz catch orqali xatlolarni ushlab olishimiz mumkin. Yani console ga chiqarib olamiz
// hozir bizda xatolik yo'q agar fasle ni o'rniga true bo'lganda xatolik bo'lardi
//   .catch((err) => console.log(err));

function addOneUser(user) {
  /*
	promise har doim ikkita paramaterni oz ichiga oladi 
	resolve va reject. Agar code da hech qanday error bo'lmasa natija qaytish uchun resolveni chaqiramiz
	agar code da biron bir xatolik bo'lsa reject ga tushadi.
	*/
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      const problem = false;

      if (!problem) {
        resolve();
      } else {
        reject("There is any problem");
      }
    }, 3000);
  });
}

addOneUser({
  name: "Toshmat",
  lastName: "Eshmat",
  email: "toshmat@gmail.com",
})
  // function chaqirganda then() dan foydalanamiz.
  .then(getUsers)
  .then(addUser)
  // Biz catch orqali xatlolarni ushlab olishimiz mumkin. Yani console ga chiqarib olamiz
  // hozir bizda xatolik yo'q agar fasle ni o'rniga true bo'lganda xatolik bo'lardi
  //   .catch((err) => console.log(err));
  .catch((err) => console.log(err));

/* Umumiy xulosa 
	Promise ES6 chiqgandan keyn chiqdi undan avval callback functionlardan foydalanilardi
	Promise ni vazifasi code asynxron syntaksi 
	yani coda bir nechta buyruqlarni serverga yuborishda oson yo'l
*/
