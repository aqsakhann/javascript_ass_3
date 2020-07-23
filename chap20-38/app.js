// chap 21-25
// ans1
var firstName=prompt("Enter first name");
var lastName=prompt("Enter last name");
var fullName=firstName+" "+lastName;
alert("welcome "+fullName);

// ans2
var favMobile=prompt("Enter your favourite mobile model");
length=favMobile.length;
document.write("My favourite phone is : "+favMobile);
document.write("<br>length of string : "+length);

// ans3
var string="Pakistani";
var index=string.indexOf("n");
document.write("String : "+string);
document.write(" <br> Index of 'n' : "+index);

// ans4
var string="Hello world";
var index=string.lastIndexOf("l")
document.write("String : "+string);
document.write(" <br> Index of 'l : "+index);

// ans5
var string="Pakistani";
var index=string.charAt(3)
document.write("String : "+string);
document.write(" <br> Character at index 3 : "+index);

// ans6
var firstName=prompt("Enter first name");
var lastName=prompt("Enter last name");
var fullName=firstName.concat(" ").concat(lastName);
alert("welcome "+fullName);

// ans7
var city="Hyderabad";
var replace="Islam";
var third =city.slice(5);
document.write("City : "+city+"<br>After Replacement : "+replace+third);

// ans8
var message = "Ali and Sami are best friends. They play cricket and football together."; 
var replace=message.replace(/and/g, "&");
document.write("First message <br> "+message+"<br> Altered message : <br>"+replace);

// ans9 
var integerString = "472";
document.write("Value :  "+integerString +"<br> Type :"+typeof(integerString));
var num = Number(integerString);
document.write("<br>Value :"+num +"<br> Type : "+typeof(num));

// ans10
var userInput=prompt("please input");
var upperCase=userInput.toUpperCase();
document.write("User Input : "+userInput);
document.write("<br>Upper Case : "+upperCase);

// ans11
var userInput=prompt("Please enter");
var sentence = userInput.toLowerCase().split(" ");
for(var i = 0; i< sentence.length; i++){
   sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
}
document.write("User Input : "+userInput)
document.write("<br>Titled case : "+sentence.join(" "))

// ans12
var num=35.36;
var string=num.toString();
var replace=string.replace(".","");
document.write("Number : "+num);
document.write("<br> Result : " +replace);

// ans13 
var userName=prompt("Please enter your name");
var ind1=userName.indexOf("!");
var ind2=userName.indexOf(",");
var ind3=userName.indexOf(".");
var ind4=userName.indexOf("@");
if(ind1 !== -1 ||ind2 !== -1 ||ind3 !== -1 || ind4 !== -1){
    alert("please enter valid password");
}
else{
    alert("Welcome "+userName);
}

// ans14
var fruits = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var order=prompt("Welcome to ABC bakery. What do you want to order sir /ma'am?")  ;
var lowerCase=order.toLowerCase();
// Check if a value exists in the fruits array
if(fruits.indexOf(lowerCase) !== -1){
    document.write(lowerCase+" is <b>available</b> at index "+fruits.indexOf(lowerCase) +"in our bakery");
} else{
    document.write("We are sorry."+lowerCase+" is not available in our bakery");
}


// ans15 
var password=prompt("Please enter your password");
if(password.length<6){
    document.write("Password "+password+"<br>"+"password should be 6 characters long");
}
else if(password.slice(0,1) != "0-9"){
    document.write("Password "+password+"<br>"+"password should not start with a number ");
}
else{
    document.write("Password "+password+"<br>")
}


// ans16
var str = "University of Karachi";
var res = str.split("");
for(var i=0 ; i<=res.length-1 ;i++){
document.write(res[i] +" <br>");
}

// ans17
var word=prompt("Please enter");
var last=word.slice(-1);
document.write("User Input : "+word);
document.write("<br>Last character of input :"+last);

// ans18
var string="The quick brown fox jumps over the lazy dog";
var count=string.split("the").length;
 document.write("There are "+count+" occurences of word 'the'");


// chap26-30
//  ans1
var num=prompt("Enter an integer");
var round=Math.round(num);
var cei=Math.ceil(num);
var flr=Math.floor(num);
document.write("Number : "+num +"<br>Round off value : "+round+"<br>floor value : "+flr+"<br>Ceil value : "+cei);

