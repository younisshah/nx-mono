export const isEven = (x: number) => {
    console.log(`num=${x}`);
    return !(x & 1);
}

export const FOOBAR = 10;
function printFoobar() {
    console.log(FOOBAR+1);
}
