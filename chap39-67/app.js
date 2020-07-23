// chap 38-42
// ans1
// function power(a,b){
//     var a=prompt("Enter a number ");
//     var b=prompt("Which power you want to perform ?");
//     var re=Math.pow(a,b);
//     document.write("<h1>Custom Power</h1> <br>");
//     document.write(a+"<sup>"+b+"</sup> ="+re);
// }
// power();

// // ans2
// function leapYear(year){
//     var year = prompt("Please enter a number to check a Leap Year");
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     alert(year + " is a Leap Year");
// }
// else {
//     alert(year + " is not a Leap Year");
// }
// }
// leapYear();

// // ans3
// function triangleArea(){
//     var a=prompt("Enter 1st side");
//     var b=prompt("Enter 2nd side");
//     var c=prompt("Enter 3rd side");
//     function dis(){
//         var s = (+a + +b + +c)/2;
//         return s;
//     }
//     var area=Math.sqrt(dis()*(dis()-a)*(dis()-b)*(dis()-c));
//     document.write("Area of a triangle is : "+area );
// }
// triangleArea();

// // ans4
// function mainFunction(){ 
//     var sub1=prompt("Please enter your first subject ");
//     var sub2=prompt("Please enter your second subject ");
//     var sub3=prompt("Please enter your third subjct ");
//     var m1=prompt("Enter your subject 1 marks");
//     var m2=prompt("Enter your subject 2 marks");
//     var m3=prompt("Enter your subject 3 marks");
//     var perSubject=100;
//     var totalMarks=300;
//     var totalObtain=+m1 + +m2+ +m3;
//     function percentage(){
//         var totalPercent=((+m1 + +m2+ +m3)/300)*100;
//         return totalPercent;
//     }
//     function average(){
//         var avg=(+m1 + +m2+ +m3)/3;
//         return avg;

//     }

// document.write("<table>");
// document.write("<tr>");
// document.write("<td><h3> Subject</h3> </td> ");
// document.write("<td><h3> Total Marks</h3> </td> ");
// document.write("<td><h3> Obtain Marks</h3> </td> ");
// document.write("<td><h3> Percentage</h3> </td> ");
// document.write("<td><h3> Average</h3> </td> ");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub1 +"</td>");
// document.write("<td>"+perSubject+"</td>");
// document.write("<td>"+m1+"</td>");
// document.write("</tr>");

// document.write("<td>"+sub2 +"</td>");
// document.write("<td>"+perSubject+"</td>");
// document.write("<td>"+m2+"</td>");
// document.write("<tr>");

// document.write("<td>"+sub3 +"</td>");
// document.write("<td>"+perSubject+"</td>");
// document.write("<td>"+m3+"</td>");
// document.write("</tr>");

// document.write("<td>   </td>");
// document.write("<td>"+totalMarks+"</td>");
// document.write("<td>"+totalObtain+"</td>");
// document.write("<td>"+percentage()+" % </td>");
// document.write("<td>"+average()+"</td>");
// document.write("<tr>");

// document.write("</tr>");
// document.write("</table>");
// }

// mainFunction();

// ans5
// function Index(word,letter)
// {
//     var index = -1;

//     for (var i = 0; i <4; i++)
//     {
//         if (word[i] === letter)
//         {
//             index = i;   
//         }
//     }
//     if (index === -1)
//     {
//         document.write("Not found");

//     }
//     else {
//         document.write('Found at index: ' + index);
//     }
// }
// var name = "Aqsa";
// Index(name, 'a');


// ans6
// function removeVowel(){
//     var strg=prompt("Enter sentence to remove vowels Note:sentence should not exceed 25 character");
//     if(strg.length >=25){
//         alert("Please type short sentance, maximum length of 25")
//     }
//     else{
//     var rep=strg.replace(/a|e|i|o|u/gi," ");
//     document.write(rep);
// }
// }
// removeVowel();

// ans7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;

//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }

//     return count
//   }

//   console.log(findOccurrences());



// // ans8
// function distance(){
//     var km=prompt("Enter distance in kilometers");
//     function meter(){
//         var m=km*1000;
//         return m;
//     }
//     function feet(){
//         var f=km*3280.84;
//         return f;
//     }
//     function inches(){
//         var i=km*39370.08;
//         return i;
//     }
//     function centimeter(){
//         var c=km*100000;
//         return c;
//     }
// document.write("<h1>Distance in Kilometer</h1> <br>");
// document.write("kilometer : " +km +"<br>");
// document.write("METR : " + meter()+"<br>");
// document.write("FEET : " + feet()+"<br>");
// document.write("INCHES : " +inches()+"<br>");
// document.write("CENTIMETER : " +centimeter()+"<br>");
// }
// distance();


