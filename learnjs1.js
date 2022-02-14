alert("chao son");
confirm("hay chac chan ban da du tuoi");
var a = 5, b = 12;
function sum(a,b){
    return a + b;
}
var c;
(a < b ) ? c = a: c = b;
console.log(c);
let fistName = 'Tran';
let lastName = 'Son';
let fullName = fistName + " " + lastName;
console.log(`my name: ${fistName} ${lastName}`)     //ES6
console.log(fullName);
/*setTimeout(function() {
    console.log("haha"+ Math.random());
    alert(sum(a,b));
    
}, 1000);*/
var sinhvien = {
    ten: 'son',
    tuoi: '19',
    gioitinh: 'nam',
};
if(sinhvien.ten === "son"){
    console.log('ten sinh vien: ',sinhvien.ten);
}
else {
    console.log('hk co dau ma tim');
}
var arr = [];
for(let i = 0; i < fullName.leghth; i++)
{
   if (i % 2 == 0)
   fullName[i].toUpperCase();
}
var string = "cin gi nua Dau ma khoc dau voi sau";
console.log(string.toLowerCase())

/*var string1 = /"dau"/g;
console.log(string.indexOf('dau', string.indexOf('dau') + 1));
console.log(string.slice(string.indexOf("dau",string.indexOf("dau") + 1)));
console.log(string.replace(/dau/i,"son"));
console.log(string.indexOf("dau",string.indexOf("dau") + 1));
console.log(string.indexOf("dau",string.indexOf("dau") + 1) + string.length);
var arr = string.split(" ") ;
console.log(arr);
*/
/*function run(x, y) {
    
    if(x < y){
        var arr =[];
        arr[x] = x;
        return run(x+1,y)
    }return

}
run(1,5)*/
showInfo = (name) => {
    console.log(arguments[0]);
}

showInfo('Viblo');