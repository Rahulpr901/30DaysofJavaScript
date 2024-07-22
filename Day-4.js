// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++)
    console.log (i);  
// Task 2: Write a program to print multiplication table of 5 using a for loop.
for (let i = 1; i <= 10; i++)
    console.log ("5 * " + i + " = " + 5*i);
// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let x = 10;
while (x > 0)
{
    console.log(x);
    x--;
}
// O/P :
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1      
// Task 5:Write a program to print numbers from 1 to 5 using a do...while loop.
let a = 1;
do
{
    console.log(a);
    a++;
}while (a <= 5);
// O/P :
// 1
// 2
// 3
// 4
// 5
// Task 6: Write a program to calculate factorial of a number using a do...while loop.
let num = 5, fact = 1;
do
{
    fact *= num;
    num--;
}while (num >= 1);
console.log("Factorial of 5 = " + fact); // O/P : 120
// Task 7: Write a program to print a pattern using nested for loops.

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *
let i,j, pattern = '';
for (i =1;i<= 5; i++)
{
    for (j=1;j<=i;j++)
        pattern = pattern + "* ";
    console.log(pattern);
    pattern = '';
}
// O/P:
// *
// * *
// * * *
// * * * *
// * * * * *
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
let num1 = 1;
while (num1 <= 10)
{
    if (num1 == 5) 
        continue;
    console.log(num1);
    num1++;
}
// O/P :
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10
// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
let num2 = 1;
while (num2 <= 10)
{
    if (num2 == 7)
        break;
    console.log(num2);
    num2++;
}
// O/P :
// 1
// 2
// 3
// 4
// 5
// 6