// // ans9

// function salary() {

//     var hours = prompt("Please enter the number of hours you worked this week");
//     var rate = prompt("Please enter how much money you earn per hour");

//     //Calculates over time pay or regular pay
//     if (hours>= 40)

//     {
//      regpay = (rate * 12)
//     overtimepay = ((rate * 1.5) * (hours - 40))
//     pay = (regpay + overtimepay)

//     // Send an alert with over time pay values
//     alert ("You earned overtime this week! Your total pay is " + pay);

//     }

//     else 
//     {

//     alert ("You dont have overtime Your total pay is " );
//     }
//     }
//     salary();

// // ans10
// function cashier(){
//     // var note1=10;
//     // var note2=50;
//     // var note3=100;
//     var amount = prompt("Enter amount to withdraw");
//     if(amount % 10==0){
//         var hund=parseInt( amount / 100);
//         var fifty=parseInt((amount % 100) / 50);
//         var ten=parseInt((((amount % 100) % 50) / 10));
//         document.write("You will have "+hund+" hundred notes "+fifty+"fifty notes and "+ten+" ten notes")

//     }
//     else{
//         alert("please enter amount in hundreds");
//     }
// }

// cashier();

// chap 43-48
// ans1
function custom_alert() {
    alert("You clicked on a link");

}

// ans2
function purchased() {
    alert("Thanks for purchasing from us");
}

// ans3


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}


//   ans4
function swapPic(eId, newPic) {
    document.getElementById("before").src = newPic;
}
// ans5
//     var button = document.getElementById("inc"),count = 0;
//   button.onclick = function() {
//     count += 1;
//     button.innerHTML = "Increase: " + count;
//   };

//   chap 49-52
// ans1

// function sub() {
//     var name=document.getElementById("name")
//     var email = document.getElementById("email");
//     var ps;
//     var pswd = document.getElementById("password");
//     var conP=document.getElementById("conP")
//     if (pswd.value === "" || email.value==="") {
//         alert("enter your credentials please")
//         email.value = "";
//         pswd.value = "";
//     }
//     else if(pswd.value !=conP.value){
//         alert("Password and confirm password must be same ")
//     }
//     else {
//         document.write("<h1>Welcome</h1>")
//         document.write("Name:" + name.value);
//         document.write("<br>Email:" + email.value);
//     }
// }

// ans2
// function expand() {
//     var expandedParagraph = "NETWORK	Technology :GSM / CDMA / HSPA / EVDO / LTE<br>LAUNCH	Announced	2014, September 09<br> Status	Available. Released 2014, September 19BODY	Dimensions	158.1 x 77.8 x 7.1 mm (6.22 x 3.06 x 0.28 in)<br> Weight	172 g (6.07 oz) <br>Build	Glass front (Gorilla Glass), aluminum back, aluminum frame <br>SIM	Nano-SIM";

//             document.getElementById("slowLoris").innerHTML = expandedParagraph;
//                 }

// ans3
function subForm(){
    createTable();
}

function createTable(){
    var table=document.createElement("table");
    var tbo=document.createElement("tbody");
    var tro=document.createElement("tr");
    var td=document.createElement("td");
document.appendChild(table).appendChild(tbo).appendChild(tro).appendChild(td);


}
// CHAP 52-57
function zoom(e){
    var img=document.getElementById('modalImg');
    img.src=e.src;
    
}

//   chap58-67
// ans1
// ans i
// var main=document.getElementById("main-content");

// ansii
// var childs=document.getElementById("main-content").childNodes;
// console.log(childs);

// ansiii
// var ren=document.getElementsByClassName("render").innerHTML;
// document.write(ren);

// ansiv
// var data = document.getElementById("first-name");
// data.value = 'Aqsa';
// var data = document.getElementById("last-name");
// data.value = 'Ibrahim';
// var data = document.getElementById("email");
// data.value = 'aqsa53071@gmail.com';

// var data = document.getElementById("form-content").nodeType
// document.write(data);

// ans2
// ansi
// var formType=document.getElementById("form-content").nodeType;
// console.log(formType);

// ansii
// var noTyp= document.getElementById("last-name").nodeType;
// var noCh=document.getElementById("last-name").childNodes;
// var noChTy=noCh.nodeType;
// console.log(noChTy);

// ansiii

// console.log(document.getElementById("last-name").childNodes);

// ansiv
// console.log(document.getElementById("main-content").firstChild);
// console.log(document.getElementById("main-content").lastChild);

// ansv

// console.log(document.getElementById("last-name").nextSibling);
// console.log(document.getElementById("last-name").previousSibling);

// ansvi
// console.log(document.getElementById("email").parentNode);
// console.log(document.getElementById("email").nodeType);
