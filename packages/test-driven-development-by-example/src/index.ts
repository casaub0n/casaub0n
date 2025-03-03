import { Money } from "./money";

const init = () => {
  const five = Money.dollar(10);
  console.log(`Money currency is ${five.currency}. Now, the amount is ${five.amount}$`);
};

init();