// ans2
var num=prompt("Enter a negative floating point")
if(num.slice(0,1) !="-" ){
    alert("please enter a negative floating point");
} 
else{
var round=Math.round(num);
var cei=Math.ceil(num);
var flr=Math.floor(num);
document.write("Number : "+num +"<br>Round off value : "+round+"<br>floor value : "+flr+"<br>Ceil value : "+cei); 
}

// ans3
var num=prompt("Enter a number to find its absolute value");
var absolute=Math.abs(num);
document.write("The absolute value of "+num +" is "+absolute);

// ans4
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random dice value : "+numberOfStars);

// ans5
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 2) + 1;
var numberOfStars = Math.floor(improvedNum);
if(numberOfStars==1){
   var toss="Heads";
   document.write("Random dice value : "+toss);
}
else if(numberOfStars==2){
    var toss="Tails";
    document.write("Random dice value : "+toss);
 }

// ans6
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 100) + 1;
var numberOfStars = Math.floor(improvedNum);
document.write("Random value between 1 to 100 : "+numberOfStars);


// ans8
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 10) + 1;
var secretNumber = Math.floor(improvedNum);
var userNumber=prompt("Enter a number");
if (secretNumber == userNumber){
    document.write("Congratulations you win");
}
else{
    document.write("Opps! you fail secret num is "+secretNumber);
}


// chap31-34
// ans1

var rightNow = new Date();
document.write(rightNow);

// ans2
var month =["January","February", "March", "April", "May","June","July","August", 
"September", "October", "November", "December"];
var datenow= new Date();
var currentMonth =month[ datenow.getMonth()] ;
document.write("Current month : "+currentMonth);


// ans3
var day=["sun","mon","tue","wed","thu","fri","sat"];
var datenow= new Date();
var currentDay = day[datenow.getDay()] ;
document.write("Today is "+currentDay);

// ans4
var datenow= new Date();
var currentDay = datenow.getDay() ;
if(currentDay == 0 || currentDay == 6){
   document.write("Today is Funday"); 
}
else{
    document.write("Today is working day");
}

// ans5
var month =["January","February", "March", "April", "May","June","July","August", 
"September", "October", "November", "December"];
var datenow= new Date();
var currentMonth =month[ datenow.getMonth()] ;
 var currentDate = datenow.getDate() ;
document.write("<h3>Fifteen days of the month</h3> <br>");
 if(currentDate <16){
     for(var i =1;i<15 ;i++){

         document.write(i+" " +currentMonth+"<br>");
     }
 }
 else  if(currentDate >16){

    for(var i =16;i<=30 ;i++){
        document.write(i +" "+currentMonth+"<br>");
    }
}

// ans6

var rightNow = new Date();
var millsSince = rightNow.getTime();
var minSince = millsSince/60;
document.write("Current Date : "+rightNow);
 document.write("<br>Elapsed miliseconds since January 1 ,1970 :" +millsSince);
 document.write(" <br>Elapsed minutes since January 1 ,1970 :" +minSince);

// ans7
var date=new Date();
var time= date.getHours();
if(time <=12){
    alert("Its AM");
}
else{
    alert("Its PM");
}

// ans8
var dateNow= new Date("December 31, 2020");
document.write("Later Date:"+dateNow);

// ans9
var ramzan1 = new Date("Apr 24,2020"); 
var today = new Date(); 
var Difference_In_Time = today.getTime() - ramzan1.getTime();  
var Difference_In_Days =Math.floor(Difference_In_Time / (1000 * 3600 * 24)) ;  
document.write(Difference_In_Days+" days have passed since 1 Ramzan 2020 <br>" ); 

// ans10
var date15=new Date("Jan 01,2015");
var dateDec =new Date("Dec 05,2015 22:50:16");
var diff =dateDec.getTime()-date15.getTime();
var Difference_In_seconds =Math.floor((diff) / (1000 * 60 )) ;
document.write("On reference date "+dateDec+" " +Difference_In_seconds +" seconds had passed since begining of 2015 "); 

// ans11 
var currentTime = new Date();
var back1 = new Date("Jun 19,2020 20:08:00");
document.write("Current Date : "+currentTime);
document.write("<br>1 Hour ago it was : "+back1);


// ans12
var currentDate = new Date();
var back100 = new Date("Jun 19, 1920");
document.write("Current Date : "+currentDate);
document.write("<br>100 years back it was : "+back100);

// ans14
var customerName=prompt("Please enter your name");
var month =["January","February", "March", "April", "May","June","July","August", 
"September", "October", "November", "December"];
var currMonth=new Date();
 var currentMonth =month[currMonth.getMonth()];
