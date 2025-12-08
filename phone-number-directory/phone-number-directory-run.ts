import { phoneNumberDirectory } from "./phone-number-directory";

const phoneNumberList = [
    'john:123-456-7890',
    'jane:987-654-3210',
    'joe:555-555-5555'
];

console.log('Phone number directory algorithm');
const directory = phoneNumberDirectory(phoneNumberList);
console.log(directory);