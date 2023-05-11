let scottishFold=document.querySelector(".scottishFold");
let persianCat=document.querySelector(".persianCat");
let siameseCat=document.querySelector(".siameseCat");
let britishShorthair=document.querySelector(".britishShorthair");
let results = document.querySelector(".result");
let button = document.querySelector("button");
button.onclick=function(){};

let goingInput = document.querySelector(".goingout").value;
let aloneInput = document.querySelector(".alone").value;
    
console.log(goingInput);
    console.log(aloneInput);
    
    if((goingInput >= 3 && goingInput<=5) && (aloneInput ==="yes" ||       aloneInput==="yes")){
    results.style.display="block";
    results.innerHTML = "You go out" +goingInput+ " a week and you  "+aloneInput+ "you do enjoy time alone. Therefore, you are a Scottish Fold!";
    scottishFold.style.display="block";
    }
    else if((goingInput <= 2 && aloneInput<=1) && (aloneInput ==="no" ||       aloneInput==="no")){
    results.style.display="block";
    results.innerHTML = "You go out" +goingInput+ " times week and  "+aloneInput+ "you do not like  being alone . Therefore, you are a Persian Cat!";
    persianCat.style.display="block";
         }
    else if((goingInput => 2 && goingInput<=2) && (aloneInput ==="no" ||       aloneInput==="no")){
    results.style.display="block";
    results.innerHTML = "You got " +goingInput+ "at most "+aloneInput+ " you do not like being alone. Therefore, you are a Siamese Cat!";
    siameseCat.style.display="block";
         }
         else if((goingInput >= 3 && goingInput<=4) && (aloneInput ==="yes" ||       aloneInput==="yes")){
    results.style.display="block";
    results.innerHTML = "You go out " +goingInput+ "at most and" + aloneInput + "you enjoy time alone. Therefore, you are a British Shorthair Cat!";
    britishShorthair.style.display="block";
  }
    
