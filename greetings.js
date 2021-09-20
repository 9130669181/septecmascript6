2const greeting=(type)=>{
    if(type===1){
    console.log(" hellow good morning")
}else if(type===2){
    console.log("good afternoon")
}
else if(type===3){
    console.log("good evenning")
}else{
    console.log("hellow")
}
}
(greeting(3))
const greeting2=(type)=>{
    switch(type){
        case 1:
            console.log("good morning")
            
        case 2:
            console.log("good afternoon")
        case 3:
            console.log("good evening")
        case 4:
            console.log("good night")
            break;
            default:
                console.log("hellow")


    }
}

console.log(greeting2(5))