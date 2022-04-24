let a=[2,3,5]//array

a.splice(2,0,23)//it will add 23 at index 1 ,0 is denote to delete element
console.log(a)

//to delete element from the array
a.splice(3,1)//it will delete element at index 3
console.log(a)
//to replce data 
a.splice(1,1,12)//at index 1 data will replce with 12
console.log("replced data",a) 
//replace and add new in 
a.splice(2,1,13,34,54)//index 2 data will replace with 13,and new 34 ,54 data will add
console.log(a)
