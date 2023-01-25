function solve(n) {
  let n1 = 2;
  let n2 = 3;
  let n3 = 6;
  let n4 = 7;
  let n5 = 10;

  if (n % n5 === 0) {
    console.log(`The number is divisible by ${n5}`);
  } else if (n % n4 === 0) {
    console.log(`The number is divisible by ${n4}`);
  } else if (n % n3 === 0) {
    console.log(`The number is divisible by ${n3}`);
  } else if (n % n2 === 0) {
    console.log(`The number is divisible by ${n2}`);
  } else if (n % n1 === 0) {
    console.log(`The number is divisible by ${n1}`);
  } else {
    console.log(`Not divisible`);
  }
}

solve(1643);
