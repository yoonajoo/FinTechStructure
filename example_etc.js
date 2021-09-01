//(1)
let car = {
  name: "sonata",
  ph: 120,
  sn: 1232123123,
  date: new Date(),
};

let book = {
  name: "dollor dream",
  author: "youna Joo",
  sn: 2234566654,
  date: new Date()
};


// const printCar = (name, ph, sn, date) => {
//   console.log(name, ph, sn, date);
// };
const printCar = (car) => {
  const { name, ph, sn, date } = car;
  //...
  console.log(name, ph, sn, date);
};

const printBook = (book) => {
  const { name, author, sn, date } = book
  console.log(name, author, sn, date);
};

printCar(car);
printBook(book);



