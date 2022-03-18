/** Function as Class */
// function Polygon(items) {
//   this.perimeter = function () {
//     return items.reduce((sum, curr) => sum + curr);
//   };
// }

class Polygon {
  items = [];
  constructor(items) {
    this.items = items;
  }

  perimeter() {
    return this.items.reduce((sum, curr) => sum + curr);
  }
}

const test = new Polygon([10, 20, 40]);
console.log("perimeter", test.perimeter());
