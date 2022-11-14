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
