console.log('Hello!');

// 1. Given an array of objects representing students, filter out the students with a grade lower than 70%.

const students = [
  { name: 'Alice', grade: 80 },

  { name: 'Bob', grade: 65 },

  { name: 'Charlie', grade: 90 },
];
const lowerThan70 = students.filter((student) => student.grade > 70);
console.log(lowerThan70);
// Output: [ { name: 'Alice', grade: 80 }, { name: 'Charlie', grade: 90 } ]

// 2. Given an array of objects representing products, filter out the products with a price higher than $1000.

const products = [
  { name: 'Laptop', price: 1200 },

  { name: 'Smartphone', price: 800 },

  { name: 'Tablet', price: 500 },
];
const filterPrice = products.filter((pro) => pro.price < 1000);
console.log(filterPrice);
// Output: [ { name: 'Smartphone', price: 800 }, { name: 'Tablet', price: 500 } ]

// 3. Given an array of objects representing employees, filter out the employees with a salary lower than $50,000.

const employees = [
  { name: 'Alice', salary: 60000 },

  { name: 'Bob', salary: 45000 },

  { name: 'Charlie', salary: 70000 },
];

const filterOut = employees.filter((emp) => emp.salary > 50000);
console.log(filterOut);
// Output: [{ name: 'Alice', salary: 60000 }, { name: 'Charlie', salary: 70000 }]

// 4. Given an array of objects representing movies, filter out movies with a rating lower than 7.0.

const movies = [
  { title: 'Inception', rating: 8.8 },

  { title: 'Interstellar', rating: 8.6 },

  { title: 'The Dark Knight', rating: 9.0 },
];
const moviesFilter = movies.filter((movie) => movie.rating > 7.0);
console.log(moviesFilter);
// Output: [{ title: 'Inception', rating: 8.8 }, { title: 'Interstellar', rating: 8.6 }, { title: 'The Dark Knight', rating: 9 }]

// 5. Given an array of objects representing cars, filter out the cars older than 5 years.

const cars = [
  { brand: 'Toyota', year: 2018 },

  { brand: 'Honda', year: 2019 },

  { brand: 'Ford', year: 2010 },
];
const carsFilter = cars.filter((car) => 2024 - car.year <= 5);
console.log(carsFilter);
// Output: [ { brand: 'Honda', year: 2019 } ]

// 6. Given an array of objects representing students, filter out the  students with a GPA lower than 3.5.

const students2 = [
  { name: 'Alice', gpa: 3.8 },

  { name: 'Bob', gpa: 3.2 },

  { name: 'Charlie', gpa: 3.9 },
];
const studentsArray = students2.filter((student) => student.gpa > 3.5);
console.log(studentsArray);
// Output: [ { name: 'Alice', gpa: 3.8 }, { name: 'Charlie', gpa: 3.9 } ]

// 7. Given an array of objects representing fruits, filter out the fruits with a price higher than $2.00 per pound.

const fruits2 = [
  { name: 'Apple', pricePerPound: 1.5 },

  { name: 'Banana', pricePerPound: 2.2 },

  { name: 'Orange', pricePerPound: 1.8 },
];
const fruitsArr = fruits2.filter((fruit) => fruit.pricePerPound < 2);
console.log(fruitsArr);
// Output: [{ name: 'Apple', pricePerPound: 1.5 }, { name: 'Orange', pricePerPound: 1.8 }]

// 8. Given an array of objects representing employees, filter out the employees who are not currently employed.

const employees3 = [
  { name: 'Alice', employed: true },

  { name: 'Bob', employed: false },

  { name: 'Charlie', employed: true },
];
const emp = employees3.filter((emp) => emp.employed == true);
console.log(emp);
// Output: [{ name: 'Alice', employed: true }, { name: 'Charlie', employed: true }]

// 9. Given an array of objects representing products, filter out the products that are not in stock.

const products4 = [
  { name: 'Laptop', inStock: true },

  { name: 'Smartphone', inStock: false },

  { name: 'Tablet', inStock: true },
];

// Output: [{ name: 'Laptop', inStock: true }, { name: 'Tablet', inStock: true }]
const filterPro = products4.filter((p) => p.inStock == true);
console.log(filterPro);

// 10. Given an array of objects representing laptops, filter out the laptops with a screen size less than 15 inches.

const laptops = [
  { brand: 'Dell', screenSize: 14 },

  { brand: 'HP', screenSize: 15.6 },

  { brand: 'Lenovo', screenSize: 13 },

  { brand: 'Acer', screenSize: 17 },
];
const laptopsFilter = laptops.filter((laptop) => laptop.screenSize > 15);
console.log(laptopsFilter);
// Output: [{ brand: 'HP', screenSize: 15.6 }, { brand: 'Acer', screenSize: 17 }]
