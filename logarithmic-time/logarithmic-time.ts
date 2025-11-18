/*
Logarithmic time O(log n)

Logarithmic time means that the time required to complete 
a function is proportional to the logarithm of the input
data set.

Super eficient.
*/

function findPower(base, exponent) {
    //Base case
    if (exponent === 0) {
        return 1;
    }

    if (exponent % 2 === 0) {
        const halfPower = findPower(base, exponent / 2);
        return halfPower * halfPower;
    }
    else {
        const halfPower = findPower(base, (exponent - 1) / 2);
        return base * halfPower * halfPower;
    }
}

/*  
Note: any number raised to an even exponent can be split
into two halves and the result is the square of the number
raised to half the exponent.

n^4 = n^2 * n^2
n^3 = n * n^2
*/

export { findPower }