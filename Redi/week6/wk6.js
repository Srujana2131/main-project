function add(a,b){
    const x = a+b;
    return x;
}
let m1=add(1,2);
console.log(add(1,2));

function inc(d){
    let y = ++d;
    return y;
}
let m2 = inc(5);
console.log(inc(5));

let z =0;
function thrdN(m1,m2){
 z = m1*m2;
    return z;
} 

 z = thrdN(m1,m2);
console.log(z);

function license(g){
let result=g>=60;
return result;
}
console.log(license(50));

function test(age){
    let result1= age>=18&&age<=80;
    return result1;
}
console.log(test(60));

function test1(age,height){
    let result2=age>=18&&height>=150;
    return result2;

}
console.log(test1(20, 180));

const isAdult = true;
console.log(!isAdult);


function orderCost(cost){
if(cost<10){
console.log(50);
return 50;
}
else if(cost>=10&&cost<100)
{
    console.log(30);
    return 30;

}
}
orderCost(15);