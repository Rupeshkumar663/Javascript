/*
function f1(){
       console.log("Rupesh");
       const c=15;
       {
         var a=4;//function scope
         let b=10;//block scope
         console.log(b);
         //c=20;
       }
       a=12;
    console.log(a);
    //console.log(b);
    console.log(c);
}
f1();

const accountId=144553;
let accountEmail="rupeshsamrat4@gmail.com";
var accountpassword="12345";
accountCity="Sherpur";
console.table([accountId,accountEmail,accountpassword,accountCity]);
console.table({accountId,accountEmail,accountpassword,accountCity});

const accounts=[
  {id:1,email:`a@gmail.com`,city:"Delhi"},
  {id:2,email:"b@gmail.com",city:"Mumbai"},
  {id:3,email:"nil@gmail.com",city:"dhanbad"}
];

console.table(accounts);
console.log(typeof(accounts))

x=5.5;
console.log(typeof(x));
//y=NULL;
//console.log(typeof(y));//type of NULL is objects
z=true;
console.log(typeof(z));

//DATA TYPE START--------------
x=BigInt(123456789987654322);
x=x+BigInt(5);
console.log(x);
y={a:1,b:2};
console.log(y.a+" "+y.b+" "+typeof(y));
console.log(y['a']+" "+y['b']+" "+typeof(y));//y[0],y[1]
var a=null;
console.log(typeof(a));

var x1=Symbol("Hello");
var x2=Symbol("Hello");
console.log(x1==x2);
console.log(x1==x1);
//document.write("neel");//console not working
x=125n;
console.log(typeof(x));

let p=5;
p="Rupesh";
console.log(p+" "+typeof(p));


let q={name:"NEEL",
       Age:35
};//key->value=mapping
console.log(q.name+", "+q.Age);
console.log(q['name']+","+q['Age']); 

let q={0:"NEEL",
       1:35
};//key->value=mapping
console.log(q.name+", "+q.Age);
console.log(q[0]+","+q[1]);
let r=[10,20,30];
console.log(r);

//HOISTING-------------
f1();
function f1(){
   //var x;
   console.log(x);
   //x=5;
   var x=5;
    console.log(x);
}



f1();
function f1(){
   //var x;
   console.log(x);
   //x=5;
   var x=5;
    console.log(x);
}





//DATE --------------------
const d1=new Date();
console.log(d1);

const d2=new Date("2025-11-08");
console.log(d2);

const d3=new Date(2025,3,30);//year or month
console.log(d3);

const d5=new Date(2025,3,30,15,45,50);
console.log(d5);

const d4=new Date(1024110121);//milliseconds
console.log(d4);

const d6=new Date();
console.log(d6.)

//FOR IN LOOP-------------
const p1={
       name:'Rupesh',
       Age:21,
       City:'Bihar sharif',
       f1:function(){
              console.log("Engineer")
          }
};
for(let x in p1){
    console.log(x);   
}

//FOR OF LOOP---------------
 const p1={
       name:"Rupesh",
       //Age:21,
       City:"Bihar sharif",
       
};

const a=[11,22,33,44];
for(let x in a){
    console.log(x,a[x]);   
}

for(let x of a){
    console.log(x);   
}

//COMPARISON OPERATOR----------
let x={name:"Rupesh",age:21}
let y=x;

//console.log(x==y);
//console.log(x===y);

let z={name:"Rupesh",age:21}
console.log(y==z);
console.log(y===z);

console.log(0==false)//0-false,1-true
console.log(0===false)
console.log(0=='')
console.log(0==='')
console.log(0==null)

let x=NaN;
console.log(Number.isNaN(x));
console.log(null==NaN)

console.log(0==NaN)

let x=NaN;
console.log(x==NaN)//NaN==NaN
console.log(x===NaN)

console.log(0/0);
let x=NaN;
x=x*2;
x=x*x
console.log(Number.isNaN(x));



let a=5;
debugger;
debugger;
let b=10;
debugger;
debugger;
console.log(a);
debugger;
debugger;
debugger;
console.log(b);

var x=10;
console.log(x);
//USE STRICT MODE----------------

function f2(a,a){
       return a-a;
}
console.log(f2(3,4));

"use strict"
function f2(b,a){
       return b-a;
}
console.log(f2(3,4));


"use strict"
 let i=0;
console.log(i);
/*
function f1(){
      a=0;
       console.log(a);
}
f1();



 i=0;
console.log(i)
function f1(){
       "use strict"
        let a=4;
     console.log(a);
}
f1();


function f2(x,x){
       console.log(x,x);
}
f2(3,4);

//AMAZING OPERATORS---------------
let a='abc';
let b='def';
a+=b;//a=a+b
//a=abcdef
console.log(a+b);

let a=[10,20,30];
console.log(a instanceof Array);
console.log(a instanceof Object);

let p1={
       name:'Neel',
       Age:500
};
console.log('name' in p1);
delete p1.name;
console.log(p1);
delete p1.City;
console.log(p1);

let a=[10,20,30];
console.log(a);
delete a[0];
delete a[0,1,2];
console.log(a);


//ITERABLE-----------------
let a=[30,40,60];
//let b=a;
let b=[10,20,...a,70,80,90,...a]  //[...]->spread operator
console.log(a);
console.log(b);

function f3(x,y,z){
       return(x+y+z);
}
let a=[10,20,30];
console.log(f3(a[0],a[1],a[2]));
console.log(f3(...a));


//let a=null;
let a=null;
let b='neel';
let c;
if(a===null || a===undefined){
       c=b;
}
else{
       c=a;
}
console.log(c);

//let a=40;
let a=null;
//let a=undefined;
let b='neel';
let c=a??b; //?? ->nullish operator
console.log(c);
/*
let p=q??r;//q me null ya undefined hota hai to p ke under r chla jayega baki condition me p ke under q jayega.
/*


let a=true;//a=0,null,undefined,NAN,false is condition me c ke under b jayega 
let b='neel';
let c=a||b;
console.log(c);


//?.->optional chainning---------------
let p1={
       name:'Neelpandey',
       Age:100000000,
      // Address:{
         //fistline:'flat no 31',
        //secondline:'XXX market',
         //city: 'Kolkata',
         //pin:700152
       //}
}
//console.log(p1.Address?.pin);
console.log(p1.greet?.())
console.log(p1.SayHi?.())



//CONVERT INTO NUMBER-------------------
x=Number("52.83");
console.log(x);

y=Number("");
console.log(y);

z=Number("  ");
console.log(z);

p=Number("A");
console.log(p);
*/

