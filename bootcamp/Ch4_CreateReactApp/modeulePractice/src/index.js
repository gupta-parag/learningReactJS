import fruits from "./food";
import { choice, remove } from "./helpers";

const randomFruit = choice(fruits);

// console.log(fruits);
console.log(`I'd like one ${randomFruit}, please`);
console.log(`Here you go : ${randomFruit}`);
console.log(`Delicious! May I have another?`);
console.log(remove(randomFruit, fruits));
console.log(`I am sorry, we are all out. We have ${fruits.join(",")} left`);
// console.log(remove("watermelon", fruits));
// console.log(fruits);
