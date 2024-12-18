class Person{
    constructor(){
        this.name = " Đàm Quốc Dân";
        this.age = 37;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this. age;
    }
}
var person = new Person();
person.setAge(38);
console.log("Tên người: " +person.getAge());
console.log("tuổi: "+person.getAge());
