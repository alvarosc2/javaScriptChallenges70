type NestedArray = (number | NestedArray)[];

function flattenArray(arr: NestedArray): number[] {
    let result: number[] = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        }
        else {
            result.push(item);
        }
    }

    return result;
}

export { flattenArray };