var units= 410;
var pricePunit=16;
var late=350;
var netAmount=units*pricePunit;
var grossAmount=netAmount+late;
document.write("<h4>K Electric Bill</h4>");
document.write("<br>Customer Name : "+customerName);
document.write("<br>Month : "+currentMonth);
document.write("<br>Number of Units : "+units);
document.write("<br>Charges per Unit : "+pricePunit);
document.write("<br><br>Net amount payable (within Due Date) : "+netAmount);
document.write("<br>Late payment surcharge : "+late);
document.write("<br>Gross amount payable (after Due Date) : "+grossAmount);


// chap 35-38
// // ans1
function timeNow(){
    var date =new Date();
    document.write(date);
}
timeNow();

// // ans2
function greet(){
    var firstName=prompt("Enter first name");
    var lastName=prompt("Enter last name");
    var fullName=firstName+" "+lastName;
    alert("welcome "+fullName);
}
greet();

// // ans3
function add(a,b){
    var a=prompt("Enter first number");
    var b=prompt("Enter second number");
    var add=+a + +b;
    document.write("Sum of "+a + " and "+b + " is " +add); 
}
add();

// ans4
function cal(num1,op,num2){
    var num1=prompt("Enter first number");
    var num2=prompt("Enter second number");
    var op=prompt("Please select any one operation from below <br> '+' '-' '*' '/' ");
    if (op == "+"){
        var result =+num1 + +num2;
        document.write("Sum of "+num1 +"and "+num2 +" is " +result);
    }
    else  if (op == "-"){
        var result =+num1 - +num2;
        document.write("Subtraction of "+num1 +"and "+num2 +" is " +result);
    } 
     else if (op == "*"){
        var result =+num1 * +num2;
        document.write("Multiplication of "+num1 +"and "+num2 +" is " +result);
    }
    else  if (op == "/"){
        var result =+num1 / +num2;
        document.write("Division of "+num1 +"and "+num2 +" is " +result);
    }
}
cal();

// ans5
function sqr(a,b){
    var a=prompt("Enter first number to square");
    var b=prompt("Enter second number to square");
    var s1= a*a;
    var s2= b*b;
    document.write("Square of "+a +" is "+s1+ " and "+b + " is " +s2); 
}
sqr();

// ans6
var fact=1;
function factorial(n)  
{  
    var n=prompt("Enter a number to find factorial");

    for (var i=1; i<=n ;i++){
        fact=fact*i;

    }
    document.write("Factorial of " +n +" is : "+fact);
}  

factorial();

// ans7
function counting(){
var firstNumber=prompt("Enter First Number ");
var secondNumber=prompt("Enter Second Number ");
for (var i=firstNumber ; i<=secondNumber; i++)
{
    var count=i;
    document.write(count +"<br>");
}
}
counting();

// ans8

function calcHypotenuse() {
    var base = prompt("Enter value of base");
    var per = prompt("Enter value of Perpendicular");
    function calcSquare(a) {
        var sq = a * a;
        return sq;
    }
    var hySq = calcSquare()
    var add = calcSquare(base) + calcSquare(per);
    var result = Math.sqrt(add);
    document.write("Hypotenuse of a right angled triangle is "+result);
}
calcHypotenuse();

// ans 9
function areaByvalue(w,h){
   var w=2;
   var h=4;
   var area = w*h;
    document.write("Area of rectangle is : "+area);

}
areaByvalue();

ANS 10
function isPalindrome(s) {
    return s == s.split("").reverse().join("") ? true : false;
}
alert(isPalindrome("abba"));

// ans11

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
var str="the quick brown fox"
document.write("Example string : "+str);
document.write("<br>Expected string : "+uppercase(str));

ans 12
function longestWord(){
const str="Web Development Tutorial";
document.write("Example string : " +str);
const stArry=str.split(" ");

const sortedstArry=stArry.sort();
document.write("<br>Expected output : "+sortedstArry[0]);
}
longestWord();

// ans13
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
var str='w3resource.com';
 var letter='o'
document.write("Occurrence of " +letter+" is "+ char_count(str,letter ));

// ans14
var radius=prompt("Enter value of radius");
function calcCircumference(a){
    var a=radius
    var circum= 2* 3.124*a;
    document.write("The circumference is : "+circum );
}

function calcArea(b)
{
    var b=radius
    function calcSquare(a) {
                var sq = a * a;
                return sq;
            }
    var area=  3.124 * calcSquare(b);
    document.write("<BR>Area of a circle  is : "+area );
}
calcCircumference();
calcArea();