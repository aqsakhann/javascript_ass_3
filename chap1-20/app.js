// chap1
// ans1

alert("Welcome");

// ans2
alert("Error !please enetr a valid password");

// ans3
alert("Welcome to JS land..\nHappy Coding!!");

// ans4 
alert("Welsome to JS land..");
alert("Happy Coding! \n" +prompt()+ "Prevent this page from creating additional dialogs");


//ans5
alert("Hello.. i can run JS through my web browser's console  ");

// chapter 2
// ans1
var username;

// ans2
var myName="Aqsa Ibrahim";

// ans3
var message;
message="Hello World";
alert(message);

// ans4
var name="Jhone Doe";
var age="15";
var course="Certifed Mobile Application Development";
alert(name);
alert(age);
alert(course);

// ans5
var arr="PIZZA";
var a="apple";
alert(arr +"\n"+arr[0]+arr[1]+arr[2]+arr[3]+"\n"+arr[0]+arr[1]+arr[2]+"\n"+arr[0]+arr[1]+"\n"+arr[0]);

// ans6
var email="aqsa53071@gmail.com";
alert("My email address is "+email);

// ans7
var book="A smarter way to learn JavaScript";
alert("I am trying to learn from a book " +book);

// ans8 
 document.write("Yah! I can write HTML code through JavaScript");

// ans9
var string="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬" ;
alert("                "+string);


// chap3

// ans1
var age=15;
alert("I am "+age+" years old");

//ans2
    var visted = 14;
    alert("you have visited " +visted + " times" );

// ans3
var birthYear=1996;
document.write("My birth year is "+birthYear+ "<br>" +"Date type of my declared variable is number");

// ans4
var visitorName="John Doe";
var productTitled="T-shirts";
var quantity=5;
document.write(visitorName +" ordered "+ quantity + " "+productTitled +" on XYZ clothing store");

// chap4
// ans1
var variable1 ,variable2, variable3;
// ans2
//legal variables
var firstVariable,secondVariable,thirdVariable,fourthVariable,fifthVariable;
// illegal variables
var Firtvariable, 2variable ,third.variable,FOURTHVARIABLE,fifth@variable;

// ans3
document.write("Rules for naming variables <br><br>  Variable names can only contain,numbers,$, and _.For Example $my_1stVariable<br>Variables must begin with a letter,$ or_.For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keyword ");

// chap5

// ans1
var num1=3;
var num2=5;
var add=num1+num2;
document.write("Sum of "+num1 + "and "+num2 + "is " +add);

// ans2
 var sub=num1-num2;
 document.write("subtraction of "+num1 + "and "+ num2 + " is " +sub+"<br>");
 var mul=num1*num2;
 document.write("multiplication of "+num1 + "and "+ num2 + " is " +mul +"<br>");
 var mod=num1%num2;
 document.write("modulus of "+num1 + "and "+ num2 + " is " +mod +"<br>");

// ans3
 var number;
 document.write("Value after variable declaration is: ?? <br>");
 number=5;
 document.write("Initial value : "+number +"<br>");
 number++;
 document.write("Value after increment is : "+number+"<br>");
 number=7+number;
 document.write("Value after addition is : "+number+"<br>");
number--;
document.write("Value after decrement is : "+number+"<br>");
number=number%3;
document.write("The reminder is : "+number+"<br>");

// ans4
var price=600;
var tickets=5;
var totalCost=tickets*price;
document.write("Total cost to buy "+tickets+ " tickets to a movie is "+ totalCost+"PKR");

// ans5
num=3;
document.write("Table of 3 "+"<br>" )
document.write(num+" x" +1 +"="+num*1+"<br>" );
document.write(num+" x" +2 +"="+num*2 +"<br>" );
document.write(num+" x" +3 +"="+num*3 +"<br>" );
document.write(num+" x" +4 +"="+num*4 +"<br>"  );
document.write(num+" x" +5 +"="+num*5 +"<br>"  );
document.write(num+" x" +6 +"="+num*6 +"<br>"  );
document.write(num+" x" +7 +"="+num*7 +"<br>"  );
document.write(num+" x" +8 +"="+num*8 +"<br>"  );
document.write(num+" x" +9 +"="+num*9 +"<br>"  );
document.write(num+" x" +10+"="+num*10 +"<br>" );

