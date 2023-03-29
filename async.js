"user strict";

const users = [
  { name: "John", lastName: "Hooly", email: "john@example.com" },
  { name: "Muhammad", lastName: "Mali", email: "mali@example.com" },
  { name: "Dilbar", lastName: "Dilbar", email: "dilbar@example.com" },
];

function getUsers() {
  setTimeout(() => {
    let result = "";
    users.forEach((user) => {
      result += `<li>${user.name}    ${user.email}    ${user.lastName}</li>`;
      document.body.innerHTML = result;
    });
  }, 2000);
}

getUsers();

function addUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("There was an error");
      }
    });
  });
}

/* 
	async function lar promise bilan bir xil vazifani barajaradi faqat har doim ham
	then().then().then().then().then().then().then().then().then()
	deb ketish ham code da sal noqulay va codeni sifatini fuzadi shuning uchun 
	hozirgi kunda jahon tajribasida dasturchilar asynchron funksyasidan 
	foydalanishadi. 
 */

async function result() {
  await addUser({ name: "Halim", lastName: "Salim", email: "salim@gmail.com" });
  getUsers();
}
result();
