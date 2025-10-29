// Recursive function to reverse a string
function reverseString(str: string): string {
    // Base case. Return when empty string
    if (str === '') {
        return str;
    }

    // Recursive step
    return reverseString(str.slice(1)) + str.charAt(0);
}

// Another recursive implementation
const reverseString2 = (str: string) => str === '' ? '' : reverseString2(str.slice(1)) + str.charAt(0);

export { reverseString, reverseString2 };