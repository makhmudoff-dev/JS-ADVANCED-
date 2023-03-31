//  Properties

const user = {
  name: "John",
  email: "james@gmail.com",
  age: 25,
  hello: function () {
    console.log("Hello");
  },
};

// method yaratishda biz prototype dan foydalanamiz
Object.prototype.myAge =
  function () // method bu function har doim uni functionga tenglab olamiz
  {
    console.log("My age is 24");
  };

//   Shu tariqa methodlar yaratishimiz mumkin
