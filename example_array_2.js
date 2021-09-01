// 같은 정답 다른 방법
let cars = ["sonata", "bmw", "porter", 100];

for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  console.log(car);
}

for (car of cars) {
  console.log(car);
}

// 이걸 써라!
cars.map((car) => {
  console.log(car);
});


 