// ans6
// celsius to fehrenheit
var celsius=25;
var cTof=(celsius*(9/5)+32);

// fehrenheit to celsius
var fehrenheit=70;
var fToc=(fehrenheit-32)*(5/9);

document.write(celsius+" °C is "+cTof+" °F <br>");
document.write(fehrenheit+" °F is "+fToc+" °C <br>");

// ans 7
var price1=650;
var price2=100;
var q1=3;
var q2=7;
var shippment=100;
var total= (price1*q1)+(price2*q2)+shippment
document.write("Price of item 1 is "+price1 +"<br>" );
document.write("Quantity of item 1 is "+q1 +"<br>");
document.write("Price of item 2 is "+price2 +"<br>");
document.write("Quantity of item 2 is "+q2 +"<br>");
document.write("Shipping Charges "+shippment +"<br>");
document.write("Total cost of your order is "+total);

// ans8
var totalMarks= 980;
var marksObtain=804;
var per=(marksObtain/totalMarks)*100;
document.write("Total marks :"+totalMarks+ "<br>Marks Obtain:"+marksObtain+"<br>Percentange:"+per);

// ans9
var us=10;
var riyal=25;
var pak=(us*104.80)+(riyal*28);
document.write("<h1>Currency in PKR</h1> <br> Total currency in PKR:"+pak);

// // ans10
var a= 2;
var expr=((((a+5)*10)/2));
document.write(expr);

// // ans11
var currentYear=2020;
var birthYear=1996;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1> <br> Current Year : "+currentYear+"<br>Birth Year : "+birthYear+"<br>Your Age is "+age);


// ans12
var radius =20;
var circumference=2*(3.142)*radius;
var area=(3.142*(radius*radius));
document.write("<h1>The Geometrizer</h1> <br> Radius of a circle : "+radius+"<br> The circumference is : "+circumference+"<br>The area is :"+area);

// ans13
var snack="lays";
var currentAge=24;
var expectedAge=65;
var perDay=2;
var suppyCal=(expectedAge-currentAge)*(perDay);
document.write("<h1>The Lifetime Supply Calculator</h1><br>Favourit Snack : "+snack+"<br>Current Age : "+currentAge+"<br>Extimated Maximum Age : "+expectedAge+"<br>Amount of snacks per day : "+perDay+"<br>You will need "+ suppyCal +snack+"to last you until the rapis age of "+expectedAge);

// chap6-9

// ans1

var a=10;
document.write("Result:<br>The value of a is :"+a+"<br>........................................");


document.write("<br>The value of ++a is :"+ ++a);
document.write("<br>Now the value of a is :"+a);

document.write("<br><br><br>The value od a++ is :"+a);
document.write("<br>Now the value of a is :"+ ++a);

document.write("<br><br><br>The value of --a is :"+ --a);
document.write("<br>Now the value of a is :"+ a);

document.write("<br><br><br>The value of a-- is :"+ a--);
document.write("<br>Now the value of a is :"+a);

// ans2
var a=2;
var b=1;
 var result = --a - --b + ++b + b--;
document.write("--a is 1 ");
document.write("--a - --b is 1 ");
document.write("--a - --b + ++b is 2");
document.write("--a - --b + ++b + b-- is 3");

// ans3
var user = prompt("Enter a your name");
alert("Welcome "+user );

//ans5

var num=prompt("Please enter a number");
if(num == "" ){
    num=5;
 for(i=1 ;i<=10;i++){
    document.write(+num +"x"+i  + "=" +num*i +"<br>");
}}
else{
for(i=1 ;i<=10;i++){
document.write(+num +"x"+i  + "=" +num*i +"<br>");
}
}

