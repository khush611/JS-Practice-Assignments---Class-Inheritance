// declare class
class Shape {
  constructor() {
    this.color = "#eee45d";
  }
  drawShape() {
    return "drawShape";
  }
  calculateArea() {
    return "calculateArea";
  }
}
// export class using module.exports
module.exports = Shape;
