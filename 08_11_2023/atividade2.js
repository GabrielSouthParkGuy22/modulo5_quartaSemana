//products
class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const products1 = new Products("Nuclear Throne", 24.89);
const products2 = new Products("Severed Steel", 44.49);
const products3 = new Products("Project Zomboid", 59.99);
const products4 = new Products("Hades", 74.99);

//Clients
class Clients {
  constructor(name, cpf) {
    this.name = name;
    this.cpf = cpf;
  }
}

const client1 = new Clients("Ruan", 12345678);
const client2 = new Clients("Gabriel", 87654321);

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

const sale1 = new Sales("Ruan", [
  {
    name: "Project Zomboid",
    price: 59.99,
  },
  {
    name: "Nuclear Throne",
    price: 24.89,
  },
]);

console.log(sale1);

console.log(sale1.calc(sale1.products));

const sale2 = new Sales("Gabriel", [
  {
    name: "Nuclear Throne",
    price: 24.89,
  },
  {
    name: "Severed Steel",
    price: 44.49,
  },
]);

console.log("\n", sale2);

console.log(sale2.calc(sale2.products));

//parse.JSON
const clientsStringJson =
  '[{"name":"Client 1", "cpf":"12345678901"},' +
  '{"name":"Client 2", "cpf":"10987654321"},' +
  '{"name":"Client 3", "cpf":"12345098765"},' +
  '{"name":"Client 4", "cpf":"12345098765"},' +
  '{"name":"Client 5", "cpf":"12345098765"},' +
  '{"name":"Client 6", "cpf":"12345098765"},' +
  '{"name":"Client 7", "cpf":"12345098765"},' +
  '{"name":"Client 8", "cpf":"12345098765"},' +
  '{"name":"Client 9", "cpf":"12345098765"},' +
  '{"name":"Client 10", "cpf":"12345098765"}]';

const clientsStr = JSON.parse(clientsStringJson);

const productsStringJson =
  '[{"name":"Product 1", "price":1.00},' +
  '{"name":"Product 2", "price":2.00},' +
  '{"name":"Product 3", "price":3.00},' +
  '{"name":"Product 4", "price":4.00},' +
  '{"name":"Product 5", "price":5.00},' +
  '{"name":"Product 6", "price":6.00},' +
  '{"name":"Product 7", "price":7.00},' +
  '{"name":"Product 8", "price":8.00},' +
  '{"name":"Product 9", "price":9.00},' +
  '{"name":"Product 10", "price":10.00}]';

const productsStr = JSON.parse(productsStringJson);

const bigSale = new Sales(clientsStr[3]["name"], productsStr);

console.log("\n", bigSale);

console.log(`\n total price: ${bigSale.calc(bigSale.products)}`);

//teste
const sale3 = new Sales(client1["name"], [products2, products4]);

console.log("\n", sale3);

console.log(sale3.calc(sale3.products));
