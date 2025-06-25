function countDown(num) {
  console.log(`The current value is: ${num}`);

  if (num > 0) {
    countDown(num - 1); 
  } else {
    console.log("Count down finished!");
  }
};

countDown(5);

