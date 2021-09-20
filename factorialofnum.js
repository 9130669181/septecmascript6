function fact(n){
    let result=1
    if((n==0)||(n==1)){
    return result;
}else{
for(let i=n;i>1;i--) {
    result=result*i;

} 
   return result;
}    

}
console.log(fact(4))