function calculator(num1: number, num2: number, operator: string): number | undefined {
    let result: number = 0;

    if (operator === '+') {
        result = num1 + num2;
    }
    else if (operator === '-') {
        result = num1 - num2;
    }
    else if (operator === '*') {
        result = num1 * num2;
    }
    else if (operator === '/') {
        if (num2 === 0) {
            throw new Error('Division by zero. num2 parameter must be different from zero');
        }

        result = num1 / num2;
    }
    else {
        throw new Error('Invalid operator: ' + operator);
    }

    return result;
}

export { calculator }