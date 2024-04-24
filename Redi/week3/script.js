/*create 2 variables of type number/integer.
in a third variable try adding the numbers together
output the result.*/
let firstVar=20;
let secondVar=25;
let thirdVar;
thirdVar=firstVar+secondVar;
console.log(thirdVar);

/*create 2 variables of type string(text).
try creating a third variable that add them together.
output the result.*/
let string1='hello';
const string2='world';
let string3=string1+string2;
console.log(string3);

/*create 2 variables a number and a string. 
Add them together. what do you expect to happen? what happened?*/
let number=20;
let string='lucky';
let output=number+string;
console.log(output);

/*try re-declaring a const variable.
 what happened? Anything in the console?try the same with let.*/
/*let x=20;
const y=50;
 y=30;
console.log(y);*/


let a=60;
const b=30;
a='hello';
console.log(a);

/*what is the difference between consol.log(myName)
 and console.log("myName") would both run without errors*/
let myName=a+b;
console.log(myName);
console.log("myName");

/*write a function named calculateDogAge that:
1.TAkes 1 argument: your dog's age.
2. Calculate your dog's age based on the conversation rate of 1 human year to 7 dog years.
3. outputs the result.
4.use the result from the function and create an alert with the human age of your puppy.
 Display the result to the screen like so: "your doggie is XX years old in dog years!"*/
function calculateDogAge(a){
    return 7*a;

}
const output1=calculateDogAge(5);
console.log(output1);
alert("dog age is: "+output1);
/*alert(output1);*/

function moneyToSpendInCoffeeUntil80(currentage,price){
    
    return finalAmount= price*365*(80-currentage);
    
}
const finalamount=moneyToSpendInCoffeeUntil80(36,35);
alert("final amount is :"+finalamount);
console.log(finalamount);


/*week3 homework*/

function orderFood(restaurant,price,food){
    
   /* return food= price*365*(80-currentage);*/
    //console.log("You are ordering " + price + " "+ food + " from "+ restaurant );
    return `You are ordering  ${restaurant} ${price} from ${food}`;
    
}
const mom =orderFood("dominos",2,"chicken pizza");
const dad =orderFood("Boff burger",3,"chicken burger");
const kid =orderFood("Burgerking",1,"chicken nuggets");

console.log(mom);
console.log(dad);
console.log(kid);
