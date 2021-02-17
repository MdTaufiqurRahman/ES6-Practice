class Parent {
    constructor(name){
        this.fatherName = ("ssssssss");
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child ('Supodik');
const baby2 = new Child ('Ghdik');
console.log(baby, baby2);