const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

  
console.log(infiniteNum);
    
/*  
        --PROPERTY--  
Number.MAX_VALUE  -  The largest positive  
                    representable number (1.7976931348623157e+308)
Number.MIN_VALUE  - he smallest positive representable number (5e-324)
Number.NaN    -     Special "not a number" value
Number.NEGATIVE_INFINITY     -     Special negative infinite value; 
                                    returned on overflow
Number.POSITIVE_INFINITY      -    Special positive infinite value; 
                                   returned on overflow


umber.EPSILON    -  Difference between 1 and the smallest 
                    value greater than 1 that can be represented 
                    as a Number (2.220446049250313e-16)

Number.MIN_SAFE_INTEGER       -   Minimum safe integer in JavaScript 
                                    (−2^53 + 1, or −9007199254740991)

Number.MAX_SAFE_INTEGER      -      Maximum safe integer in JavaScript 
                                    (+2^53 − 1, or +9007199254740991)
*/




const pi = Math.PI;
console.log(pi);

const sin = Math.sin(1.5633);
console.log(sin);

// Radians are a unit of angular measurement, an alternative to degrees,
//where one radian is the angle subtended 
//at the center of a circle by an arc that is equal in 
//length to the radius of the circle. 
const b1 = 123n;

const b2 = -1234567890987654321n;

console.log(b1, b2);
console.log(`back to
------
basic`)

const five = 5;
const ten = 10;
console.log(`fifteen is ${five + ten} and not ${2 * (five + ten)}.`);
