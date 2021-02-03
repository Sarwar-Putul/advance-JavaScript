const numbers = [3, 2, 1, 5, 7, 6, 8, 9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
};
// console.log(output);

// অথবা
function square(element) {
    return element * element;
}
// অথবা

const result = numbers.map(function(element) {
    return element * element;
})
console.log(result);

//অথবা
const square = element * element

// অথবা
const square = x => x * x;


//অথবা
const result = number.map(x => x * x); //map করার নিয়ম


//

const bigger = number.filter(x => x > 5);
console.log(bigger); // ফিল্টার শর্তপুরন কারী ভ্যালু গুলো নিয়ে array আকারে দেবে।

//
const isThere = numbers.find(x => x > 5); // ফাইন্ড শর্তপুরন কারী কেবল প্রথম এলিমেন্টটা কে দেখাবে।