//  ans6
var perSubject=100;
var totalMarks=300;
var sub1=prompt("Please enter your first subject ");
var sub2=prompt("Please enter your second subject ");
var sub3=prompt("Please enter your third subjct ");
var obSub1=prompt("Please enter your first subject marks");
var obSub2=prompt("Please enter your second subject marks")
var obSub3=prompt("Please enter your third subject marks")
var perce1=(obSub1/perSubject)*100;
var perce2=(obSub2/perSubject)*100;
var perce3=(obSub3/perSubject)*100;
var totalObtain=obSub1+obSub2+obSub3;
var totalPercent=(totalObtain/totalMarks)*100;
document.write("<table>");
document.write("<tr>");
document.write("<td><h3>Subject</h3> </td> ");
document.write("<td><h3> Total Marks</h3> </td> ");
document.write("<td><h3> Obtain Marks</h3> </td> ");
document.write("<td><h3> Percentage</h3> </td> ");
document.write("</tr>");

Document.write("<tr>");
document.write("<td>"+sub1 +"</td>");
document.write("<td>"+perSubject+"</td>");
document.write("<td>"+obSub1+"</td>");
document.write("<td>"+perce1+"</td>");
document.write("</tr>");

document.write("<td>"+sub2 +"</td>");
document.write("<td>"+perSubject+"</td>");
document.write("<td>"+obSub2+"</td>");
document.write("<td>"+perce2+"</td>");
document.write("<tr>");

document.write("<td>"+sub3 +"</td>");
document.write("<td>"+perSubject+"</td>");
document.write("<td>"+obSub3+"</td>");
document.write("<td>"+perce3+"</td>");
document.write("</tr>");
document.write("<td>   </td>");
document.write("<td>"+totalMarks+"</td>");
document.write("<td>"+totalObtain+"</td>");
document.write("<td>"+totalPercent+"</td>");
document.write("<tr>");

document.write("</tr>");
document.write("</table>");

// chap10    
// ans1

var city=prompt("Enter city name");
if(city =="karachi"){
    alert("Welcome to the city of lights");
}  
else{
    alert("Welcome");
}

// ans2
var gender=prompt("Enter gender");
 if(gender =="male"){
     alert("Good morning sir!");
 }  
 else if(gender=="female"){
     alert("Good morning Ma'am");
      }
else{
    alert("please input correct gender");
  }  

// ans3
var traffic=prompt("Please enter color of traffic signal");
if(traffic=="red"){
    alert("You must stop");
}
else if(traffic=="yellow"){
    alert("Ready to move");
}
else if(traffic=="green"){
    alert("Now move");
}
else{
    alert("Please enter correct color");
}

// ans4
var fuel=prompt("Tell me remaining fuel in your car");
if(fuel<0.25){
    alert("Please refill the fuel in your car ")
}
else{
    alert("You have much fuel")
}

// ans5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
} //this alert is working

var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
    } //this alert is not working

var c = 12; 
if (c++ === 13){
     alert("condition 1 is true"); 
    } 
if (c === 13){ 
    alert("condition 2 is true"); 
    } //this alert is working

if (++c < 14){ 
    alert("condition 3 is true"); 
    } 
if(c === 14){
     alert("condition 4 is true"); 
    } //this alert is working

     
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
    }  //this alert is working

     
if (true){ 
    alert("True"); } 
if (false){ 
    alert("False"); 
    }  //this alert is working

if("car" < "cat"){ 
    alert("car is smaller than cat"); 
    } //this alert is working

