// ES5 Style
var num1=[10,20,30,40,50,60];
var info=[100,"Sai",true,2400.50]; //initialization of array
var num2=[];                       //memory created
var info2=[];                      //memory created

console.log(num1);                 //it display the output as string format
console.log(info);                 //string format
console.log(num1[0]);
console.log(num1[4]);
console.log(info[0]);
console.log(num1[2]);
console.log(num1.length);          // property of array    size 6 consider 
console.log(num2.length);          //  size is 0
num2.push(100);                    // adding element from end
num2.push(200);
num2.unshift(300);
num2.unshift(400);                 // adding element from front 
console.log(num2.length) ;         //  size is 4
console.log(num2);                 // string format 
console.log(num2.join("-")); 