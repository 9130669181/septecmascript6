/*const numberOftiles=(L,B,tl,tb,ntb)=>{
const numoftile=(L*B)/(tl*tb);
    const numofboxes=numoftile/ntb;

    return numofboxes
}
console.log(Math.ceil (numberOftiles(50,20,2,6,10)))*/
/*how to calculate no of titles*/
const numberOftilesbox=(L,B,tl,tb,ntb,nuoffloor,numofbuilding)=>{
const numoftiles=(L*B)/(tl*tb);
const numbox=numoftiles/ntb;
const numofperbuilding=numbox*nuoffloor;
const numofboxinallbuilding=numofperbuilding*numofbuilding;
return numofboxinallbuilding;
}
console.log(Math.ceil(numberOftilesbox(20,60,5k,4,6,7,8)))