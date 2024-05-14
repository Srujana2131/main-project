let decreaseBtn = document.getElementById("decrement_button");
let increaseBtn= document.getElementById("increment_button");
let counter = document.getElementById("output");
let clear= document.getElementById("reset");
let msg = "You have free shipping";
let message = document.getElementById("msg").value;
let count =0;
decreaseBtn.disabled = true;
decreaseBtn.addEventListener('click', ()=>{
    
    if (count <= 0) {
        decreaseBtn.disabled = true;
        //alert("hi"+count);
        counter.innerHTML=count;
        
        
    }else if(count>0){
        decreaseBtn.disabled = false;
        count--;
        counter.innerHTML=count;
        if(count == 9){
            document.getElementById("increment_button").style.backgroundColor='rgb(0 0 0 / 7%)';
            document.getElementById('msg').style.display='none';
        }else if(count == 19){
            document.getElementById("increment_button").style.backgroundColor='rgb(0 0 0 / 7%)';
            document.getElementById("msg").innerHTML="You have free shipping";
        }
        
} 
})
increaseBtn.addEventListener('click', ()=>{
    count++;
    counter.innerHTML=count;
    decreaseBtn.disabled = false;
    if(count==10){
        document.getElementById('msg').style.display='block';
        document.getElementById("msg").innerHTML="You have free shipping";
        counter.innerHTML=count;
    }
    else if(count==20){
        document.getElementById("increment_button").style.backgroundColor="red";
        document.getElementById("msg").innerHTML="Out of stock";
        counter.innerHTML=count;
    }
})

clear.addEventListener('click', ()=>{
    count=0;
    decreaseBtn.disabled = true;
    document.getElementById("increment_button").style.backgroundColor='rgb(0 0 0 / 7%)';
    document.getElementById('msg').style.display='none';
    counter.innerHTML=count;
    
})
