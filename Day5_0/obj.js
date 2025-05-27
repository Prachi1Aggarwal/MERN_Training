//const ob1={Name: "Ram" , city:"delhi", age:40,Fulladdress:function(){console.log("finction in object")}}
const ob1={Name: "Ram" , city:"delhi", age:40,Fulladdress:function(){console.log("return(2*2)")}}
const ob2=new Object();
const ob3={};
console.log(ob1);
console.log(ob2);
console.log(ob3);
ob2.Addrerss="Abesec.g2b";
ob2.contact="123456789";
delete ob1.age; 
console.log(ob1.Fullaqddres)

//METHOD 1

// const obj1 = {Name: "ABES EC"};
// const obj2 = {City: "Ghaziabad"};
// const obj3 = {...obj1,...obj2};
// console.log(obj3);

// //METHOD 2

// const obj1 = {Name: "ABES EC"};
// const obj2 = {City: "Ghaziabad"};
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);