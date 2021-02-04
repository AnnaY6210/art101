console.log("hi");

function comparingNumbers(n1, n2) {
  console.log("First Number: " + n1);
  console.log("Second Number: " + n2);

  if (parseInt(n1) > parseInt(n2)) {
    console.log(n1 + " is bigger than " + n2);
  } else if (parseInt(n2) > parseInt(n1)) {
    console.log(n2 + " is bigger than " + n1);
  } else {
    console.log(n1 + " is equal to " + n2);
  }

}

comparingNumbers(1, 2);
comparingNumbers(2, 2);
comparingNumbers(4, 1);
