//array
let a1=[1,3,4,5]
let a2:number[]=[2,3,5,6]
let a3=['yog',5,4.2,true,1]//we can store any type of data in array of typescript


a.forEach((value,i)=>{//we can print array by usein foreach
    console.log(`value is ${value} index is ${i}`)
})

console.log(`array is`+a.join(' '))//we need to use join method to print array in second case