/*let counter=0;
function incrementButton(){
    counter++;
    document.getElementById("output").innerHTML=counter;
}

function decrementButton(){
    counter--;
    document.getElementById("output").innerHTML=counter;
}

function clearOutput(){
    counter=0;
    document.getElementById("output").innerHTML=counter;
}*/
let decreaseBtn = document.getElementById("decrement_button");
let increaseBtn= document.getElementById("increment_button");
let counter = document.getElementById("output");
let clear= document.getElementById("reset");
let count =0;
decreaseBtn.addEventListener('click', ()=>{
    count--;
    counter.innerHTML=count;
    //counterStyle();
})
increaseBtn.addEventListener('click', ()=>{
    count++;
    counter.innerHTML=count;
   // counterStyle();
})

clear.addEventListener('click', ()=>{
    count=0;
    counter.innerHTML=count;
    
})
