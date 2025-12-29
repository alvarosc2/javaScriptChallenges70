//@ts-check

import { HashTable } from './hash-table';

const myHashTable = new HashTable;
//const result = myHashTable._hash('john', myHashTable.limit);
//console.log(result);

myHashTable.set('john', '555-234-3455');
myHashTable.set('Alvaro', '555-123-3455');

myHashTable.printTable();