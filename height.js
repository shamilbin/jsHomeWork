let a = 10;
function outerHeight() {
  let b = 20;
  function innerHeight() {
    let c = 30;
    console.log(a, b, c);
  }
  innerHeight();
}

outer();
