/*function f1()
{
    console.log("hello");
}
f1();

///////////////////////////////////////////

function f1(text)
{
    console.log("hello,"+text);
}
f1("rupesh");
/////////////////////////////////////////////

function f1(a,b)
{
    let x=a+b;
    console.log("sum is "+x);
}
f1(10,20);

/////////////////////////////////

function f1(a,b)//yaha a and b x and y ko recieve krega 
{
    let s=a+b;// isme x+y nhi likh sakta hun due to scope 
    console.log("sum is "+s);
}
 function f2() 
{
    let x=10;//x and y ka jo scope hai oo bs isi block ke under hain bs is block ke bahar ap is x and y ko use nhi kar paoge
    let y=20;
    f1(x,y);//yaha pe f1() ko call kiya to x and y pass krna pda kuki is x and y ko f1 me use krna chahte hain.
}
f2();*/

///////////////////////////////////////////////////////

function f1(a,b)//yaha a and b x and y ko recieve krega 
{
    let s=a+b;// isme x+y nhi likh sakta hun due to scope 
    return s;
}
 function f2() 
{
    let x=10;//x and y ka jo scope hai oo bs isi block ke under hain bs is block ke bahar ap is x and y ko use nhi kar paoge
    let y=20;
   // f1(x,y);// ab f1(x,y) return aa jayega s isiliye ab isi ko print krbayenge cancatinate krake
   const sum=f1(x,y);
   console.log("sum is "+sum);
}
f2();