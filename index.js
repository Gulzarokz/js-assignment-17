// 37 Functions: Passing data back from them

// function calculate(num1 , num2){
//     // return num1 + num2;
//     let sum = 0;
//     sum = num1 + num2;
//     return sum;

// }
//  const total = calculate(10, 20);
//  console.log(total);
 

// Percentage calculation

// function PercentageCal(marks){
//     let sum = 0;
//     for (let i = 0; i < marks.length; i++) {
//         // console.log( marks[i]);
//         sum += marks[i];
         
        
//     }
//     return sum;
    
// }
//  const obtainMarks = PercentageCal([90, 80, 90, 79, 80]);
//  const totalmarks = 500;
//  const Percentage = (obtainMarks/totalmarks) * 100;
//  console.log(Percentage.toFixed(0));
 
// function calcTot(merchTot) {
//      var orderTot;
//      if (merchTot >= 100) {
//      orderTot = merchTot;
//      }
//      else if (merchTot < 50.01) {
//      orderTot = merchTot + 5;
//      }
//      else {
//      orderTot = merchTot + 5 + (.03 * (merchTot - 50));
//      }
//      return orderTot;
//      }
// calcTot(2000);


//38 Functions: Local vs. global variables

// Global scope it can be acess anywhere you want to access
// const FirstName = "Gulzar";

// function printName(){
//     console.log(FirstName);
    
// }
// printName();
// console.log(FirstName);

// local scope can't access any where you want.

// function localScope(){
//     const lastName = "Khan"
//     console.log(lastName);
    
// };
// localScope();
// console.log(lastName); bcz it local can't access any where you want.


