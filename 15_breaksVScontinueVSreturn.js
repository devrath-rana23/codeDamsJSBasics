function evenNumber(skipNumber, breakNumber) {
    let evenNumbers = [];
    for (let i = 0; i < 10; i++) {
      if (i === skipNumber) {
        continue;
      }
      if (i === breakNumber) {
        break;
      }
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }
  
  console.log(evenNumber(2, 5));
  