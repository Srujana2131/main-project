const orderFoodArrow = (restaurant,price,food)=>`You are ordering  ${restaurant} ${price} from ${food}`;
const firstdiv=document.querySelector(`#first-class`);
const seconddiv = document.querySelector(`.myclass`);
const thirddiv= document.querySelectorAll(`div`);

console.log(firstdiv.textContent);
console.log(seconddiv.textContent);
console.log(thirddiv[2].textContent);

const logTextContent = (myclass)=>{
    const target = document.querySelector(myclass)
    console.log(target.textContent);
}