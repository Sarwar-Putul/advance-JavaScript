const nums = [11, 12, 13, 14, 15, 1, 8, 2, 3, 4, 5, 6];
const part = nums.slice(2, 5);
console.log(part); // slice কোন array থেকে ভ্যালু বা এলিমেন্ট কেটে নিয়ে নতুন array তৈরি করে,কিন্তু অরিজিনাল array তে কোন পরিবর্তন হয় না।

-- -- -- -- -- -- -- --
const nums = [11, 12, 13, 14, 15, 1, 8, 2, 3, 4, 5, 6];
const removed = nums.splice(2, 6);
console.log(removed); // splice কোন array থেকে ভ্যালু বা এলিমেন্ট কেটে নিয়ে নতুন array তৈরি করে, এবং অরিজিনাল array তে এই ভ্যালু আর থকে না।
console.log(nums);

-- -- -- -- -- -- -
const nums = [11, 12, 13, 14, 15, 1, 8, 2, 3, 4, 5, 6];
const removed = nums.splice(2, 6, 77);
console.log(removed); // splice নতুন array তৈরর পাশাপাশি যেখান থেকে ভ্যালু কেতে নিছে সেইখানে নতুন ভ্যালু যোগ করে দিতে পারে।
console.log(nums);

-- -- -- -- -- -- -- -- -
const nums = [11, 12, 13, 14, 15, 1, 8, 2, 3, 4, 5, 6];
const together = nums.join('putul');
console.log(together); // join  কোন array এর ভ্যালু গুল কিভাবে যুক্ত হবে তা নির্দেশ করে।