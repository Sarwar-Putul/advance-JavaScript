const object = [];
const students = [
    { id: 23, name: 'Omor sunny' }, { id: 24, name: 'Mannaaaaaa' }, { id: 25, name: 'Moyuree' }, { id: 26, name: 'DeepJol' }
]

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const result = element.name;
    object.push(result);
}
console.log(object);


//Object properties বা  map /filter/ find দিয়ে লোপ চালানোর সিস্টেম।

const names = students.map(s => s.name);
console.log(names);
const id = students.map(s => s.id);
console.log(id);
const bigger = students.filter(s => s.id > 25);
console.log(bigger);
const biggerOne = students.find(s => s.id > 24);
console.log(biggerOne);
গি