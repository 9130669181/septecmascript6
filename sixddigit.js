/*const sixdigit =num =>(num.length===6) ?"the number lenth is 6 sigit":"length is not not equal to 6 digit";
console.log(sixdigit("5556578"));*/
const sixdigit=num=>{
    if((num>99999) &&(num<9999999)){
        return "number is sixdigit";
    }else{
        return " the number is not six digit"
    }
}
console.log(sixdigit(12345678))