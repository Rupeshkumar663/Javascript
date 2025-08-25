/*const AccountID=10714803123;
let AccountEmail="samratrupesh05@gmail.com";
var accountpassword="Bihar123@";
AccountCity="Bihar";
console.log([AccountID,AccountEmail,accountpassword,AccountCity]);

//USE OF NUMBER VS BIGINT-------------
x=BigInt(123456789987654321);
x=x+BigInt(8);
console.log(x);

x=BigInt(123456789987654321);
y=5.5;
//const z='Bihar';
//x=x+y;
x=x+BigInt(y);
console.log(x);

OBJECT,UNDEFINED AND NULL------------

x={a:1,b:2};
console.log(x.a+" "+x.b);
console.log(typeof(x));
var y=null;
console.log(typeof(y));

USE OF SYMBOL-----------

var x1=Symbol("hello");
var x2=Symbol("hello");
 console.log(x1==x1);
 console.log(x2==x2);
 console.log(x1==x2);

 DATE-CLASS---------------

const d1=new Date();
console.log(d1);
const d2=new Date("2025-8-19");
console.log(d2);
const d3=new Date("2025-8");
console.log(d3);
const d4=new Date("2025,8,19");
console.log(d4);
const d5=new Date(2025,7,19,20);
console.log(d5);
const d6=new Date(2025,7,19,20,30);
console.log(d6);
const d7=new Date(2025,7,19,20,30,15);
console.log(d7);
const d8=new Date(102411012);
console.log(d8);

//DATE METHODS---------------------------

const d1=new Date("2025-8-19");
//console.log(d1.toDateString());
console.log(d1.toString());

const d2=new Date("2025-8-19");
console.log(d2.getDate());
console.log(d2.getDay());
console.log(d2.getFullYear());

const d3=new Date();
console.log(d3);
d3.setDate(1);
console.log(d3.toDateString());

DATE FORMAT------------------

const d1=new Date("2025-04-30");
console.log(d1);
const d2=new Date("2025/04/30");
console.log(d2);
const d3=new Date("apr 30 2025");
console.log(d3);

TYPE CONVERSION----------------


// STRING TO NUMBER----------
x=Number("35");
console.log(x);
y=Number("35.45");
console.log(y);
z=Number(" ");
console.log(z);

CONVERT INTO SPECIFIC INT AND FLOAT------------

x=parseInt("35");
console.log(x);
y=parseFloat("35.78");
console.log(y);
z=parseInt("35.78");
console.log(z);
p=parseFloat("35");
console.log(p);

UNARY + -----------------------------------

let a="7";//a is string
let b=+a;//b is number//+ convert string into a number.
console.log(b);

CONVERTING NUMBER INTO STRING------------

x=String(256);
console.log(x);
console.log(typeof(x));

y=String(256.36);
console.log(y);
console.log(typeof(y));

x=String(256+2+76);
console.log(x);
console.log(typeof(x));

a=123;
b=a.toString();
console.log(b);
console.log(typeof(a));
c=(125).toString();
console.log(c);
console.log(typeof(c));

const d1=new Date();
a=d1.toString();
console.log(a);
console.log(typeof(a));
b=String(d1);
console.log(b);
console.log(typeof(b));
const Student={rollno:107,name:"Rupesh",Age:21};
let text=" ";
for(x in Student){
   text+=Student[x];
}
console.log(text);
*/

const num=[10,20,30,40,50,60];
for(x of num){
    console.log(x);
}