const object = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  gpa: 1.5,
};

const status = (object) => {
  if (object.gpa > 2) {
    return JSON.stringify(object);
  } else {
    return "คุณ " + object.firstname + " " + object.lastname + " " + "พ้นสภาพ";
  }
};

console.log(status(object));
