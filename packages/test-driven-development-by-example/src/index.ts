import { Money } from "./money/index.js";

const init = () => {
  const five = Money.doller(10);
  console.log(`Money currency is ${five.currency}. Now, the amount is ${five.amount}\$`);
};

init();
