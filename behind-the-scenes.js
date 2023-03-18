const hobbies = ['Sports', 'Cooking'];

hobbies.push('Reading');

const person = { age: 32 };

function get_adualt_years(p) {
    p.age = p.age - 18;
    return p.age;
}

console.log(get_adualt_years({ ...person }));       //함수안에서 해당 값을 변경해도 바뀌지않음
console.log(get_adualt_years({ age: person.age })); //함수안에서 해당 값을 변경해도 바뀌지않음
console.log(get_adualt_years(person));              //바뀜
console.log(person);