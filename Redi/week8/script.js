let shops= ['nemlig','amazon','harald']
for(i=0;i<shops.length;i++){
    console.log(shops[i]);
}

/*const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
  console.log(cars[i]);
}

//let k="";
for(i=50;i<10000;i--){
//k+=10;
console.log(i);
}*/
let mylist = document.querySelector("#my-list");
for(let shop of shops){
let shopNode = document.createElement('li');
shopNode.innerHTML=`<a href='https://www.${shop}.com'>$shop</a>`;
mylist.appendChild(shopNode);
}