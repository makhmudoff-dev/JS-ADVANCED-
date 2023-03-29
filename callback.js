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
  }, 3000);
}

getUsers();

function addUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 5000);
}

addUser(
  { name: "Toshmat", lastName: "Eshmatov", email: "toshmat@gmail.com" },
  getUsers
);

function addOneUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback(users);
  }, 7000);
}

addOneUser(
  { name: "Halim", lastName: "Salim", email: "halim@gmail.com" },
  getUsers
);
