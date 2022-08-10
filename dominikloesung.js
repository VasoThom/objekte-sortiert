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

// -----------------------
// LÖSUNGEN
// -----------------------

// Da wir jedes Produkt in der gleichen Form ausgeben müssen,
// erstellen wir eine Funktion, die das für uns übernimmt.
// So können wir beliebig viele Produkte mit wenig Code formatieren.
// Als Parameter erwarten wir ein Produkt als Object.
function printProduct(product) {
  // Der tatsächliche Preis errechnet sich aus dem Grundpreis und dem Rabatt.
  // Wir lagern diese Berechnung aus und speichern das Ergebnis in einer Variable,
  // um unseren console.log() lesbarer zu machen.
  const price = (
    product.discount ? product.price * (1 - product.discount) : product.price
  ).toFixed(2);
  // Das gleiche Prinzip wenden wir auf den Bestand an:
  // Wir bereiten die Ausgabe vor, damit wir in console.log() nur noch die Variable platzieren müssen.
  const stock =
    product.inStock > 0 ? `auf Lager: ${product.inStock}` : "nicht vorrätig";

  // Hier wird die Ausgabe für ein Produkt zusammengesetzt.
  console.log(`${product.id}. ${product.name} - ${price} - ${stock}`);
}

// Ein Weg, die Produkte passend zu gruppieren, besteht darin,
// für jede Kategorie ein Array anzulegen, in das wir die Produkte einsortieren werden.
// Wir stellen uns vor, dass wir leere Kartons beschriften.
const automotiveProducts = [];
const homeProducts = [];
const sportsProducts = [];
const toolsProducts = [];
// ...

// Nun gehen wir jedes einzelne Produkt durch.
// Oder anders gesagt: Wir nehmen ein Produkt nach dem anderen von der Palette.
for (let i = 0; i < products.length; i++) {
  // Wir entscheiden anhand der Kategorie, was mit dem Produkt passieren soll.
  // Da wir viele verschiedene Optionen haben, nutzen wir switch.
  // Für jede Kategorie gibt es dann einen eigenen case,
  // in dem das Produkt in das jeweilige Array gepusht wird.
  switch (products[i].category) {
    case "Automotive":
      automotiveProducts.push(products[i]);
      break;
    case "Home":
      homeProducts.push(products[i]);
      break;
    case "Sports":
      sportsProducts.push(products[i]);
      break;
    case "Tools":
      toolsProducts.push(products[i]);
      break;
  }
}

// Sind wir mit der Schleife durch,
// haben wir die Produkte in die jeweiligen Arrays sortiert.
// Jetzt können wir die Ausgaben vornehmen.
console.log();
console.log("Automotive");
console.log("----------------------");
// Wir iterieren durch alle Produkte innerhalb einer Kategorie,
// bzw. wir gehen durch den Inhalt eines Kartons durch.
for (let i = 0; i < automotiveProducts.length; i++) {
  // Hier nutzen wir jetzt unsere Funktion, die die Ausgabe übernimmt.
  printProduct(automotiveProducts[i]);
}

// Das müssen wir nun für alle Kategorien einzeln wiederholen.
console.log();
console.log("Home");
console.log("----------------------");
for (let i = 0; i < homeProducts.length; i++) {
  printProduct(homeProducts[i]);
}

console.log();
console.log("Sports");
console.log("----------------------");
for (let i = 0; i < sportsProducts.length; i++) {
  printProduct(sportsProducts[i]);
}

console.log();
console.log("Tools");
console.log("----------------------");
for (let i = 0; i < toolsProducts.length; i++) {
  printProduct(toolsProducts[i]);
}
// ...

// Mit dieser Lösung erreichen wir zwar das gewünschte Ergebnis,
// allerdings haben wir eine Menge Code zu schreiben
// und können neue Kategorien nicht ohne Änderungen am Code berücksichtigen.
// -----------------------------------------------------------------------------------

// Neue Idee: Die Sortierung nach Kategorien muss dynamisch passieren!

// Zwischenschritte:

// 1. Object statt Array
// -------------------------
// const categories = {
//     home: [],
//     automotive: [],
//     sports: [],
//     tools: [],
// };
//
// for (let i = 0; i < products.length; i++) {
//     switch (products[i].category) {
//         case "Automotive":
//             categories.automotive.push(products[i]);
//             break;
//         case "Home":
//             categories.home.push(products[i]);
//             break;
//         case "Sports":
//             categories.sports.push(products[i]);
//             break;
//         case "Tools":
//             categories.tools.push(products[i]);
//             break;
//     }
// }
//
// console.log(categories);

