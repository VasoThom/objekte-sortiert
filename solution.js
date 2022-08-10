// Aus unserer Datenbank erhalten wir das folgende Array mit Produkten.
// Wir sollen diese nun nach Kategorien sortiert ausgeben.
// Achtung: Manche Produkte sind nicht vorrätig, andere haben einen Rabatt,
// den wir mit dem Preis bereits verrechnen sollen.
// So soll die Ausgabe aussehen:
// Kategorie: Automotive
// ---------------------
// 1. Trippledex - Preis: 693.15 - nicht vorrätig
//
// Kategorie: Home
// ---------------------
// 2. Cookley - Preis: 807.53 - auf Lager: 165
// 11. Subin - Preis: 711.25 - auf Lager: 27
// ...
// Die Daten aus der Datenbank:
const products = [
  {
    id: 1,
    name: "Trippledex",
    category: "Automotive",
    price: 693.15,
    inStock: 0,
  },
  {
    id: 2,
    name: "Cookley",
    category: "Home",
    price: 832.5,
    discount: 0.03, // 3%
    inStock: 165,
  },
  {
    id: 3,
    name: "Flexidy",
    category: "Beauty",
    price: 972.93,
    inStock: 0,
  },
  {
    id: 4,
    name: "Tin",
    category: "Movies",
    price: 55.81,
    inStock: 0,
  },
  {
    id: 5,
    name: "Duobam",
    category: "Music",
    price: 804.19,
    inStock: 159,
  },
  {
    id: 6,
    name: "Latlux",
    category: "Clothing",
    price: 444.18,
    inStock: 0,
  },
  {
    id: 7,
    name: "Veribet",
    category: "Garden",
    price: 136.1,
    discount: 0.05,
    inStock: 66,
  },
  {
    id: 8,
    name: "Kanlam",
    category: "Books",
    price: 217.35,
    inStock: 135,
  },
  {
    id: 9,
    name: "Wrapsafe",
    category: "Tools",
    price: 566.5,
    inStock: 0,
  },
  {
    id: 10,
    name: "Temp",
    category: "Grocery",
    price: 682.37,
    discount: 0.06,
    inStock: 0,
  },
  {
    id: 11,
    name: "Subin",
    category: "Home",
    price: 911.86,
    discount: 0.22,
    inStock: 27,
  },
  {
    id: 12,
    name: "Tempsoft",
    category: "Games",
    price: 128.45,
    discount: 0.73, // 73%
    inStock: 56,
  },
  {
    id: 13,
    name: "Fix San",
    category: "Music",
    price: 723.17,
    discount: 0.71,
    inStock: 121,
  },
  {
    id: 14,
    name: "Sonair",
    category: "Outdoors",
    price: 740.12,
    inStock: 182,
  },
  {
    id: 15,
    name: "Ronstring",
    category: "Home",
    price: 592.93,
    inStock: 0,
  },
  {
    id: 16,
    name: "Flexidy",
    category: "Games",
    price: 147.23,
    discount: 0.32,
    inStock: 13,
  },
  {
    id: 17,
    name: "Job",
    category: "Grocery",
    price: 732.43,
    inStock: 95,
  },
  {
    id: 18,
    name: "Sonsing",
    category: "Computers",
    price: 825.65,
    inStock: 68,
  },
  {
    id: 19,
    name: "Veribet",
    category: "Grocery",
    price: 705.04,
    inStock: 106,
  },
  {
    id: 20,
    name: "Job",
    category: "Computers",
    price: 62.27,
    discount: 0.07,
    inStock: 90,
  },
  {
    id: 21,
    name: "Sonair",
    category: "Computers",
    price: 66.65,
    discount: 0.71,
    inStock: 3,
  },
  {
    id: 22,
    name: "Vagram",
    category: "Home",
    price: 439.69,
    inStock: 6,
  },
  {
    id: 23,
    name: "Alphazap",
    category: "Sports",
    price: 737.49,
    inStock: 0,
  },
  {
    id: 24,
    name: "Transcof",
    category: "Toys",
    price: 367.63,
    inStock: 0,
  },
  {
    id: 25,
    name: "Sub-Ex",
    category: "Toys",
    price: 741.33,
    inStock: 168,
  },
  {
    id: 26,
    name: "Sonair",
    category: "Shoes",
    price: 422.7,
    inStock: 156,
  },
  {
    id: 27,
    name: "Sonair",
    category: "Health",
    price: 447.4,
    inStock: 154,
  },
  {
    id: 28,
    name: "Konklab",
    category: "Tools",
    price: 257.75,
    inStock: 0,
  },
  {
    id: 29,
    name: "Zaam-Dox",
    category: "Clothing",
    price: 812.97,
    discount: 0.01,
    inStock: 171,
  },
  {
    id: 30,
    name: "Zoolab",
    category: "Sports",
    price: 860.65,
    inStock: 148,
  },
];

// const product1 = {
//   id: 1,
//   name: "Trippledex",
//   category: "Automotive",
//   price: 693.15,
//   inStock: 0,
// };
// function product(arr) {
//   console.log(
//     `${arr.id}. ${arr.name} - ${arr.price} - auf Lager: ${arr.inStock}`
//   );
// }
// product(product1);

// function printProduct(product) {
//   console.log(
//     `${product.id}. ${product.name} - ${product.price} - auf Lager: ${product.inStock}`
//   );
// }
// console.log(printProduct(products));

const sortOnCategory = (arr) => {
  const result = {};
  for (const { category, ...rest } of arr) {
    !(category in result)
      ? (result[category] = [rest])
      : result[category].push(rest);
  }
  return result;
};
const sortedObj = sortOnCategory(products);
const showInfo = (obj) => {
  for (const item in obj) {
    console.log();
    console.log("Category: " + item);
    console.log("-------------------");
    obj[item].forEach((x) => {
      console.log(
        `${x.id}. ${x.name} - Preis: ${x.price} - ${
          x.inStock > 0 ? "auf Lager: " + x.inStock : "nicht vorrätig"
        }`
      );
    });
  }
};
showInfo(sortedObj);

//////////////////////////////////////
