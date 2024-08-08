//push()  (Use for add to END)
let arr = [1,2,3,4,5];
arr.push(6,7,8,9);
console.log("PUSH :",arr);


//pop()   (Use for delete from end and return)
let arr1 = [1,2,3,4,5];
console.log(arr1);
let deleted = arr1.pop();
console.log("POP :",arr1);
console.log("deleted",deleted);


//tostring()   (Use for convert array to string)
let color = ["Black", "Pink", "Purple", "Red", "Yellow"];
let numbers = [1,2,3,4,5,6,7];
console.log(color);
console.log("tostring :",color.toString());
console.log(numbers);
console.log("tostring :",numbers.toString());


//concat()   (Use to joins multiple arrays and return result)
let num1 = ["one", "two", "three", "four"];
let num2 = ["ten", "twenty", "thirty", "fourty"];
let num3 = ["hundred", "thousend", "lakh", "corer"];
let combine = num1.concat(num2,num3);
console.log("concat :",combine);


//unshift()  (Use for add to START)
let colors = ["Black", "Pink", "Purple", "Red", "Yellow"];
colors.unshift("Blue");
console.log("unshift :",colors);


//shift()   (Use to delete from start and return)
let colors1 = ["Pink", "Purple", "Red", "Yellow"];
let val = colors1.shift();
console.log("shift :",colors1);
console.log("Deleted Color",val);


//slice(strtIdx,endIdx)   (Use to return a piece of the array)
let colorr = ["Black", "Pink", "Purple", "Red", "Yellow"];
console.log("slice :",colorr.slice(1,3));


//splice(StrtIdx , delCount , newEle1,..)   (Use for ADD , REMOVE , REPLACE)
let numberss1 = [1,2,3,4,5,6,7,8,9];
numberss1.splice(3,2,100,20);
console.log("splice :",numberss1);

let numberss2 = [1,2,3,4,5,6,7,8,9];
numberss2.splice(3,0,50);   //add number at specific position without delete
console.log("splice :",numberss2);

let numberss3 = [1,2,3,4,5,6,7,8,9];
numberss3.splice(4,1);     // delete 1 number from position 4
console.log("splice :",numberss3);

let numberss4 = [1,2,3,4,5,6,7,8,9];
numberss4.splice(6,1,99);     // replace number
console.log("splice :",numberss4);

let numberss5 = [1,2,3,4,5,6,7,8,9];
numberss5.splice(4);     // all itams deleted from 4th index
console.log("splice :",numberss5);