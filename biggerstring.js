/*const biggersti=(str1,str2)=>(str1.length>str2.length)?str1:str2
console.log(biggersti("india","hindustan"))*/
const biggersti=(str1,str2)=>
(str1.length>str2.length)
? str1+":"+str1.length
: str2+":"+str2.length
console.log(biggersti("india","hindustan"))