//BITWISE OPERATOR-----------------
//12=00000000 000000000 00000000 00001100
//10=00000000 000000000 00000000 00001010
 //  00000000 000000000 00000000 00001000=8

//let a=12&10;
//let a=12^10;
 //5=00000000 000000000 00000000 00000101
//~5=11111111 111111111 11111111 11111010=b2
//-6=b2;
//6=b1
/* =00000000000 0000000000 0000000000 00000101
                                          //+1

 6=00000000000 0000000000 0000000000 00000110 
 *                    
let a=~5;
console.log(a);

//10=00000000 000000000 00000000 00001010
  //=00000000 000000000 00000000 00000001

let b=10>>3;
console.log(b);

let a=25;// atype=number
//console.log(a.toString(2));//binary no
console.time('modulus')

for(let i=0;i<1000;i++){
let b=a%2;
}

console.timeEnd('modulus')





//25=00000000 000000000 00000000 00011001
console.time('bitwise')
for(let i=0;i<1000;i++){
let c=a&1//odd
}
console.timeEnd('bitwise')

let a=-3.5;
//let b=Math.floor(a);
let b=Math.trunc(a);
console.log(b);

//FUNCTION---------------------

function solution(){
   console.log("hy");
}
solution();


f1();
console.log("Hello1");
console.log("Hello2");
console.log("Hello3");

function f1(){
       console.log("Hello");
}
console.log("Hello4");
f1();
console.log("Hello5");
f1();


//TNRN
  function f1(){
       console.log("India is my Country");
  }
 f1();
 
//TNRS
function f2(){
       let a=10;
       let b=20;
       return a+b;

  }
  
 //let x=f2();//x=30
 //console.log(x);
 console.log(f2());

//TSRN
function f3(a,b){
       console.log("sum of a and b is ",a+b);
  }
 f3(30,40);
 
//TSRS 

function f4(a,b){
       return a+b;
  }
console.log(f4(12,45));
//CALLBACK FUNCTION--------------




console.log("Hello1");
console.log("Hello2");
console.log("Hello3");
f1();
function f1(){
       console.log("Hello");
}
console.log("Hello4");
f1();
console.log("Hello5");
f1();



function f2(){
       console.log("Hello HII");
}

//f3(f2())//f2=callback function

f3(function f2(){
       console.log("Hello HII");
})//f2=callback function


function f3(fun){//fun=f2
       console.log("Hi I am f3");
       fun();
}


console.log("1");
setTimeout(function(){console.log("A")},3000);//1000ms=1sec
console.log("2");
setTimeout(function(){console.log("B")},1000);
console.log("3");
f1();
console.log("4");
setTimeout(function(){console.log("c")},2000);
console.log("5");
f1();
console.log("6");
function f1(){
       console.log("Hello");
}

function f1(){
       console.log("hello");
}
f2(f1());//CALLBACK FUNCTION


f2(function f1(){
       console.log("hello");
});

function f2(fun){//fun=f1
  console.log("I am f2");
  fun();//f1();
}

//const MynewArray=[200,400,100,600];
function f1(getArray){
  return getArray[1];
}
//console.log(f1(MynewArray));
console.log(f1([200,400,500,1000]));

console.log("1");
setTimeout(function(){console.log("A")},3000);
console.log("2");
setTimeout(function(){console.log("B")},1000);
console.log("3");
f1();
console.log("4");
setTimeout(function(){console.log("c")},2000);
console.log("5");
f1();
console.log("6");
function f1(){
       console.log("Hello");
}

//DOM CONCEPT------------------------
let e=document.querySelector("h1");
console.log(e);
console.log(e.tagName);
console.log(e.textContent);
e.textContent="Hello, I am Students";
console.log(e.textContent);


let a=document.getElementById("heading1")
//console.log(a);

let b=document.getElementsByTagName("h1");//ye element ke collection ko return krne bala hai.isiliye iske name me 's' lga hua hai elements.or b represent krega collection of element ko.isse homo geneous element select hota hai.or class atributes se heterogeneous element select hota hai.
//console.log(b);
//console.log(b[0]);//this represent first h1 element 
//console.log(b[1]);//this represent second h1 element 
//console.log(b[2]);//undefined dega ye;


let c=document.getElementsByClassName("c1")
//console.log(c);
//console.log(c[0])
//console.log(c[1])
//console.log(c[2])
//b or chmtl element ka collection hai but a single element hai.

//a.innerText="welcome"
//b[1].innerHTML="Index"
//c[1].textContent="this is a dynamically generated paragraph";



//console.log(a.innerText);
//console.log(a.innerHTML);
//console.log(a.textContent);


//CCS CONTROL------------------------
//a.style.color="blue";//style name ka object hota style. lgakr css ka koi bhi property likh sakta   hun mai.har object ke pass jo html element ko represent krta hai oo sbke pass style property hoti hai.
//document ke pass sidha body ko represent krne ka element hota hai bahi sidha likh denge.
//document.body.style.backgroundColor="#333";
//document.body.style.color="orangered";


//SAME AS CSS,WE USE QUERYSELECTOR----------------
let d=document.querySelector("#heading1")
d.style.color="red";

//let e=document.querySelector(".c1");//ye always single element return krega.c1 jo first me hoga bahi return krega.
//e.style.color="lightgreen"

let e=document.querySelectorAll(".c1");//ye collection of object return krega.c1 jo 
e[0].style.color="lightgreen"



//CREATE ELEMENT-----------------------
let a=document.createElement("h2");
a.innerText="Engineer"//<h2>Engineer<h2/>
document.body.appendChild(a) //body me h2 as a child append hoga last me

//REMOVE ELEMENT---------------------------
let b=document.getElementsByTagName("h1")[1];//ye second b me de  dega.
b.remove();


//EVENT HANDLING--------------------
//HTML OR CSS WEBPAGE-STATIC,EVENT HANDLIG-DYNAMIC PAGE

function f1(){
       document.body.style.backgroundColor="#333"
}

function f2(){
       document.body.style.backgroundColor="#ebacacff"
}


//BY JS------------------
let b=document.getElementsByTagName("button")
b[0].addEventListener('click',f1)
function f1(){
       document.body.style.backgroundColor="#333"
}


b[1].addEventListener('click',f2)
function f2(){
       document.body.style.backgroundColor="#a36969ff"
}


//FUNCTION DECLARATION(NAMED FUNCTION)----------------------------------

f1();//hoisting
function f1(){
       console.log("I am f1");
}
f1();


//FUNCTION EXPRESSION---------------

 const f2=function(){
       console.log("I am f2");
  }
  
f2();

//ARROW FUNCTION----------------------
//f2(arrow function);

 ()=>{
       console.log("I am f3");
 }

 ()=>console.log("I am f3");
 


function f3(username){
       console.log("I am f3",username)
}
f3("welcome");

const f3=(username)=>console.log("I am f3,",username);
f3("Hello");

const f3=username=>console.log("I am f3,",username);
f3("Hello");

const f4=(username)=>{ return "Hello,"+username;}
//str=f4("Myself");
//console.log(str);
console.log(f4("myself"));

//sayHi((username)=>{console.log("Hello,"+username);});


const f5=(username)=>{
       console.log("Hello,"+username);
}

//f5('neel');
sayHi(f5)
function sayHi(fun){//fun()=f5()
       fun('Neel');//f5('neel')
}


//DEFAULT PARAMETER--------------
function f6(username){
       console.log("Hello,"+username)
}
f6('nitish');


function f6(username='missing'){
       console.log("Hello,"+username)
}
//f6('nitish');
f6();


//ANONYMOUS FUNCTION-----------------------
function f7(){
       console.log("I am f7");
}
f7();

const p=function(){
       console.log("I am f7");
}
p();
const p=function(){
       console.log("I am f7");
}
p();


function f8(fun){
       fun();

}
f8(function(){
       console.log("I am Anonymous");
});


//fun=function(){
//   console.log("I am Anonymous");
//}


//IIFE:-immediately Invoked function expression-----------

(function(){
       console.log("I am f9");
})();

//argumnets object-----------------

function f1(){
       console.log(arguments[1]);
}
f1(4,6,10);

//GENERATOR FUNCTION-------------
function *counter(){
       yield 1;
       yield 2;
       yield 3;

}


//CONSTRUCTOR FUNCTION--------------------
function person(name,age){
       this.name=name;
       this.age=name;
       console.log(this)
}
//person('Keshav',100);
 let p1= new person('Keshav',100)




/*
const p=counter();//p-generator object
console.log(p.next());//return object by next function
console.log(p.next());
console.log(p.next());
console.log(p.next());


//ARRAY------------------
const a=[10,20,30,40];
console.log(a[4]);
//a[4]=50;
a[5]=60;
console.log(a);
const b=[11,12,,34,56,,,,];
console.log(b);
console.log(a.length)
console.log(b.length)

const c=[4,8.5,true,'welcome']
console.log(c)

const d=[];
console.log(d.length)

const e=new Array();
e[0]=23;
console.log(e,e.length);


const a=[12,13,14,25]
//console.log(a)
a.push(50);
a.unshift(10);
a.pop();
a.shift();
console.log(a)

const a=[12,13,14,25]
//a.splice(1,2,60);
a.splice(0,0,60);
console.log(a);
a.splice(0,1,30,40,60,70)
console.log(a);
//FOREACH()------------------
const a=[25,40,68,79];
a.forEach((e)=>{
       console.log(e);
})

const a=[25,40,68,79];

a.forEach((element,index,a)=>{
       console.log(element,index,a);
})

//MAP-----------------
const b=a.map((e)=>e+1);
console.log(a);
console.log(b);
//FILTER----------------------

const a=[25,40,68,79];
const b=a.filter((e)=>e>30);
console.log(a);
console.log(b);

//REDUCE----------------------------
const a=[25,40,68,79];
let ans=a.reduce((x,e)=>e+x,0)
console.log(ans);//x=25,x=25+40,x=25+40+68,x=25+40+68+79

const a=[25,40,68,79];
console.log(a.indexOf(40))

const a=[25,40,68,79,40];
console.log(a.indexOf(40))
console.log(a.lastIndexOf(40))
console.log(a.includes(1))
console.log(a.join('/'))//as string

//SLICE FUNCTION-------------------------
const a=[10,20,30,40,50,60,70,80,90];
let b=a.slice(2,6);//array
console.log(b);

let a=[2,3,4];
let b=[5,6];
let c=[7,8,9,10];
//let d=[0,...a,...b,1,2,...c,11,12,...a]   //...=spread operator  //2,3,4,5,6,7,8,9,10
//console.log(d);
let d=a.concat(b,c)//
console.log(d);


//STRING-----------------------
let s1="welcome"
let s2='welcome'
let s3=`welcome`
let s4=new String("welcome");

//console.log(s1===s3)
//console.log(s1==s4)
//console.log(s1===s4)
//console.log(s1,s2,s3,s4);
//console.log(s1[5])
//s1=s1+"Education";
//console.log(s1)
//console.log(s1.charAt(1))
//s1=s1+"Education Services";
//let s5=`"teacher's Day"`
//console.log(s5)
let a=10;
let b=20;
let c=a+b;
//let result="sum of "+ a +" and "+ b+" is "+ c;
let result=`sum of ${a} and ${b} is ${c}`
console.log(result)

let s1="welcome education Services"
//console.log(s1.length)
//console.log(s1.indexOf('e'))
//console.log(s1.lastIndexOf('e'))
//console.log(s1.lastIndexOf('A'))
//console.log(s1.indexOf('e',7))
//console.log(s1.includes('Ser'))
//console.log(s1.startsWith('wel'))
//console.log(s1.endsWith('ces'))
//console.log(s1.slice(0,5));
//console.log(s1.slice(5,0));
//console.log(s1.slice(-5,-1));
//console.log(s1.substring(10,4));//4,10
//let x=s1.replace('wel','WEL');
//console.log(x)
//let s2=s1.replaceAll('e','E')
//console.log(s2)
//console.log(s1.toUpperCase());
//console.log(s1.toLowerCase());

//let s3='      Welcome Education Services  '
//console.log(s3)
//let s4=s3.trim();
//console.log(s4)
//let a=s1.split(" ")
//let a=s1.split('e')
//console.log(a)
let s2='private'
let s3='limited'
let s4=s1.concat(' ',s2,' ',s3)
console.log(s4)

//THIS KEYWORDS------------------------
console.log(this);

let a=10;
console.log(this.a);

var a=10;
console.log(this.a);

function f1(){
     "use strict"
       //b=6;
       console.log(this)
}
f1();


const obj={
       name:'Keshav',
       age:43,
       sayHi:function(){
              console.log("I am "+this.name);
       }
}

const anotherobj={
       name:'Samrat'
        // sayHi:function(){
          //    console.log("I am "+this.name);
       //}
}
anotherobj.sayHi=obj.sayHi;
anotherobj.sayHi();
obj.sayHi();

function Book(id,title,price){
       this.id=id;
       this.title=title;
       this.price=price;
       console.log(this);
}
Book();
 //const b1=new Book(1,'java',500);

 
let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
       console.log(this);
})

const arrow=()=>{
       console.log(this);
}
arrow();

function f1(){
       var a=10;
       const arrow=()=>{
        console.log(a)
      }
      arrow();
     
}
f1();


const obj={
       a:10,
       f1:function(){
              console.log(this.a);//this=obj
              setTimeout(function(){
                console.log(this)//this=window
              },2000)
       },
       f2:function(){
              console.log(this.a);//this=obj
              setTimeout(()=>{
                     console.log(this)//this=obj
              },2000)
       }
}
//obj.f1();
obj.f2();


function f1(){

}
 const f=new f1()//new ke help obj bnaya



const f1=()=>{

 }
 const obj=new f1();


function f1(){
       console.log(arguments[2])
}
f1(1,2,3);

const f1=()=>{
       console.log(arguments)
}
f1(1,2);


//CALLBACK HELL---------------------------------------
function f1(fun){
       console.log(" I am f1");
       fun();
}
f1(()=>{
       console.log("Hello");
})
       
setTimeout(()=>{},3000);
      console.log("line 1")
       console.log("line 2")synchornous depend on other synchronous
       console.log("line 3")
       console.log("line 4")
          


f1(function(value1){
   f2(value1,function(value2){
       f3(value2,function(value3){
              f4((value3,function(value4){
                     console.log("All complete");
              }))
       })
   })
})
      
//asynchronous depend on other asynchronous
//NAMED FUNCTION-----------------
function step1(value1){
       f2(value1,step2)
}
 function step2(value2){
      f3(value2,step3);
 }
 function step3(value3){
       f4(value3,()=>{
              console.log("All complete")
       })
 }
f1(step1);

//PROMISES CONCEPT----------------------
//code of producer----------
function someAPI(){
let p1=new Promise(function(resolve,reject){
      console.log("I am promises");
      if(false)
       resolve();
      else 
       reject();
});
return p1;
}
//code of consumer--------
let p1=someAPI();
p1.then(()=>{
       console.log("promised fullfilled")
},()=>{
    console.log("promised reject")    
})//resolve or reject

p1.catch(()=>{
       
    console.log("promised reject")    
})

function someAPI(){
let p1=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },3000)
      
});
return p1;
}
//code of consumer--------
let p1=someAPI();
p1.then((result)=>{
       console.log("promised fullfilled"+result)
       }
       ,(error)=>{
        console.log("promised reject"+error)    
    })

p1.catch((error)=>{
        console.log("promised reject"+error)    
})

function someAPI1(){
let p1=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises 1");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },5000)
      
});
return p1;
}

function someAPI2(){
let p2=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises 2");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },3000)
      
});
return p2;
}

//code of consumer--------
let p1=someAPI1();



p1.then((result)=>{
       console.log("promised fullfilled"+result)
       let p2=someAPI2();
       }
       ,(error)=>{
        console.log("promised reject"+error)    
    })


p2.then((result)=>{
       console.log("promised fullfilled"+result)
       }
       ,(error)=>{
        console.log("promised reject"+error)    
    })


function someAPI1(){
let p1=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises 1");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },5000)
      
});
return p1;
}

function someAPI2(){
let p2=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises 2");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },3000)
      
});
return p2;
}

//code of consumer--------
someAPI1().then((result)=>{
            console.log("promised fullfilled"+result)
            return someAPI2();
         },(error)=>{
            console.log("promised reject"+error)    
      })
     .then((result)=>{
            console.log("promised fullfilled"+result)
            return someApI3();
         },(error)=>{
            console.log("promised reject"+error)    
    })
    .then((result)=>{
            console.log("promised fullfilled"+result)
         },(error)=>{
            console.log("promised reject"+error)    
    });
//this is call promise chainning------------



//ASYNC AND AWAIT----------------------

//both keywords

 async function f1(){
  console.log("I am a normal function");
 }
 f1()
 
const p1=async function f1(){
  console.log("I am a normal function");
 }
 p1();

  
 
function someAPI1(){
let p1=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises1");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },5000)
      
});
return p1;
}

function someAPI2(){
let p2=new Promise(function(resolve,reject){
       setTimeout(()=>{

         console.log("I am promises 2");
         let x=Math.round(Math.random()*10+1);
         if(x%2==0)
         resolve(x);
         else 
         reject(x);
       },3000)
      
});
return p2;
}


async function f1(){
  console.log("I am a normal function");
    await someAPI1();
    await someAPI2();
 }
 const p1=f1();//p1=promise

 // LEXICAL SCOPE AND CLOSURE------------------
 */

 function outer(){
       let username='Welcome'
       //let x=23;
       function inner1(){
             
              console.log(username);
       }
       return inner1;
       
 }
 const f1=outer();//f1()=inner1();
 f1();
