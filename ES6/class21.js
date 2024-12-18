class Person{
    constructor(){
        this.name = " Đàm Quốc Dân";
        this.age = 37;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this. age;
    }
}
class Student extends Person{
    constructor(name,age,StudentID){
        super(name,age);
        this.StudentID="SV001";
    }
    getStudentInfo(){
        return "tên: "+this.getName()+" tuổi: "+this.getAge()+"Mã sinh viên"+ this.StudentID;
    }
}
var student = new Student();
console.log(student.getStudentInfo());