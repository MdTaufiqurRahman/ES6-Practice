const students = [
    {id: 21, name:'Omar'},
    {id: 22, name:'Manna'},
    {id: 23, name:'DeepJol'},
];
const names = students.map(s => s.name);
const bigger = students.filter(s => s.id> 21);
const biggerOne = students.find(s => s.id> 21)
console.log(biggerOne);