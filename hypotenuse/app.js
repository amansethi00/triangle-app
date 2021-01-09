const output = document.querySelector("#output");
const sideA = document.querySelector("#side-a");
const sideB = document.querySelector("#side-b");
const submitBtn = document.querySelector("#submit-btn");

function clickHandler(){
    if(sideA.value === ""|| sideB.value ===""){
        alert("Please input side a and side b values");
    }
    else{

        let a=parseInt(sideA.value);
        let b=parseInt(sideB.value);
        let c=(a*a+b*b);
        c=Math.sqrt(c);
        output.innerHTML = c;
    }
}
submitBtn.addEventListener("click",clickHandler);