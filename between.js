const x=Num=>{
  if((Num>-2) && (Num<13)){
    return "number is betwen -2 and 13";
  }else{
     return "number is not between -2 and 13";
  }
 
}
console.log(x(12))
const beTween=Num1=>((Num1>=-2) &&(Num1<13))?"the given number is between range":" the given number is not between range";
console.log(beTween(14))
