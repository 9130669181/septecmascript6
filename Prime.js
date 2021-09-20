const isprime =(n)=>{
if(n<2)
return " number is not prime"
for( let i=2 ;i<n;i++){
    if(n%i===0){
        return " number is not prime"
    }
}
return " the number is prime"

}
console.log(isprime(9))