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
    document.getElementById("output").innerHTML=0;
}*/
let decreaseBtn = document.getElementById("decrement_button");
let increaseBtn= document.getElementById("increment_button");
let counter = document.getElementById("output");
let count =0;
decreaseBtn.addEventListener('click', ()=>{
    count --;
    counter.innerHTML=count;
    counterStyle();
})
increaseBtn.addEventListener('click', ()=>{
    count++;
    counter.innerHTML=count;
    counterStyle();
})
counter.addEventListener('click',()=>{
    count==0;
    counter.innerHTML=count;
    clearOutput();
})

function clearOutput(){
    document.getElementById("output").innerHTML=0;
}
function counterStyle(){
    if(count<0){
        counter.classList.add("negative");
    }
    else if(count>0){
        counter.classList.add("positive");
    }else if(count==0){
        counter.classList.add("0");

    }
    else{
        counter.classList.remove("negative");
        counter.classList.remove("positive");
    }
}