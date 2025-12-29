class HashTable {
    storage: Array<Array<[string, string]>>;
    limit: number;

    constructor(limit = 14) {
        this.storage = [];
        this.limit = limit;
    }

    _hash(key: string, max: number): number {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.codePointAt(i);
        }

        return hash % max;
    }

    printTable() {
        for (let i = 0; i < this.storage.length; i++) {
            if (this.storage[i] !== undefined) {
                console.log(`Bucket ${i}: ${JSON.stringify(this.storage[i])}`);
            }
            else {
                console.log(`Bucket ${i} empty`);
            }
        }
    }

    set(key: string, value: string) {
        const index = this._hash(key, this.limit);

        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            let inserted: boolean = false;

            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value;
                    inserted = true;
                }
            }

            if (inserted === false) {
                this.storage[index].push([key, value]);
            }
        }
    }
}

export { HashTable };