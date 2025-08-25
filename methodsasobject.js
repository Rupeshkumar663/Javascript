var p1={
firstname:"Rupesh",
lastname:"samrat",
age:20,
editAge:function(a){this.age=a;}
}
var text="";
text+="hi,";
text+=p1.firstname;
text+="";
text+=p1.lastname;
text+="your old age was";
text+=p1.age;
text+="but now your age is";
p1.editAge(45);
text+=p1.age;
console.log(text);