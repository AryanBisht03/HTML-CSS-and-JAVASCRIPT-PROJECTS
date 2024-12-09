'use strict'
function performOperation()
{
    const num1=document.getElementById("number1").value;
    const num2=document.getElementById("number2").value;

    let error=document.getElementById("err");

    if(num1.length==0 || num2.length==0)
    {
        error.innerHTML="Please enter the numbers";
        return;
    }
    if(isNaN(num1) || isNaN(num2))
    {
        error.innerHTML="Enter the numbers not the string";
        return;
    }
    error.innerHTML="";

    const operations=document.getElementById("operation");
    const index=operations.selectedIndex;
    const op=operations[index].value;
    
    let result=document.getElementById("result");
    switch(op)
    {
        case '+':
            result.value=+num1+ +num2;
            break;
        case '-':
            result.value=+num1- +num2;
            break;
        case '*':
            result.value=+num1* +num2;
             break;
        case '/':
            result.value=+num1/ +num2
            break;
        case '%':
            result.value=+num1% +num2;
            break; 
        default:
            break;                                        
    }
}
