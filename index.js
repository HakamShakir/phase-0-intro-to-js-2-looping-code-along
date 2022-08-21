// Code your solutions in this file
function writeCards(names, event) {
  let thanksArray = [];
  let length = names.length;
  for (let i = 0; i < names.length; i++) {
    thanksArray[i] =
      "Thank you, " + names[i] + ", for the wonderful " + event + " gift!";
  }

  return thanksArray;
}

function countDown(no) {
  for (let i = no; i >= 0; i--) console.log(i);
}
