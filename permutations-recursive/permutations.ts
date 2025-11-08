function permutations(str: string): string[] {
    let result = [];

    if (str.length === 0) {
        result.push("");
        return result;
    }

    for (let i = 0; i < str.length; i++) {
        const firstChar = str[i];

        const restOfString = str.slice(0, i) + str.slice(i + 1);
        const subpermutations = permutations(restOfString);

        for (let j = 0; j < subpermutations.length; j++) {
            result.push(firstChar + subpermutations[j]);
        }
    }

    return result;
}

export { permutations };