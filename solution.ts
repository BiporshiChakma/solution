
function formatValue(input:string | number | boolean){
    if(typeof input === "string"){
      return input.toUpperCase();
    }else if (typeof input === "number"){
       return input * 10;
    }
    else if(typeof input === "boolean"){
        return input != true   ? true : false;
    }
    else{
        return "worong input";
    }
}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));




function getLength(input: any ){
    if(typeof input === "string"){
        return input.length;
    }
    else if(Array.isArray(input)){
        return input.length;
    }
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));



class Person{
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age =age;
    }
    getDetails(){
        return `"name: ${this.name} , age: ${this.age}";`;
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
function filterByRating(books: {title:string, rating:number}[]){
    return books.filter(input => input.rating >= 4)
}

// console.log(filterByRating(books));




const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
function filterActiveUsers(users: {id:number, name:string, email:string, isActive:boolean}[]){
    return [...(users.filter(input=>input.isActive === true))];

}
// console.log(filterActiveUsers(users));


type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
};
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};
function printBookDetails(book: {title:string, author:string, publishedYear:number, isAvailable:boolean}[]){
    book.forEach(book=>{
        console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, 
            Available: ${book.isAvailable}`)
    });

}

// printBookDetails([myBook]);




const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

function getUniqueValues(array1: any, array2: any) {
  const newArr = [...array1, ...array2];
  var i: number;
  var val: number;
  var unique: number = 0;
  var count: number;
  var finalArr: number[] = [];

  for (i = 0; i < newArr.length; i++) {
    count = 0;
    
    for (val = 0; val < unique; val++) {
      if (newArr[i] === finalArr[val]) {
        count ++; 
        break;
      }
    }

    if (count == 0) {
      finalArr[unique] = newArr[i];
      unique++;
    }
  }

  return finalArr;
}

console.log(getUniqueValues(array1, array2));




type ProductType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number; 
};

const products: ProductType[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 }, 
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },      
];

const totalPrice: number = products.reduce((total: number, product: ProductType) => {

  const priceAfterDiscount = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return total + priceAfterDiscount * product.quantity;
}, 0);

// console.log(totalPrice);




