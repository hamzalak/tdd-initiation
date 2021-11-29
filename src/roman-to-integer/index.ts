const correspondingNumebrObject = {
    I: 1,
    X: 10,
    V: 5,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function romanToInt(romanNumber: string): number {
    const romanNumberAsStr: string[] = romanNumber.split('');

    if (romanNumber.length === 1) return correspondingNumebrObject[romanNumberAsStr[0]];

    // See the explication reference in the test file
    const arraNumber = romanNumberAsStr.map((elem) => correspondingNumebrObject[elem]).reverse();

    const sumArr = [arraNumber[0]];

    for (let i = 0; i < arraNumber.length - 1; i++) {
        if (arraNumber[i + 1] < arraNumber[i]) {
            sumArr.push(-arraNumber[i + 1]);
        } else {
            sumArr.push(arraNumber[i + 1]);
        }
    }
    return sumArr.reduce((prev, act) => act + prev, 0);
}
