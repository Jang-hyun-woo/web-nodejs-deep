/*
const job = {
    title: 'Developer',
    location: 'New York',
    salary: 50000,
};

console.log(new Date().toISOString());

const job2 = {
}
*/

class Job {
    //내장함수 constructor
    constructor(job_title, place, salary) {
        //생성된 객체를 참조
        this.title = job_title;
        this.location = place;
        this.salary = salary;
    };

    describe() {
        console.log(`I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}. `);
    }
}

const Developer = new Job('Developer', 'New York', 50000);
const cook = new Job('Cook', 'Munich', 35000);
Developer.describe();
cook.describe();
