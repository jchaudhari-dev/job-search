const developers = {
    salary:100000,
    experience: 3.0,
    technologies:["vue", "react", "angular"],
    lookingForWork: true,
    doublrSalary(){
        this.salary *= 2;
        this.lookingForWork = false;
    }
};

console.log(developers.salary);
console.log(developers.lookingForWork);

developers.doublrSalary();

console.log(developers.salary);
console.log(developers.lookingForWork);

