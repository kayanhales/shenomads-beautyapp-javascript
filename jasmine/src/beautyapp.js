var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function run() {
  var choice = rl.question("Welcome to the Beauty App. Would you like to buy skin care, nail art or makeup? Please enter '1' for skin care, '2' for nail art or '3' for makeup ", function(selection) {
    console.log(makeASelection(selection));
    closingMessage();
    rl.close();
  });
}
function makeASelection(selection){
  this.selection = selection;
  if (selection == '1') {
    return ("You've chosen skincare.");
  }
  else if (selection == '2') {
    return ("You've chosen nail art.");
  }
  else if (selection == '3') {
    return ("You've chosen makeup.");
  }
  else {
    return ("You didn't pick an appropriate value.");
  }
}

function closingMessage() {
  console.log("Thank you for using the Beauty App.")
}
run();
