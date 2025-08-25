/*
DATE******************
const d1=new Date();
const d2=new Date("2024-04-30");
document.write(d1);
document.write(d2);
var h=document.getElementById("head2");
h.innerHTML=d1.toTimestring();
DATE METHODS********************

document.write(d1.getDate());//monday ko 1 manta hai
document.write(d1.getDay());
document.write(d1.getyears());

const d1=new Date();
document.write(d1);
document.write(d1.getDay()+"<br/>");
document.write(d1.getHours()+"<br/>");
document.write(d1.getMinutes()+"<br/>");
document.write(d1.getMilliseconds()+"<br/>");

//Date format
var d1=new Date("2024-04-30");
document.write(d1+"<br/>");
//short Dates
var d2=new Date("04/30/2024");
document.write(d1+"<br/>");
//long Dates
var d3=new Date("Apr 30 2024");
document.write(d3+"<br/>");
//undefined format
var d4=new Date(2024/04/03);
document.write(d4+"<br/>");

var d5=new Date(30-04-2024);
document.write(d5+"<br/>");

var d6=new Date(2024/4/30);
document.write(d6+"<br/>");

var i;
for(i=1;i<=5;i++)
{
    console.log("hello");
    document.write("hello"+"<br/>");
}
    CONVERTING STRING TO NUMBER
x=Number("52.83");//number=int,float
console.log(x);
y=Number(" ");
console.log(y);
z=Number("A");
console.log(z);

 x=parseInt("35");
console.log(x)
y=parseFloat("5.28")
console.log(y);
z=parseFloat("35");
console.log(z);
p=parseInt("35.5");
console.log(p);

CONVERTING NUMBER TO STRING

a=125;
x=a.toString();
console.log(x);
console.log((10 ** 21.5).toString()); 
x=String(256);
console.log(x);
y=String(3-57)
console.log(y);
UNARY +

let a="7";//a is string
let b=+a;//a="7",a=7
console.log(b);
CONVERTING DATES TO STRING


d1=new Date();//25 18 06
a=d1.toString();//number se string "25 18 06"
console.log(a);
y=String(d1);

FUNCTION START********

function f1()
{
    console.log("Hello");
}
f1();


function f1(text)
{
    console.log("Hello, "+text);
}
f1("mysirg");


function f1(a,b)//formal arguments
{
    let x=a+b;
    console.log("sum is"+x);
}
function f2()
{
    let x=10;
    let y=20;
    
}
f1(10,20);//actual arguments

console.log("Hello 1");//ye global level statement hai.
console.log("Hello 2");
console.log("Hello 3");

function f1()
{
 console.log("Hello 4");//ye function level statement hai hm jab chahenge tabhi ye code chlega.
}
f1();
f1();
f1();
console.log("Hello 5");
console.log("Hello 6");

CALL BACK FUNCTION************************

function f1()
{
    console.log("Hello");
}
f2(f1);//callback function

f2(function f1()
{
    console.log("Hello");
});

function f2(fun)
{
    console.log("I am in f2");//phle f2 ka code jo fun ke uper hai oo  chlega fir f2 chlega uske bad fun()
    //ke niche ka code chlega.
    fun();
    console.log("Rupesh samrat");
}

function f1()
{
  console.log("abhishek mishra");
}
f1();//take nothing return nothing

function f1(x,y)
{

console.log("sum of two number :"+(x*y));
}
f1(10,20);
function f1(x,y)
{
    let z=x+y;
  return z;
}
f1(10,20);//take something return something
console.log(f1(10,20))

function f1()
{
    let x=10;
    let y=20;
    let z=x+y;
    return z;
}
f1();//take nothing return something
console.log(f1())

function f1(x,y)
{
  let z=x+y;
  console.log(z);
}
f1(10,20);//take something return nothing

function f1(x)
{
  console.log(x);
}
f1("Abhishek");

CALL BACK FUNCTION****************

function f1()
{
    console.log("Abhishek");
}
f2(f1);//call back function

/*f2(function f1()
{
    console.log("Abhishek");
}) 

function f2(fun)//fun=f1
{
 console.log("i am bad boy");
 fun();
 console.log("nitin bhadba");
}


console.log("1");
console.log("2");
console.log("3");
f1();
function f1()
{
    console.log("Hello");
}
setTimeout(function(){console.log("A")},3000);//3000=3 s
f1();
setTimeout(function(){console.log("b")},1000);//callback function
f1();
setTimeout(function(){console.log("c")},2000);
setTimeout(function(){console.log("d")},20000);
//bcad

let e=document.querySelector("h1");
//console.log(e);
console.log(e.tagName);//isse ntag ka name pta chlega
console.log(e.textContent);
e.txtcontents="Hello MysirG";//with the help of js i ca change the content of html element.
console.log(e.textcontent);


let e=document.querryselector("h1");
console.log(e);
let f=document.querryselector("h2");
console.log(f);
let g=document.querryselector("h1");
console.log(g);



let a=document.getElementById("heading1");

let b=document.getElementsByTagName("h1");

let c=document.getElementsByClassName("c1");
console.log(a);
for(i=0;i<3;i++)
{
console.log(b[i]);//b[0],b[1],b[2]
}

let a=document.getElementById("heading1");
let b=document.getElementsByTagName("h1");
let c=document.getElementsByClassName("c1");
console.log(a.innerText);
console.log(a.innerHTML);
console.log(a.textContent);


function loginusermessage(username)
{
  if(!username)
  {
    console.log("please enter the username");
  }
  else
  {
    console.log("just logged in");
  }
}
loginusermessage();


function f1(num1)
{
   return num1+1;
}
f1(100,200,300);
console.log(f1(100,200,300));
*/


let a=document.createElement("h2");//make a h2 tage 
a.innerText("Rupesh kumar");//h2 tage ke under Rupesh likha gya 
document.body.appendChild(a);//html ke body tag ke under append kr diya.
let b=document.getElementsByTagName(h1)[2];
b.remove();