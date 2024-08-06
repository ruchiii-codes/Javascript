let marks = [85,97,44,37,76,60]
let sum = 0;
for(let val of marks)
{
    sum += val;   //Sum = sum + val
}

let average = sum / marks.length;
console.log(`Average of the class is ${average}`);
