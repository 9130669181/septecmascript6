/*const imgData=(arr)=>arr.map((item)=>item["url"]);
console.log(imgData([
    {url:"google.com",title:"Google"},
    {url:"pickbiz.com",title:"pickupbiz"},
    {url:"gmail.com",title:"Gmail"},
    {url:"amazon.com",title:"amazon"}
])
)*/
/*dactic is use for dyanamic data= litral*/
const imgData=(arr)=>arr.map((item)=>` <img src=${item.url} alt="${item.title}"/>`);
console.log(imgData([
    {url:"google.com",title:"Google"},
    {url:"pickbiz.com",title:"pickupbiz"},
    {url:"gmail.com",title:"Gmail"},
    {url:"amazon.com",title:"amazon"}
])
)