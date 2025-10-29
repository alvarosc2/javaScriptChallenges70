export function findMissingLetter_v1(arr: Array<string>): string {
    let start = arr[0].charCodeAt(0);

    const missingCharCode = arr.
        map(char => char.charCodeAt(0)).
        find((current) => {
            if (current - start > 1) {
                return true;
            }

            start = current;
            return false;
        });

    return missingCharCode ? String.fromCharCode(missingCharCode - 1) : '';
}

export function findMissingLetter_v2(arr: Array<string>): string {
    // Convert the array of characters into an array of equivalent unicodes
    let charCodesArr = [];
    for (let index = 0; index < arr.length; index++) {
        charCodesArr.push(arr[index].charCodeAt(0));
    }

    // Find the missing letter using the array of unicodes
    let start = charCodesArr[0];
    let missingCharCode = 0;

    for (let index = 0; index < charCodesArr.length; index++) {
        let current = charCodesArr[index];
        if (current - start > 1) {
            missingCharCode = charCodesArr[current] - 1;
            break;
        }
        else {
            start = current;
        }
    }

    return missingCharCode ? String.fromCharCode(missingCharCode) : '';
}

