//prompt
const prompt = require("prompt-sync")();

//products
class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//Clients
class Clients {
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
}

//Sales
class Sales {
  constructor(client, products) {
    this.client = client;
    this.products = products;
  }
  calc() {
    let finalPrice = 0;
    let i = 0;

    while (i <= this.products.length - 1) {
      finalPrice += this.products[i]["price"];
      i++;
    }

    return finalPrice.toFixed(2);
  }
}

const clientsArr = [
  { name: "Tiago", cpf: 321321122 },
  { name: "Gabriel", cpf: 321321123 },
  { name: "Ruan", cpf: 321321124 },
];
const productsArr = [
  { name: "Nuclear Throne", price: 24.89 },
  { name: "Project Zomboid", price: 59.99 },
  { name: "Hades", price: 74.99 },
];
const salesArr = [];

let howManyProducts = 2;
let i = 0;
let findProduct = prompt("find the product name: ");
let productFound = false;

const productList = [];
while (true) {
  for (let i = 0; i <= productsArr.length - 1; i++) {
    if (findProduct === productsArr[i]["name"]) {
      productFound = true;
      break;
    }
  }

  if (productFound) {
    for (let j = 0; j < howManyProducts; j++) {
      productList.push(productsArr[i]);
    }
    break;
  } else {
    console.log("could not found the product!, try again...");
    findProduct = prompt("find the product name: ");
  }
}

const sale = new Sales("Gabriel", productList);
salesArr.push(sale);
console.log(sale.calc(sale.products));
