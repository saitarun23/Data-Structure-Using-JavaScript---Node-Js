let num =[10,20,30,40,50,60];
console.log(num);
num.shift()     // remove element from begining 
num.pop();          // remove element from last 
console.log(num);
//num.splice(1,1);           // 1st parameter index position 2nd parameter number of element to delete. 
//num.splice(1,2);             // 1st parameter index position 2nd parameter number of element to delete. 
num.splice(2,0,1111);           // 1st parameter index position 2nd parameter number of element to delete, 3rd, 4th add element
console.log(num);