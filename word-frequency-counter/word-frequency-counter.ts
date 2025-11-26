function wordFrequencyCounter(str: string): Map<string, number> {
    const wordFrequencyMap: Map<string, number> = new Map();

    const words = str.toLowerCase().split(/\W+/);

    for (const word of words) {
        if (word === '') {
            continue;
        }

        if (wordFrequencyMap.has(word)) {
            wordFrequencyMap.set(word, wordFrequencyMap.get(word) + 1);
        }
        else {
            wordFrequencyMap.set(word, 1);
        }
    }

    return wordFrequencyMap;
}

export { wordFrequencyCounter }