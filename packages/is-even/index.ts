export const isEven = (x: number) => {
    console.log(`num=${x}`);
    return !(x & 1);
}
export const FOOBAR = 100;

function printFoobar() {
    console.log(FOOBAR + 1);
}
