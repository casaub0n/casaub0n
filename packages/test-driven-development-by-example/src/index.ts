import { Money } from "./money";
import consola from "consola";

const init = (): void => {
  const five = Money.dollar(10);
  consola.log(`Money currency is ${five.currency}. Now, the amount is ${five.amount}$`);
};

init();
