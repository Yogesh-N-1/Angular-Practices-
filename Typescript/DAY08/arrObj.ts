//array of object (json object inside array)
 
let arrObj=[{
    id:4,
    fname:"yogesh",
    lname:"patil",
    country:{cid:3,cname:"india"}
},
{
    id:24,
    fname:"Sam",
    lname:"patil",
    country:{cid:3,cname:"india"}


},
{
    id:3,
    fname:"Ram",
    lname:"s",
    country:{cid:2,cname:"india"}//this is object in object of arry


}
]

for(let i =0;i<arrObj.length;i++){
console.log(`
ID        :${arrObj[i].id}
Frist Name:${arrObj[i].fname}
last Name :${arrObj[i].lname}
Country   :${arrObj[i].country.cname}
`)


}
//we can add array inside object 
//we can add object inside object 
let arrObj1=[{
    id:4,
    fname:"yogesh",
    lname:"patil",
    country:{cid:3,cname:"india"},
    Month:['May','June',"Jul"],//this is array inside array of object
    Result:[{sub:'M2',mark:54},
    {sub:'M2',mark:43},
    {sub:'M3',mark:53}]//this is array of object inside array of object
},
{
    id:24,
    fname:"Sam",
    lname:"patil",
    country:{cid:3,cname:"india"},
    Month:['May','June',"Jul"],//this is array inside array of object
    Result:[{sub:'M1',mark:44},
    {sub:'M2',mark:43},
    {sub:'M3',mark:53}]

},
{
    id:3,
    fname:"Ram",
    lname:"s",
    country:{cid:2,cname:"india"},//this is object in object of arry
    Month:['May','June',"Jul"],//this is array inside array of object
    Result:[{sub:'M1',mark:54},
    {sub:'M2',mark:43},
    {sub:'M3',mark:53}

]

}
]

for(let i =0;i<arrObj1.length;i++){
console.log(`
ID        :${arrObj1[i].id}
Frist Name:${arrObj1[i].fname}
last Name :${arrObj1[i].lname}
Country   :${arrObj1[i].country.cname}
Month     :${arrObj1[i].Month.join(" ")}
`)
for(let j=0;j<arrObj1[i].Result.length;j++){
console.log(`
=============RESULT==============
Subject :${arrObj1[i].Result[j].sub}
Mark    :${arrObj1[i].Result[j].mark}`)
}
}