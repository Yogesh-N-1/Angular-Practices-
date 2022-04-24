//array of object (json object inside array)
var arrObj = [{
        id: 4,
        fname: "yogesh",
        lname: "patil",
        country: { cid: 3, cname: "india" }
    },
    {
        id: 24,
        fname: "Sam",
        lname: "patil",
        country: { cid: 3, cname: "india" }
    },
    {
        id: 3,
        fname: "Ram",
        lname: "s",
        country: { cid: 2, cname: "india" } //this is object in object of arry
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\nID        :".concat(arrObj[i].id, "\nFrist Name:").concat(arrObj[i].fname, "\nlast Name :").concat(arrObj[i].lname, "\nCountry   :").concat(arrObj[i].country.cname, "\n"));
}
//we can add array inside object 
//we can add object inside object 
var arrObj1 = [{
        id: 4,
        fname: "yogesh",
        lname: "patil",
        country: { cid: 3, cname: "india" },
        Month: ['May', 'June', "Jul"],
        Result: [{ sub: 'M2', mark: 54 },
            { sub: 'M2', mark: 43 },
            { sub: 'M3', mark: 53 }] //this is array of object inside array of object
    },
    {
        id: 24,
        fname: "Sam",
        lname: "patil",
        country: { cid: 3, cname: "india" },
        Month: ['May', 'June', "Jul"],
        Result: [{ sub: 'M1', mark: 44 },
            { sub: 'M2', mark: 43 },
            { sub: 'M3', mark: 53 }]
    },
    {
        id: 3,
        fname: "Ram",
        lname: "s",
        country: { cid: 2, cname: "india" },
        Month: ['May', 'June', "Jul"],
        Result: [{ sub: 'M1', mark: 54 },
            { sub: 'M2', mark: 43 },
            { sub: 'M3', mark: 53 }
        ]
    }
];
for (var i = 0; i < arrObj1.length; i++) {
    console.log("\nID        :".concat(arrObj1[i].id, "\nFrist Name:").concat(arrObj1[i].fname, "\nlast Name :").concat(arrObj1[i].lname, "\nCountry   :").concat(arrObj1[i].country.cname, "\nMonth     :").concat(arrObj1[i].Month.join(" "), "\n"));
    for (var j = 0; j < arrObj1[i].Result.length; j++) {
        console.log("\n=============RESULT==============\nSubject :".concat(arrObj1[i].Result[j].sub, "\nMark    :").concat(arrObj1[i].Result[j].mark));
    }
}