//  ans6
var totalMarks=300;
var obtMarks=prompt("Enter secured marks of three subjects ");
percentage=(obtMarks/totalMarks)*100;
if(percentage >= 80 ){ 
     var grade="A-one";
    var remarks="Execellent"
    document.write("<h1>Mark Sheet</h1>  <br>")
    document.write("Total Marks :"+totalMarks +"<br>");
    document.write("Marks Obtain :"+obtMarks +"<br>");
    document.write("Percentage :" +percentage+"<br>")
    document.write("Grade : "+grade +"<br>");
    document.write("Remarks :"+remarks +"<br>");
}
else if(percentage >= 70 ){ 
   var grade="A";
   var remarks="Good"
   document.write("<h1>Mark Sheet</h1>  <br>")
   document.write("Total Marks : "+totalMarks +"<br>");
   document.write("Marks Obtain : "+obtMarks +"<br>");
   document.write("Percentage : " +percentage+"%<br>")
   document.write("Grade : "+grade +"<br>");
   document.write("Remarks :"+remarks +"<br>");
}
else if(percentage >= 60 ){ 
    var grade="B";
    var remarks="You need to improve"
    document.write("<h1>Mark Sheet</h1>  <br>")
    document.write("Total Marks : "+totalMarks +"<br>");
    document.write("Marks Obtain : "+obtMarks +"<br>");
    document.write("Percentage : " +percentage+"%<br>")
    document.write("Grade : "+grade +"<br>");
    document.write("Remarks :"+remarks +"<br>");
 }
   
 else if(percentage >= 50 ){ 
    var grade="Fail";
    var remarks="sorry"
    document.write("<h1>Mark Sheet</h1>  <br>")
    document.write("Total Marks : "+totalMarks +"<br>");
    document.write("Marks Obtain : "+obtMarks +"<br>");
    document.write("Percentage : " +percentage+"%<br>")
    document.write("Grade : "+grade +"<br>");
    document.write("Remarks :"+remarks +"<br>");
 }
   
    

    // ans7
    var secret=5;

    var guess=prompt("Enter number between 1-10");
    if(guess==secret){
        alert("Bingo!! Correct answer");
    }
    else if(++secret == guess){
        alert("Close enough to the answer");
    }
    else{
        alert("wrong");
    }

    // ans8
var divisible=prompt("Enter a number to check whether num divisible by three or not");
if (divisible % 3 == 0){
    alert("Given number is divisible by 3")
}
else{
    alert("Given number is not divisible by 3")
}
//  ans9
var num=prompt("Enter a number to check whether number is even or odd");
if (num % 2 == 0){
    alert("Given number is even")
}
else{
    alert("Given number is odd")
}
 
//  ans10


var temp=prompt("Please tell us your current temperature");
if(temp >40){
    alert("Its too hot outside");
}
else if(temp >30){
    alert("The weather today is normal");
}
else if(temp >20){
    alert("Todays weather is cool");
}
else if(temp >10){
    alert("OMG! Today's weather is soo cool");
}
else{
    alert("Please enter corect")
}

// ans11
var firstNum=prompt("Enter first Number");
var secondNum=prompt("Enter second Number");
var operation=prompt("Which operation you want top perform");

if(operation == "+"){
    var result=+firstNum + +secondNum;
}
else if(operation== "-"){
    var result= +firstNum - +secondNum;
}
else if(operation== "*"){
    var result= +firstNum * +secondNum;
}
else if(operation== "/"){
    var result= +firstNum / +secondNum;
}
else if(operation== "%"){
    var result= +firstNum * +secondNum;
}
document.write("<h1>Calculator</h1><br>");
document.write("First number is :"+firstNum +"<br>");
document.write("Second number is :"+secondNum +"<br>");
document.write("Result is :"+result +"<br>");

// chap 12-13
// ans1
let ch;
ch=prompt("Enter a letter to check wheather letter is capital or small");
if (ch>=65 && ch<=90){
    alert("You entered capital letter");
}
else if(ch >=97 && ch<=122){
    alert("You entered small letter");
} 

// ans2
var int1= prompt("Enter First Integer");
var int2= prompt("Enter Second Integer");
if(int1>int2){
    alert(int1 +" is larger than "+int2);
}
else if(int2>int1){
    alert(int2 +" is larger than "+int1);
}
else if(int1 =int2){
    alert(int1 +" and "+int2 +" are equal");
}

// ans3
var num=prompt("Enter a number");
if (num < 0){
    alert(num +" is negative")
}
else if (num > 0){
    alert(num +" is positive")
}
else if (num == 0){
    alert(num +" is zero")
}

