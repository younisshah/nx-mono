export const multiply = (num: number, multiplier: number = 1) => {
    console.log(`Multiplying ${num} * ${multiplier}`);
    return num * multiplier;
};

export const double = (num: number) => {
    console.log(`Doubling=${num}`);
    return num * 2;
}

export const triple = (num: number) => {
    console.log(`Tripling=${num}`);
    return num * 3;
}
