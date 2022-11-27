const add = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}

const operate = (op,a,b) => {
    if(op=="+"){
        return add(a,b);
    }
    if(op=="-"){
        return subtract(a,b);
    }
    if(op=="*"){
        return multiply(a,b);
    }
    if(op=="/"){
        return divide(a,b);
    }
}

let display = document.querySelector("input");
let string = "";
let num1,num2,op;
Array.from(document.getElementsByClassName("buttons")).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        string = string + e.target.innerText;
        display.value = string;
    })
})



