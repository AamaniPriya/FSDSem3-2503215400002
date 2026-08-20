  /*  function multiply(a,b){
        return a*b;
    }
    let result = multiply(5, 10);
    console.log(result);
    document.write("The multiplication of 5 and 10 is: " + result, "<br>");*/

    function multiply(a, b) {
        return a * b;
    }
    let a=parseInt(prompt("Enter the value of operand1 "));
    let b=parseInt(prompt("Enter the value of operand2 "));
    let result = multiply(a, b);
    console.log(result);
    document.write("The multiplication of " + a + " and " + b + " is: " + result, "<br>");
