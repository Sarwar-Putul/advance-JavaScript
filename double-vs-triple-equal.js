const first = 0;
const second = 2;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} // condition is false
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const first = 2;
const second = 2;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} //condition is true
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const first = 2;
const second = "2";
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} //condition is true // শুধু ভ্যালু চেক করে ।

//but

const first = 2;
const second = "2";
if (first === second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} //condition is false  //কারন (===) ভ্যালু এবং টাইপ বিচার বিবেচনা করে।
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const first = 1;
const second = true;
if (first == second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} //condition is true // কারন JavaScript ডিফল্ট ভাবে true  কে 1 এর সাথে compare  করে  এবং false কে 0 এর সাথে compare করে ।

//but

const first = 1;
const second = true;
if (first === second) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} //condition is false  কারন (===) ভ্যালু এর সাথে সাথে টাইপ টাও check করে।
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -