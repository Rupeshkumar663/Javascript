/*
let a=document.createElement("div");
   a.innerText="click me";
document.body.appendChild(a);
let b=document.getElementsByTagName("button")[0];
b.remove();

EVENT HANDLING------------------

let b=document.getElementsByTagName("button");
b[1].addEventListener('click',function1());
function f1()
{
   document.body.style.backgroundColor="#333";
}



let b=document.getElementsByTagName("button");
b[0].addEventListener('click',function f1(){
   document.body.style.backgroundColor="#333";
});
b[1].addEventListener('click',function f1(){
   document.body.style.backgroundColor="#DDD";
});

CALL BACK HELL--------------------------------
//setTimeout(()=>{},3000);
setTimeout(()=>{console.log("Arrow function")},3000);//()=>{} ye arrow function hai or isme timer lga diya hun jab 3 second hoga to ye function call ho jayega.hmne jo code likha hai oo to chal hi rha hai sath me maine jo timer set kiya hai oo bhi chal rha hai parallel.setTimeout ka bs kaam itna hai ki timer ko triggered kr de bs uske baad next line chalna start kr deta hai js engine.
console.log("line1");
console.log("line2");
console.log("line3");

function f1(fun)
{
  fun(5);
}



f1(function(value1){
   f2(value1,function(value3){
      f3(value2,function(value3){
        f4(value3,function(value4){
         console.log("All Done");
        });
      });
   });//ye pyramid of DOM kahlata hai.
})//multiple asynchronous functions ek ke under ek call ho rhe hote hain ise callback hell kahte hain.ye difficult hai to javascript iska bhi tod deta hai.isko solve krne ke liye 3 tarike js deti hai.pahla tarika ap named function use kr lo.dusra tarika ap promises ka concept use kr lo.or tisra tarika ap asyncAwait ka use kr lo. 

NAMED FUNCTION KA USE PADHENGE------------------

function step1(value1)
{
   f2(value1,step2);
}
function step2(value2)
{
   f3(value2,step3);
}
function step3(value3)
{
   f4(value3,()=>{
      console.log("All done");
   });
}
f1(step1);//ye tarika km use krte hain. sbse jyada promises use krte hain.




f1(function(value1){
   f2(value1,function(value3){
      f3(value2,function(value3){
        f4(value3,function(value4){
         console.log("All Done");
        });
      });
   });
});

FUNCTION DECLARATION (NAMED FUNCTION)-----------

f1();
function f1()//dekha jaye f1 bhi ek variable hai jo reference contain kr rha hai variable ka.
{
   console.log("I am f1");
}
//FUNCTION EXPRESSION-----------
const f2=function ()//dekha jaye f2 ek reference variable hai jo contain kr rha hai address of niche function diya gya hai uska.tab kahenge ki baat to ek hi lg rhi hai.lekin baat ek hai bhi or  nhi bhi.yaha pe phle variable bnaya hai fir declare kiya hai.isi reason se yaha hosting ka concept applicable nhi hai yaha.agar isko phle call krne ki kosis kroge to error dega.chahe yaha koi bhi variable ho.
{
   console.log("I am f2");
}
f2();
//ARROW FUNCTION-----------------------
()=>{
   console.log("I am f3");
}


()=>console.log("I am f3");//agar ek line ka code likh rhe hain to curly bracket lgane ki bhi jrurat nhi hai.

const f3=(username)=>console.log("I am f3",username);
f3("Rupesh"); 

const f3=username=>console.log("I am f3",username);//yaha paranthesis hta bhi sakte hain jb single line ka code hoga to.lekin parenthesis lga dena taki koi problem na ho.
f3("Rupesh");

const f4=(username)=>{return "Hell0",+username;}
str=f4("Rupesh");//yaha str me return ko store kr liya.uske baad me print krba dunga.
console.log(str);


function sayHi(fun){
   return fun('amit');
}
s1=sayHi(username=>{return "Hi "+username;});
console.log(s1);

//4) Default  parameters----------------
function f5(username='unknown')//jb koi bhi argument nhi pass kraoge to by default unkonwn pass ho jayega.
{
   console.log("Hello,"+username)
}
f5();
//Anonymouus function-baisa function jiska koi name nhi ho.
function fun(f)
{
   f();
}
function f6()//agar kisi function ka name nhi rakhte hain to ya to oo function expression me use ho ya to kisi variable me assign kre. ya to kisi function me as an argument pass kr do.
{
   console.log("I am f6");
}
f6();

//6) IIFE: Immediately Invoked Function Expression
//IIFE- matlab  function bnaya usi time call kr liya.use kahte hain IIFE.
//function f7()//jis function ko bnaye us function ko usi time call kr rhe ho. that means ki age isko use nhi krna hai.to fir function ka name rakhi ku rhe ho tm.function ka name ku rakhte hain taki kv dubara call kr sake.
function()
{
   console.log("I am f7");
}
f7(); 

(function()
{
   console.log("I am f7");
})();


//7) argument object------------
function f8(a,b)
{
 console.log("a="+a +" b="+b);
}
f8(10,20);

function f8()
{
 console.log(arguments);
 console.log(arguments['0']);
 console.log(arguments['0'],arguments['1']);
}
f8(10,20);//yaha pe 10,20 ko pass kraya ja rha hai lekin recieve koi nhi kr rha hai.lekin pass to kraya gya hai agar koi recieve nhi krta hai arguments ko uske liye bhi diya gya hai js me kuch jise arguments kahte hai. oo recieve kr lega.arguments ek object hai.


function f8()
{
 for(let k in arguments)//k actual me keys hai isiliye maine k likha tha.arguments object hai or object me key hai bari bari se k me aa rhi hai.
 {
  console.log(k);
 }
}
f8(10,20);//ab yaha pe kitne bhi value pass kr lo sb print ho jayega.

{
 for(let k in arguments)//sirf value chahiye to in ki jagah of lga sakte ho
 //for(let v in arguments)
 {
  console.log(v);//agar mai likhta hun arguments k to key ke sath sath value bhi dega.
 }
}
f8(10,20);


CONSTRUCTOR FUNCTION----------------

//JS me kya hai na object asani se bna sakte ho.bs krn kya hota hai.ap sidhe sidhe object bna sakte ho.bina class bnaye hue js me object kaise bnta hai.uske bnate hain function jo constructor ka roll nibhayega.
function person(name,age)
{
   this.name=name;
   this.age=age;
   //console.log(this);
}
person('Rupesh',20);//agar is tarah se call krta hun to iska mtlb constructor ko call nhi kiya hai.maine object create nhi kiuya hai.agar call krna hai to new lgakr call kro.
let p1=new person('Amit',21);//new tarika se constructor function ko call krte hain. to new object bn jata hai.or is function ke under this usi object ko represent krta hai.

//GENERATOR FUNCTION----------------
//YAH ek aisa function hai jo yield keyword ki help se value return krta hai.return key word bhi likh sakte hai. kekin return keyword se function end ho jata hai.yield function se function pouse ho jata hai.
function* counter()
{
   yield 1;
   yield 2;
   yield 3;
}
const g=counter();
console.log(g);//ye counter function return kiya hai generator object ab uske under to kuch hai hi nhi.
console.log(g.next);//generator object ke pass ek function hai jisko bolte hain next name ka to next bhi ek object return krega.usme hai ek value or ek hai done property ka name hai.done mtlb sari value yield ho chuki hai. generator ka kam khtm ho chuka hai.agar han to true ho jayega nhi to false ho jayega.agar isko dobara se call krunga to next value dega.
console.log(g.next);
console.log(g.next);
console.log(g.next);


this keyword---------------

var a=10;
console.log(this.a);
function f1()//ye global function hai to global object ko hi belong kr rha hai.
{
   b=6;//function ke body ke under bina koi variable likhenge to mana jayega global variable.
   console.log(this);
}
f1();//is function call kr rhe hain node me to is function ko call krne bala global object hai.agar is function ko browser ki help se call krunga to iske liye object hai window object fir is window object ko hi this krega represent.


function f1()
{
   b=6;
   console.log(this);
}
f1();



function f1()
{
   "use strict";
   b=6;
   console.log(this);
}
f1();

function f1()
{
   b=6;
   console.log(this.b);//this. b likhne se ye window object se ab attached ho gya.
}
f1();

function f1()
{
   console.log(this);
}
f1();


const obj={
 name:'Rupesh',
 age:44,
 sayHi:function(){//sayHi name ek function bnata hun.
   console.log("I am "+this.name);
 }
};
obj.sayHi();//ye sayHi function object ka hai.



const obj={
 name:'Rupesh',
 age:44,
 sayHi:function(){
   console.log(this);//is this ka matlab ye object ho gya isi reason se ye window pe ye pura object print kr dega.
   console.log("I am "+this.name);
   //console.log("I am "+name);//agar yaha this nhi likhega to object ke property nhi ayega.
 }
};
obj.sayHi();

const obj={
 name:'Rupesh',
 age:44,
 sayHi:function(){
   console.log(this);
   console.log("I am "+this.name);
   
 }
};

const anotherobj={
   name:'vansh'
}
another.sayHi=obj.sayHi;//obj me property kv bhi increase kr sakte ho.
anotherobj.sayHi();//function ke under jo this hai usko represent krta hai. jo us function ko calll krta hai.
obj.sayHi();




function Book(id,title,price){//maine ek constructor function bnaya hai.or new keyword ka use krenge to ek object create hoga.
   this.id=id;//jo object bneya is function kon call krne pe oo bhi new ki help se jb call kroge tab ye this represent krega.object ko jo new ki help se jo book ka object bnaya usko.
   this.title=title;
   this.price=price;
   console.log(this); 

}
Book(); //is function ko do tarike se call kr sakte hain.ek jo hai.simply call kr sakte hain.agar is function ko simply call kr diya to.to ye jo this hai. oo global object ya global window ko hi represent krega.lekin agar yaha new keyword ka use kren to or koi const variable ko likhte ho to ye represent krega b1 ko kuki call object b1 hoga.
const b1=new Book(1,"maths Book",200);//this constructor object ke case me new keyword se ki help se bn rha hai.us object ko.hi ye represent krta hai.

THIS IN CASE OF EVENT HANDLING-----------------

let btn=document.getElementById("btn");
btn.addEventListener('click',function(){
   console.log(this);//under me jo function bna hua hai iska owner hai ye btn object or ye btn object hi is this ka owner hoga .agar ap call by ke form me function pass krte hain to uske under likha this addeventLister function ka jo caller object tha.
});

ARROW FUNCTION------------------------
*/

/*arrow function ki kahani kuch different hai.firstly, for arrow function create execution contest but inside arrow function this present.but not self this present.that means execute contest create for a regular function this is present.but in case of execution context of  arrow function haiving not this.thats Amazing. 


const arrow=()=>{
   console.log(this);
};
arrow();//ye this represent krega window ko.but why?
//jab maine kaha arrow function me this nhi hota hai.iska matlab this variable nhi likh sakte hain ye nhi kah rha hun mai.to mai ye kah rha hun ki  this to arrow function me likh payenge.lekin execution context me uska khud ka this nhi hota.lekin execution context me uska khud ka this nhi hota to fir ye kis this ko represent kr leta hai.to is baat ko samghne ke liye small function bnata hun.

function f1()
{
   let a=10;
   const arrow=()=>{
   console.log(a);//ye dekhe arrow function ke under a name ka koi variable bnaya hai nhi na.fir bhi mai. a variable ko excess kr rha hun.or ye variable a upper bna hai fir bhi arrow function me exccessible hoga.
   console.log(this);//ye f1 ke this ko excess krne bala hai.or f1() ka this kon hai global object yani window object.
   };
   arrow();//arrow function ko call krna hoga tabhi to arrow function ka code chlega.or f1() ko call krna hoga tabhi to a variable chlega.ye yaha pe a variable ko kaise excess kr rhi hai. yaha pe scope chaining ka concept use hota hai.
}
f1();//agar f1 ko new krke bnaya hota to this yaha o1 object ko represent krta.
const o1=new f1();//



const obj={
   a:10,
   f1:function(){
      console.log(this.a);//ye this obj ko represent kr rha hai.usi ke a ko ye excess krega to ye definitely 10 print krne bala hai.//this==obj;
      setTimeout(function(){
         console.log(this);//ye function jo call by ke form me pass ho rha hai iske under jo likha hai. this represent krega.window object ko.window object ko ku. kuki ye bala jo function pass kr rha hun na.oo is obj object ke sath associated ya bind nhi hai.obj ke sath bind hai a name ka variable f1 name ka variable f2 name ka variable  ye a,f1,f2 ye tino obj ka properties hai.ye bind ho chuke hain is object ke sath.object me hain ye tin chije.lekin ye jo bala function setTimeout me pass kr rhe ho.oo function obj ke sath bind nhi hua hai.iska mtlb hmne samjha thaki regular function ke under agar this likh rhe han to us function ka owner jo hain this usko represent krega. to setTimeout function ka owner to obj nhi hai  kuki obj ke pass to a,f1,f2 hai ye bala function nhi hai to isiliye this ka matlab obj yaha pe nhi hoga.setTimeout ko call kiya uske under call by ke form me pass kr rhe hain function() kuki ye function  associated nhi hai obj ke sath isiliye ye window object ko represent krega.//this==window object.
      },2000);
   },
   f2:function(){
      console.log(this.a);//this==obj;
      setTimeout(()=>{
         console.log(this);//is arrow function ka this to hoga nhi to ye dekhega outer scope me.ye har us variable ko excess kr sakta hai. jo f2 ke under hai.bne honge. kuki oo uske outer scope me aa rhe honge.or jab f2 function ko call krenge to ye this represent krega obj ko.//this==obj;
      },2000);
   }
}
obj.f1();
obj.f2();



//arrow function ko as a constructor use nhi kr sakte hain.
function f1(){//ye constructor function hai.normal function ko constructor function bna sakte hain.

}
const f=new f1();

const f1=()=>{};
const obj=new f1();//this not valid f1 is not a constructor.


function f1()
{
   console.log(arguments);
}
f1(2,3);
const f1=()=>{
  console.log(arguments);//
};
f1(2,3);
EVENT HANDLING-----------


let b=document.getElementsByTagName("button");
b[0].addEventListener("click",f1());
function f1()
{
   document.body.style.backgroundColor="#0f0f";
}
   
CALL BACK HELL----------------


setTimeout(()=>{console.log("arrow function")},3000);
console.log("line1");
console.log("line2");
console.log("line3");


f1(function(value1){
   f2(value1,function(value2){
      f3(value2,function(f3){
         f4(value3,function(f4){
            console.log("all done");
         });
      });
   });
});


//NAMED FUNCTION--------------
function step1(value1)
{
   f2(value1,step2());
}
function step2(value2)
{
   f2(value2,step3());
}
function step3(value3)
{
   f2(value3,step4());
}
f1(step1);


//DECLARATION OF NAMED FUNCTION-----------
function f1()
{
   console.log("i am f1");
}

ARROW FUNCTION-----------

const f=()=>console.log("I am f3");f();
const f3=(username)=>console.log(username);f3("Rupesh");
const f4=username=>console.log("I am f3",username);f4("Rupesh");

const f5=(username)=>{return "Hell0, "+username;}
str=f5("Rupesh");
console.log(str);

function sayHi(fun){
  return fun('amit');
}
s1=sayHi(username=>{return "Hi "+username;});
console.log(s1);

ARRAY IN JS----------------------


const a=[10,20,30,40];
for(i=0;i<4;i++)
{
   console.log(a[i]);
}
console.log(a[4]);//ye undefined dega kuki yaha 0 to 3 tak hi hai.isiliye undefined dega.
const p1={         //yaha pe object bnaye hai.ek p1 name ka
   name:'Rupesh',
   age:21
};
console.log(p1.name,p1.age);//array kuch nhi hota hai ek special type ka object hi hota hai array.array k grow bhi kra sakte hain.mtlb kuch value bhi dal sakte hain.

const a=[10,20,30,40];
console.log(a[4]);
a[4]=50;//ye krne pe 4 number pe 50 add ho gya ab uske under.
console.log(a[4]); 
a[0]=100;
console.log(a[0]);

a[5]=50;//index 4 pe na kuch rakhkr direct index 5 pe rakhna chahta hun to allowed hai. lekin index 4 pe av bhi undefined hoga yani yaha array me empty slot allowed hai. 
console.log(a[5]);
console.log(a[4]);

for(i=0;i<6;i++)
{
   console.log(a[i]);
}
console.log(a.length);//ise array ka length pta chlega.



const b=[11,22,,44,55,,77];//,, is postion pe empty hai.
console.log(b);
console.log(b.length);
//array ke under heterogeneous value bhi rakhe sakte hain.
const c=[45,4.6,true,'Rupesh'];
console.log(c);


const a=[];//array bnana chahta hun but isme koi value nhi dalna chahta hun to ye bhi possibility hai.js me av iski length zero  hai.
console.log(a.length);
a[0]=23;
a[1]=34;
console.log(a.length);
console.log(a);

//new keyword se bhi chahe to array bna sakta hun.

const b=new Array();
const c=new  Array(3);
console.log(b,b.length);
console.log(c,c.length);

const d=new  Array('Bihar','Delhi','sherpur');
console.log(d,d.length);


//Accessing array elements using loop
let a=[23,34,66,78,11,14,27,30];
let i=0;
while(i<a.length)
{
   console.log(a[i]);
   i++;
}

for(let i=0;i<a.length;i++)
{
   console.log(a[i]);
}   

let a=[23,34,66,78,11,14,27,30];
for(let k in a)//a is array name but k is index number.//in se kya hota hai ye object pe lgta hai.or uski leta jata hai one by one krke.
{
   console.log(k,a[k]);//a[k]=tmhara value print krke dega.
}

let a=[23,34,66,78,11,14,27,30];
for(let v of a)// v yaha pe kya hoga ki sari value ko one by one krke excess  krte jayenge.
{
  console.log(v);// ye ek ek krke value print krte jayega console pe.
}

modify array elements--------------

let a=[23,34,66,78,11,14,27,30];
console.log(a);
a[2]=78;
console.log(a);


let a=[23,34,66,78,11,14,27,30];
//for loop lgakr bhi modify kr sakta hun sabhi value me +5 krna chahta hun.
console.log(a);
for(let v of a)
{
   v=v+5;//for of loop value ki copy deta hai.value me kuch bhi change kroge to original value me change nhi honge.
}
console.log(a);

USKI JAGAH FOR IN LOOP LGAUNGA------------

let a=[23,34,66,78,11,14,27,30];
console.log(a);
for(let k in a)
{
   a[k]=a[k]+5;//yahab pe dikh rha hai ki actual ke under hi change kr rhe hai. or ye change dikh bhi rha hai.
}
console.log(a);

DEFAULT PARAMETERS------------

function f5(username='unknown')
{
   console.log("Hello "+username);
}
f5();

//ASYNCHRONOUS FUNCTION--------
//THAT FUNCTION HAVING NO ANY NAME---------
function fun(f)
{
   f();
}

function f7()
{
 console.log("I am f7");
}
f7();


ARGUMENTS FUNCTION------------

function f6(a,b)
{
    console.log("a="+a+" b="+b);
}
f6(10,20);

function f6()
{
    //console.log("a="+arguments[0]+" b="+arguments[1]);
    console.log(arguments);
}
f6(10,20);

function f8()
{
   for(let k in arguments)
   {
      console.log(k,arguments[k]);
   }
}
f8(20,40);

function f8()
{
   for(let v of arguments)
   {
      console.log(v);
   }
}
f8(20,40);

CONSTRUCTOR FUNCTION-----------

function f9(name,age)
{
  this.name=name;
  this.age=age;
  console.log(this);
  console.log(name);
  console.log(age);
}
let p1=new f9("Rupesh",20);

function *f10()
{
   yield 1;
   yield 2;
   yield 3;
}
const g=f10();
console.log(g);
console.log(g.next);

ARRAY IN JS------------------

const a=[10,20,30,40];
for(i=0;i<a.length;i++)
{
   console.log(a[i]);
}
console.log(a[5]);

const p1={
   name:'Rupesh',
   age:20
}
console.log(p1.name,p1.age);

const a=[10,20,30,40];
for(i=0;i<a.length;i++)
{
   console.log(a[i]);
}
a[4]=200;
a[0]=100;
console.log(a[5]);
for(i=0;i<a.length;i++)
{
   console.log(a[i]);
}


const b=[11,22,,44,55,,77];
console.log(b);
console.log(b.length);

const c=[45,4.6,true,'Rupesh'];
console.log(c);

const d=[];
console.log(d.length);
d[0]=10;
d[1]=20;
console.log(d);
console.log(d.length);

const e=new Array();

const f=new Array(3);
console.log(e,e.length);
console.log(f,f.length);

const g=new Array('Bihar','Delhi','Sherpur');
console.log(g,g.length);
FUNCTION OF ARRAY-----------------------------

const a=[11,34,25];
console.log(a);
a.push(50);//isse last me jakr push hoga Element
a.unshift(40);//ye first me element ko rakhega.
console.log(a);
a.pop();//ye last element ko eliminate krega.
console.log(a);
a.shift();//ye first Element ko delete kr dega.
console.log(a);

VALUE KO ADD KRBAYA THA------------------------

const a=[11,34,25];
console.log(a);
a.splice(1,0,60,70);//isse  value add kaise krni hai.Add 60 or 70 from index 1.
console.log(a);

VALUE KO REMOVE KRBAYA --------------------

const a=[11,34,25];
a.splice(1,1);//ye ek value ko delete kr dega.index 1 se index 1 yani sirf index 1 ka value delete krega.
console.log(a);

const a=[11,34,25];
a.splice(1,2);//ye index 1 se index 2 tak ka value delete kr dega.
console.log(a);

const a=[11,34,25];
a.splice(1,3);//ye index 1 se index 3 tak ka value delete kr dega.jabki index 3 me kuch bhi nhi hai fir bhi index 2 tak to delete krega hi.
console.log(a);

const a=[11,34,25];
a.splice(0,1,30);
console.log(a);

const a=[11,34,25];
a.splice(0,1,30,40,50);
console.log(a);


const a=[11,34,25];
a.splice(0,2,30,40,50);//delete two value from index 0 11` or 34 delete and add 30,40,50 from index 0.
console.log(a);
USE OF forEach() METHOD---------------------

const a=[11,34,25];
a.forEach((e)=>{//ek ek element jo bhi ayega use e me rakh leta hun.ye function call ho rha hai ek ek element ke liye or usme pass ho rha hai ek ek krke.actual me yaha pe tin chij pass kr sakta hun.index, or jo array hai.
   console.log(e);

})//ye arrow function work krega harek element pe.

const a=[11,34,25];
a.forEach((element,index,a)=>{
   //console.log(e);//iske under index bolkr index variable ko excess kr sakta hun.
   console.log(index,element,a)

})

I WANT TO INCREASE ALL ELEMENTS BY 2------------------

const a=[11,34,25];
a.forEach((element,index,a)=>{
   console.log(index,element,a);
   //1.method console.log(index,element+2,a);
     a[index]=element+2;//add 2 to all element of an array-
})
console.log(a);

THREE MOST IMPORTANT FUNCTIONS ARE-------------------

MAP,FILTER AND REDUCE-------------------------

MAP-------------------------

const a=[11,2,7,4,6,15,9];
let b=a.map((e)=>e+1);//ye bhi callback function leta hai basically.e mtlb element yaha pass kiya gya hai arrow function.or element me plus 1 kr diya gya hai. ye callback function array  harek element pe apply hoga.map ek nya array create krega.yaha harek element se dusra array map ho rha hai.yaha pahle array ko map kr dega dusre array se.
console.log(a);
console.log(b);

FILTER FUNCTION-------------------------------

const a=[11,2,7,4,6,15,9];
let b=a.filter((e)=>e>7);//e>7 ye ya to true dega ya to false dega.jo jo element 7 se bde hain.oo true return krega.
console.log(a);
console.log(b);

REDUCE FUNCTION-------------------

const a=[11,2,7,4,6,15,9];

let b=a.reduce((s,e)=>s+e,0);//yaha pe do chij pass krenge ek to ho gya element e or dusra ho gya s.s me sari value accumulate ho jayega s me phle 11 ayega fir 2 fir 7 sb sum hote jayega.reduce me ek or arguments pass krni hoti hai  oo hoti hai.oo hota hai jo s diya hai na hmne  iska initial value maine 0 de diya.
console.log(a);
console.log(b);


const a=[23,56,11];
console.log(a.indexOf(23));//iska index 0 hai to 0 dega.
console.log(a.indexOf(24));//iska index koi hai nhi to -1 dega.iska mtlb 24 isme exist nhi krta hai.
const b=[23,56,11,23];//isme 23 2 baar hai to indexof() first occurrence ko hi btata.or 0 return kr dega kuki 23 ka index 0 hai.
console.log(b.indexOf(23));
console.log(b.lastIndexOf(23));//ye jayega right side se left side ki taraf or dekhega ki 23 kaha hai.
console.log(b.includes(11));//includes function ye btata hai ki ye particular element  array ke under hai ya nhi.ye true ya false me return krta hai.

console.log(b.join());//ye array ke is element ko join krke ek single string bna dega.or us string me apko agr koi separator nhi chahte hain to khali chhor dijiye.ye pure array ko ek single string bna diya hai.agar chahte ho ki is string me hyphen as a seperator ho.
console.log(b.join('-'));//ye sabhi me hyphen kr dega
console.log(b.join('/'));//ye sabhi me slas kr dega

ARRAY SE SUBARRAY NIKALNA CHAHTE HO TO KAISE NIKALOGE--------------------

const a=[23,56,11,23,10,5,7];
let b=a.slice(2,6);//isme kya hoga index 2 se start hoga or index 6 tak jayega or index 2 hai jo inclusive hoga or index  6 jo hoga exclusive hoga.11,23,10,5 ye value lega or ek array bnega.
console.log(b);

const a=[23,56,11,23,10,5,7];
let b=a.slice(6,2);//kya hoga jb 6 phle de diya or 2 bad me diya to.ye empty array dega.
console.log(b);


MAI CHAHTA HUN KI MANY ARRAY MILKR EK SINGLE ARRAY BNA DE--------------------

let a=[1,2,3];
let b=[4,5];
let c=[6,7,8,9];
let d=[...a,...b,...c];//ek tarika ye hai.
console.log(d);

let e=a.concat(b,c);//concat krke ye 2nd method hai.
console.log(e);


ELEMENT KO REVERSE KRNA HAI---------------------

const a=[23,56,11,23,10,5,7];
let b=a.reverse();
console.log(b);

SHALLOW COPY--------------------------------

const a=[10,30,20];
const b=a;// b ke under a ka data rakh diya hun.ab kya hoga agar mai kkisi ek changes krta hun to kuch bhi change nhi hoga kuki data copy nhi hua hai. refernce copy hua hai.a ka b me.same array hogi dono me yani ki yaha sallow copy hui hai na ki deep copy.agar chahte ho ki deep copy ho to spread operator ka use krna hoga.
a[0]=50;
console.log(a);
console.log(b);

DEEP COPY----------------------------

const a=[10,30,20];
const b=[...a];//... ye spread operator hai ye deep copy krega.yani phle array me change hoga dusre array me change nhi hoga.
a[0]=50;
console.log(a);
console.log(b);



START STRING------------------------------------

// string likhne ke total 4 ways hain.---------------
let s1="Rupesh";
let s2='Rupesh';
let s3=`Rupesh`;//back tick ka concept phle nhi tha baad me aya tha.
let s4=new String("Rupesh");//s4 ka type hoga object baki s1,s2,s3 ka type hoga string.
console.log(s1,s2,s3,s4);
console.log(s1===s2);//=== se type or value dono check krega.lekin == se ye value check krega.
console.log(s1===s4);
console.log(s1==s4);//ye value chrck krega type check nhi krega.

console.log(s1[0]);// index ki help se string ka character excess kr rha hun. 
console.log(s1.charAt(0));//index ki help se string ka character excess kr rha hun.
//jaise array me value add krta tha ya change krta tha yaha pe add ya change nhi kr sakta hun character.that means string  is immutable ekbar string ban gya to change nhi kar sakte ho.han cancatinate kr skate ho.
s1[0]='A';
console.log(s1[0]);
s1=s1+" education services";//yaha pem cancatinate ho gya hai.or pahle s1 Rupesh ko point kr rha tha ab s1 Rupesh Educational services ko point krega.iska mtl new object ban gya hai.
console.log(s1);
let s5=`"Teacher's Day"`;//"" or ' ' lagbhag dono same hi baat hai.back tick se bhut sare kaam kar sakte hain jo dusre se nhi kr paa rhe the.ab double code or single code part of string ho gye isiliye sb print ho gya.back tick se koi string bna rhe hain to usme variable bhi likh sakte hain.
console.log(s5);
let a=10;
let b=20;
let c=a+b;
//let result="sum of "+a+" and "+b+" is "+c;
let result1=`sum of ${a} and ${b} is ${c}`;//iska mtlb dollar symbol or curly bracket ke under koi expression likh sakte hain.jiska result string ka part ban jayega.
let result2=`square of ${a} is ${a*a}`;
console.log(result1);
console.log(result2);

STRING MANIPULATION--------------------------


let s1="mysirg Education services";
//console.log(s1.length);
console.log(s1.indexOf('e'));//is string ke bhut sare e hain lekin ye oo bala e btayenge jo sabse pahle hoga.
console.log(s1.lastIndexOf('e'));//ye last bale se dekhna start krega ki e kaha pe hai bahi index dega.
console.log(s1.lastIndexOf('A'));//ye -1 print krega kuki is string ke under A nahi hai.isiliye.
console.log(s1.indexOf('i'));
console.log(s1.indexOf('i',7));//mai chahta hun ki index 7 ke baad jo i hai uska index chahiye to btana pdega kaha se search krna chahte ho.
console.log(s1.includes('sir'));//ye search krega is string ke under sir hai ya nhi.
console.log(s1.lastIndexOf('er'));
console.log(s1.startsWith('my'));//agar my se start ho rha hai to true de dega.
console.log(s1.endsWith('ces'));//agar ces se end ho rha hai to true de dega.

let s1="mysirg Education services";
console.log(s1.slice(0,5));//mughe kuch index nikalne hai index 0 se lekr 5 tak.//isme 0 including hai or  5 excluding hai ye 0 se 4 tak consider krega value ko.
console.log(s1.slice(7));//ye index 7 se last tak jayega kuki starting index diya hua hai last ka index nhi diya hua hai.

SUBSTRING NIKALNE KA EK OR METHOD HAI.SUBSTRING-------
console.log(s1.substring(4,10));//take 4 to 9.

//slice method or substring me kya difference hai. slice method me kya hai na.isme argument change krta hun.console.log(s1.slice(16,7));isme bda index phle de diya to kuch nhi print krega.to empty string dega.
console.log(s1.slice(-1,-5));//slice method -ve index ko support krta hai.lekin empty dega.kuki -1 bda hai -5 se isiliye.agar -5 phle -1 baad me likhta to work krta.
console.log(s1.slice(-5,-1));//negative index piche se count krna start krta hai.
console.log(s1.substring(10,4));//jab bhi substring me bda index phle de dete ho to oo swap kr deta hai.4 ko pahle or 10 ko baad me kr deta hai. 
console.log(s1.substr(7,4));//ab ye use nhi hota hai isme 7 index number hai or 4 btata hai kitne age tak jana hai yani 4 index age tak jana hai.


*/