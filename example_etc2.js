//(2)
let car = {
  name: "sonata",
  ph: 120,
  sn: 1232123123,
  date: new Date(),
};


const printCar = (car) => {
    const { name, ph, sn, date } = car;
    //...
    const description =
      "자동차의 이름은 : " +
      name +
      " 입니다. 자동차의 마력은 : " +
      ph +
      " 입니다.";

    const templetDescription = `자동차의 이름은 : ${name} 입니다. 자동차의 마력은 : ${ph} 입니다`;

    console.log(description)
    console.log(templetDescription);
  };
  
  printCar(car);
  
  
   
  
  let book = {
  name: "dollor dream",
  author: "youna Joo",
  sn: 2234566654,
  date: new Date()
};

const printBook = (book) => {
  const {name, author, sn, date} = book;

  const templetDescription = `책의 이름은 ${name}이며 작가명은 ${author} 입니다. 책의 번호는 ${sn}입니다.`;

  console.log(templetDescription);
};
printBook(book);