// ans4
var char=prompt("Enter a character");
if(char == 'a' || char == 'e' ||char == 'i' || char =='o' || char == 'u' ){
    alert("Given charecter is a vowel");
}
else {
    alert("Given charecter is a consonent");
}

// ans5
var pass="aqsa123";
var check=prompt("Enter your password");
if(check == null){
    var check=prompt(" Please Enter your password");
}
else if(pass == check){
    alert("Correct! The password you entered matches the original password");
}
else{
    alert("Incorrect password");
}

// ans6
var greeting; 
var hour = 13;
 if (hour < 18) { 
     greeting = "Good day";
    alert(greeting);
}
 else{
     greeting = "Good evening"; 
     alert(greeting);
 } 

// ans7
var time=prompt("What time is now?");
if (time>=0000 && time < 1200){
    alert("Good morning");

}
else if (time>=1200 && time < 1700){
    alert("Good afternoon");
    
}
else if (time>=1700 && time < 2100){
    alert("Good evening");
    
}
else if (time>=2100 && time < 2359){
    alert("Good night");
    
}

else{
    alert("Please input 24 hour format for time ");
}

// chap 14-16
// ans1
 let student=[];
// // ans3
var string=["aqsa","ali","saad"];
// // ans4
var number=[1,6,2,0.3];
// // ans6
var mixedArray=['aqsa',1," this is a sentance"];
// // ans7
var qualification=["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h2>Qualification</h2><br>");
document.write("1)"+qualification[0],"<br>2)"+qualification[2],"<br>3)"+qualification[3],"<br>4)"+qualification[4],"<br>5)"+qualification[5],"<br>6)"+qualification[6],"<br>7)"+qualification[7],"<br>8)"+qualification[1])

// ans8
var student=["Michael",'John','Tony'];
var marks=[320,230,480];
var total=500;
var per1=(marks[0]/500)*100;
var per2=(marks[1]/500)*100;
var per3=(marks[2]/500)*100;
document.write("Score of "+student[0]+" is "+marks[0]+" .Percentage :"+per1+"% <br>");
document.write("Score of "+student[1]+" is "+marks[1]+" .Percentage :"+per2+"% <br>");
document.write("Score of "+student[2]+" is "+marks[2]+" .Percentage :"+per3+"% <br>");

// ans9

var color=['red','yellow','green','blue'];
document.write("<h4> Colors :</h4 > <br> "+color)
// a
var addTobegin=prompt (" Which color ypu want to  add to the begining of the array");
color.slice(addTobegin);
document.write ( " <br >Color added to the begining " +color);
// b
var addToend=prompt (" Which color ypu want to  add to the begining of the array");
color.push (addToend);
document.write ( " <br >Color added at the end " +color);
// c
color.push('cyan','brown');
document.write ( " <br >Two more colors added" +color);
// d
document.write ( " <br >deleted first color" +color.shift);
//e
document.write ( " <br >last color deleted" +color.pop);
f
var addDesiredcolor=prompt (" Which color you want to  add");
var addDesiredposition=prompt (" Where you want to add color");
color.splice (addDesiredposition,0,addDesiredcolor);
document.write ( " <br >Color added at your desire" +color);
g
var removeColor=prompt (" Which color you want to  remove please tell me position");
var removeCount=prompt (" How Many colors you want to remove");
color.splice (removeColor,removeCount);
document.write ( " <br >Remaining Colors<br>" +color)

// ans10
var scores=[320,230,480,120];
document.write("Scores of students :"+scores);
document.write("<br>Ordered scores of students :"+scores.sort());

// ans11
var city=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
document.write("<h2>Cities list:</h2><br>"+city+"<br><h2>Selected Cities List</h2><br>"+city[2]+","+city[3]);

// ans12
var arr = ["This", "is", "my", "cat"];
document.write("<h3>Array:</h3><br>"+arr) ;
document.write("<h3>String:</h3><br>"+arr.join(" ")) ;

 // ans13
