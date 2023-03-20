export const multiply = (num: number, multiplier: number = 1) => {
    console.log(`Multiplying ${num} * ${multiplier}`);
    return num * multiplier;
};

const TWO = 2;
const THREE = 3;

export const double = (num: number) => {
    console.log(`Doubling=${num}`);
    return num * TWO;
}

export const triple = (num: number) => {
    return num * THREE;
}
