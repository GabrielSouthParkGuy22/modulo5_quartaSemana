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

const clientsArr = [];
const productsArr = [];
const salesArr = []; //compare the products to productsArr so you can get the name, and price, just add it to an array first
let input = 0;

while (input != 4) {
  console.log(`==========Store==========`);
  console.log(`\n1 - insert products
2 - insert clients
3 - make a sale
4 - exit`);

  input = parseInt(prompt("type one of the above numbers: "));

  switch (input) {
    case 1:
      let productName = prompt("type the product's name: ");
      let productPrice = parseFloat(prompt("type the price: "));
      const product = new Products(productName, productPrice);
      productsArr.push(product);
      break;
    case 2:
      let clientName = prompt("type the client's name: ");
      let clientCPF = parseInt(prompt("type the client's CPF: "));
      const client = new Clients(clientName, clientCPF);
      clientsArr.push(client);
      break;
    case 3:
      let clientNameSale = prompt("type the client's name: ");
      let j = 0;
      let foundName = false;

      while (j < clientsArr.length) {
        if (clientNameSale === clientsArr[j]["name"]) {
          foundName = true;
          break;
        }
        j++;
      }

      if (foundName) {
        let whichProduct = prompt("Which product did you buy?: ");
        let howManyProducts = parseInt(
          prompt("how many products did you buy?: ")
        );
        let productFound = false;
        let productValue = null;

        const productList = [];
        while (true) {
          for (let i = 0; i <= productsArr.length - 1; i++) {
            if (whichProduct === productsArr[i]["name"]) {
              productFound = true;
              productValue = i;
              break;
            }
          }

          if (productFound) {
            for (let j = 0; j < howManyProducts; j++) {
              productList.push(productsArr[productValue]);
            }
            let keepBuying = prompt("keep buying?: (s/n)");
            if (keepBuying.toLowerCase() === "s") {
              whichProduct = prompt("Which product did you buy?: ");
              howManyProducts = parseInt(
                prompt("how many products did you buy?: ")
              );
            } else {
              break;
            }
          } else {
            console.log("could not found the product!, try again...");
            whichProduct = prompt("Which product did you buy?: ");
            howManyProducts = prompt("how many products did you buy?:");
          }
        }

        const sale = new Sales(clientNameSale, productList);
        salesArr.push(sale);
        console.log(sale.calc(sale.products));
      } else {
        console.log("could not found the user name!");
      }
      break;
  }
}

console.log(productsArr);
console.log(clientsArr);
console.log(salesArr);
