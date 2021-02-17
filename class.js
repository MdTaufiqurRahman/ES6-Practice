class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'R.U.T high school';
    }

}
const student1 = new Student(12, "Anik");
const student2 = new Student(13, "Manik");
console.log(student1, student2.name);