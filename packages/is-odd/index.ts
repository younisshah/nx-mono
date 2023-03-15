import { isEven } from "../is-even";

console.log('odd calc')
export const isOdd = (num: number) => !isEven(num);
export const FOOBAR = 10;
function printFoobar() {
    console.log(FOOBAR+1);
}