// 2. Bracket Notation statt Dot Notation
// -------------------------
// const categories = {
//     home: [],
//     automotive: [],
//     sports: [],
//     tools: [],
// };
//
// for (let i = 0; i < products.length; i++) {
//     switch (products[i].category) {
//         case "Automotive":
//             categories["automotive"].push(products[i]);
//             break;
//         case "Home":
//             categories["home"].push(products[i]);
//             break;
//         case "Sports":
//             categories["sports"].push(products[i]);
//             break;
//         case "Tools":
//             categories["tools"].push(products[i]);
//             break;
//     }
// }
//
// console.log(categories);

// 3. Bracket Notation mit Variable statt String als Key
// -------------------------
// const categories = {
//     home: [],
//     automotive: [],
//     sports: [],
//     tools: [],
// };
//
// for (let i = 0; i < products.length; i++) {
//     switch (products[i].category) {
//         case "Automotive":
//             const category = "automotive";
//             categories[category].push(products[i]);
//             break;
//         case "Home":
//             categories["home"].push(products[i]);
//             break;
//         case "Sports":
//             categories["sports"].push(products[i]);
//             break;
//         case "Tools":
//             categories["tools"].push(products[i]);
//             break;
//     }
// }
//
// console.log(categories);

// 4. Bracket Notation mit Produktkategorie als Key
// -------------------------
// const categories = {
//     "Home": [],
//     "Automotive": [],
//     "Sports": [],
//     "Tools": [],
// };
//
// for (let i = 0; i < products.length; i++) {
//     switch (products[i].category) {
//         case "Automotive":
//             categories[products[i].category].push(products[i]);
//             break;
//         case "Home":
//             categories[products[i].category].push(products[i]);
//             break;
//         case "Sports":
//             categories[products[i].category].push(products[i]);
//             break;
//         case "Tools":
//             categories[products[i].category].push(products[i]);
//             break;
//     }
// }
//
// console.log(categories);

// Unser Object categories bleibt zu Beginn leer.
// Wir stellen uns ein leeres Lager vor, das befüllt werden soll.
const categories = {};

// Wir gehen alle Produkte in products durch.
for (let i = 0; i < products.length; i++) {
  // Um es uns einfacher zu machen,
  // speichern wir das aktuelle Produkt in eine neue Variable product.
  // So entfällt die Schreibweise mit dem Array und dem Index,
  // wenn wir etwas mit dem Produkt anstellen wollen.
  const product = products[i];

  // Zuerst prüfen wir, ob die Kategorie noch nicht in categories aufgeführt ist.
  // Dazu verwenden wir die Bracket Notation und setzen statt eines konkreten Werts product.category ein.
  // product.category enthält einen String mit der Kategorie.
  // Lautet die Kategorie "Tools", greifen wir auf categories["Tools"] zu.
  // Ist die Kategorie noch nicht gelistet - also undefined - fügen wir sie hinzu,
  // indem wir ein leeres Array darin speichern.
  if (categories[product.category] == undefined) {
    categories[product.category] = [];
  }

  // Nach der o.g. Prüfung, können wir davon ausgehen, dass die Kategorie existiert.
  // Jetzt müssen wir nur noch das Produkt product in die Kategorie categories[product.category] pushen.
  categories[product.category].push(product);
}

// categories enthält jetzt alle Kategorien, die wir in den Produkten finden konnten
// und alle Produkte sind diesen zugeordnet.
// Wir haben also nun wieder Arrays für sämtliche Kategorien,
// diesmal allerdings verpackt in einem Objekt.
console.log(categories);

// Wir können mit Object.keys(), Object.values() und Object.entries()
// wichtige Informationen aus einem Object ziehen.
// Object.keys() gibt uns bspw. ein Array mit allen Keys zurück,
// Object.values() gibt uns ein Array mit allen Values zurück
// und Object.entries() erzeugt ein Array, dessen Elemente wiederum Arrays sind.
// Diese haben zwei Elemente: Key und Value.

console.log("---");
console.log(Object.keys(categories));
console.log("---");
console.log(Object.values(categories));
console.log("---");
console.log(Object.entries(categories));
console.log("---");

// Um jede Kategorie ausgeben zu können, nutzen wir Object.keys(),
// damit wir eine Auflistung aller Kategorien erhalten.
const categoryNames = Object.keys(categories);

// Diese Keys gehen wir nun einzeln durch.
for (let i = 0; i < categoryNames.length; i++) {
  // Auch hier wieder: aktuelle Kategorie in eine Variable speichern,
  // um die nächsten Schritte lesbarer zu gestalten.
  const category = categoryNames[i];

  console.log();
  console.log(category);
  console.log("----------------------");

  // Da die Produkte einer Kategorie in categories unter dem jeweiligen Key zu finden sind,
  // verwenden wir den for Loop, um an jedes einzelne Produkt ranzukommen.
  for (let j = 0; j < categories[category].length; j++) {
    const product = categories[category][j];
    // Das Produkt geben wir an printProduct() weiter, um die passende Ausgabe zu erzeugen.
    printProduct(product);
  }
}
