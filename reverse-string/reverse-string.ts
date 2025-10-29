function reverseString(str: string): string {
    let reverseString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str.charAt(i);
    }

    return reverseString;
}

export { reverseString };