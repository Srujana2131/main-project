let colors =['red','pink','green','yellow','black'];
console.log(colors);
let mixed = [true,false,'red','yellow',10];
console.log(mixed);
let length1 = colors.length;
console.log(length1);

let nestedArray = [1,2,3,['smooky','kitty']];
console.log(nestedArray);
let secArray = ['smooky','kitty','salsa'];
console.log(secArray);
let clonedArray = [...nestedArray[3]];
console.log(clonedArray);
let mergedArray = [...clonedArray,...secArray];
console.log(mergedArray);

let family = ['f1','f2','f3','family4'];
console.log(family);
const familyMembers = family.map((element, index)=>{
    return element+'!';
})
console.log(familyMembers);
let lengthofFamily = family.filter(checkAdult)
function checkAdult(len) {
    return len.length > 6;
  }
  console.log(lengthofFamily);
  let totalLetters = family.reduce((element,index)=>{
    element=element+family.length;
    return element;
  },0)
  console.log(totalLetters);
