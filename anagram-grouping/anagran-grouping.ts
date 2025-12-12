function anagramGrouping(words: string[]): string[][] {
    const anagramGroups = new Map();

    for (const word of words) {
        const sortedChars = word.split('').sort((a, b) => a.localeCompare(b)).join('');

        if (anagramGroups.has(sortedChars)) {
            anagramGroups.get(sortedChars).push(word);
        } else {
            anagramGroups.set(sortedChars, [word]);
        }
    }

    return Array.from(anagramGroups.values());
}

export { anagramGrouping };