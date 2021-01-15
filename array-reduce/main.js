const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];


const sum = (accumulator, currentValue) => accumulator + currentValue;
console.log('sum:', numbers.reduce(sum));


const product = (accumulator, currentValue) => accumulator * currentValue;
console.log('product:', numbers.reduce(product));

const balance = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    accumulator += currentValue.amount;
  } else if (currentValue.type === 'withdrawal'){
    accumulator -= currentValue.amount;
  }
  return accumulator;
}
console.log('balance:', account.reduce(balance, 0));

const composite = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
console.log('composite:', traits.reduce(composite));
