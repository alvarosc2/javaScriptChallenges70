function phoneNumberDirectory(phoneNumberList: string[]): Map<string, string> {
    let directory = new Map();
    let splitedStrings = [];

    for (const item of phoneNumberList) {
        splitedStrings.push(item.split(':'));
    }

    for (const item of splitedStrings) {
        directory.set(item[0], item[1]);
    }

    return directory;
}

export { phoneNumberDirectory };