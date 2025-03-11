function isLarge(x, y, z) {
  if (x > y && x > z) {
    console.log(x + "  x. is the lagrest number");
  } else if (y > x && y > z) {
    console.log(y + "  .y is the largest number");
  } else {
    console.log(z + "  z    is the largest number");
  }
}
let x = 11;
let y = 15;
let z =15;
isLarge(x, y, z);
