let a=parseInt(prompt("Enter the value of operand1 "));

let b=parseInt(prompt("Enter the value of operand2 "));

let c=prompt("Enter the operator(+,-,/,*) ");
if(c=="+"){
    alert("The result is: " + (a+b));
}
if(c=="-"){
    alert("The result is: " + (a-b));
}
if(c=="*"){
    alert("The result is: " + (ab));
}
if(c=="/"){
    if(b==0){
        alert("Division not possible")
    }
    else{
    alert("The result is: " + (a/b));}
}