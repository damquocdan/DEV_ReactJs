function add(num1, num2=100){
    return num1+num2;
}
console.log(add(100));
console.log(add(100,200));
function printInfor(company,address){
    address = address|| "số 25 vũ ngọc phan";// address là tham số mặc định
    console.log("wellcome to, ", company, "add:" ,address);

}
printInfor("devmaster");
printInfor("dev máter âcdemy","toà viện công nghệ số 25vnp")