var device=['Keyboard','mouse','printer','monitor'];
document.write("Devices : <br>"+device)
document.write("<br><br>Out:<br>"+device.shift()+"<br>Out:<br>"+device.shift()+"<br>Out:<br>"+device.shift()+"<br>Out:<br>"+device.shift());

// ans14
var device=['Keyboard','mouse','printer','monitor'];
 document.write("Devices : <br>"+device)
 document.write("<br><br>Out:<br>"+device.pop()+"<br>Out:<br>"+device.pop()+"<br>Out:<br>"+device.pop()+"<br>Out:<br>"+device.pop());

// ans15

var select= document.getElementById ("select"),
arr=[ "Apple", "Samsung", "Motorola", "Nokia", "Sony" ,"Haier" ];
for (i=0 ; i < arr.length; i++){
    var option=document.createElement("option"),txt= document.createTextNode(arr[i]);
    option.appendChild(txt);
    select.insertBefore(option,select.lastChild);
}

// chap17-20
// ans1
var arr1=[];
var arr2=[];
var arr3=[];


var mainArr=[
[],
[],
[]
];

// ans2
var mat1=[0,1,2,3];
var mat2=[1,0,1,2];
var mat3=[2,1,0,1];
var matrix=[
    mat1,mat2,mat3
]
document.write(mat1 +"<br>"+mat2+"<br>"+mat3)

// ans3
for(i=1;i<=10;i++){
    document.write(i+"<br>")
}

// ans4

var table=prompt("Enter a number to show its multiplication table");
var lngth=prompt("Enter the length of multiplication table");
document.write ( "Multiplication table of "+table +"<br>Length : "+lngth+"<br>")
    for(j=1; j <= lngth; j++){
        document.write(table+"x"+j+"="+table*j+"<br>")
    }

// ans5
fruits = ["apple", "banana", "mango", "orange",  "strawberry"] 
for (var i = 0; i < fruits.length ;i++) {
	document.write(fruits[i]+"<br>");
}
for (var j=0; j<fruits.length ;j++){
    document.write("Element at index "+j+" is "+fruits[j]+"<br>")
}

// ans6
// a
document.write("<h4>Counting</h4>");
for(var c=1 ;c<=15 ;c++){
    document.write(c +", ");
}
// b
document.write("<h4>Reverse</h4>");
for(var r=10 ;r>=1 ;r--){
    document.write(r +", ");
}
//c
document.write("<h4>Even</h4>");
for(var e=1 ;e<=20 ;e++){
    if(e%2==0)
    document.write(e +", ");
}
//d
document.write("<h4>Odd</h4>");
for(var o=1 ;o<=20 ;o++){
    if(o%2 != 0)
    document.write(o +", ");
}
//e
document.write("<h4>Series</h4>");
for(var s=1 ;s<=20 ;s++){
    if(s%2==0)
    document.write(s +"k,");
}

// ans7
var bakery=['chips','butter','cookies','bread','egg'];
var order=prompt("Welcome to ABC bakery. What do you want to order sir /ma'am?");
for(i=0;i<bakery.length;i++){
    if(order==bakery[i]){
        var temp=i;
        document.write(order+" is available at index "+temp+" in our bakery")
    }
    else{
        document.write(order+" is not available in our bakery");
        break;
    }
}

// ans8
var list=[24, 53, 78, 91, 12];
var largest=list[0];
for(i=0 ;i<=list.length ;i++){
    if(list[i] > largest){
        largest=list[i]
    }
}
document.write("Array item : "+list+"<br>");
document.write("The largest number is " +largest);


// ans9
var list=[24, 53, 78, 91, 12];
var smallest=list[0];
for(i=0 ;i<=list.length ;i++){
    if(list[i] < smallest){
        smallest=list[i]
    }
}
document.write("Array item : "+list+"<br>");
document.write("The smallest number is " +smallest);




// ans10
for( var i=1; i<=100;i++){
    if(i%5==0){
        document.write(i +"  ");

    }
}

















