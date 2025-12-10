function phoneNumberDirectory(phoneNumberList: string[]): Map<string, string> {
    let directory = new Map();

    for (const item of phoneNumberList) {
        const [name, phone] = item.split(':');
        directory.set(name, phone);
    }

    return directory;
}

export { phoneNumberDirectory };