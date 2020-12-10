/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = new Array;
}


Account.prototype.deposit = function(amount) {
  if (Math.sign(amount) === 1) {
    this.transactions.push(new Transaction ("deposit", amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.withdraw = function(amount) {
  if (Math.sign(amount) === 1) {
    this.transactions.push(new Transaction ("withdrawl", amount));
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function() {
  var deposits = 0;
  var withdawls = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if(this.transactions[i].type === "deposit") {
      deposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === "withdrawl") {
      withdawls += this.transactions[i].amount;
    }
  }
  var balance = deposits - withdawls;
  return balance;
}
