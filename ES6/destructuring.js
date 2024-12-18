//kháii niệm về destructuring phá vỡ cấu trúc
var arr=[1,2,3,4,5,6];
var [x,y] = arr; // x=1 , y=2;
[x,y,z] = arr;// x=1, y =2, z =3
var person = {
    name: "dam dan",
    age : 19,
    add: "tienbao",
    phone: "0987654321"
}
var {name, phone} = person;
console.log("name", name);
console.log("phone", phone);
var {name, age,phone}=person;
console.log(name, age, phone);