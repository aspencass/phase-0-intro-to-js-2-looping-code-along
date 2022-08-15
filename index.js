function writeCards(thanksArray, adjective) {
  let newArray =[]
  for (let name of thanksArray) {
    newArray.push(`Thank you, ${name}, for the wonderful ${adjective} gift!`)
  }
  return newArray
      


  // newArray.push(`Thank you, ${thanksArray[0]}, for the wonderful ${adjective} gift!`)
  // newArray.push(`Thank you, ${thanksArray[1]}, for the wonderful ${adjective} gift!`)
  // newArray.push(`Thank you, ${thanksArray[2]}, for the wonderful ${adjective} gift!`)
  // return newArray
}

   
function countDown(counter) {
  // let counter = 10;
    while (counter >= 0) {
      console.log(counter);
      counter--;
      };
}
console.log(countDown(10))
