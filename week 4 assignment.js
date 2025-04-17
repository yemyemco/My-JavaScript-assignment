//Question 1
//Function receives a score and shows Passed or Failed remark
//Based on the score passed to it.
function score(x)
{
    (x >= 180) ? console.log("Passed!") : console.log("Failed!"); //Output: Passed or Failed
}

//Pass three scores to the function
score (180);
score (179);
score (181);

//Question 2
//Function receives an age and shows eligibility status
//based on the age it receives.
function age(y)
{
    //Shows eligibility based on age
    (y >= 18) ? console.log("You are eligible to vote") : console.log("Not eligible");
}

//Pass three ages to function age()
age(18);
age(13);
age(19);

//Question 3
function student(b)
{
    (b >= 90) ? console.log(b + " is excelent") : (b >=75) ? console.log(b + " is good")
    : (b >= 50) ? console.log(b + " is average") : console.log(b + " is failed");
}

//Call student function
student(90);
student(89);
student(50);
student(49);

//Question 4
//Function to conditionally grant access
function access(a, b)
{
    let hasID = a;
    let isAbove18 = b;
    (hasID == true && isAbove18 == true) ? console.log("Access granted") : console.log("Access denied");
}

//Call access function
access(true, true);     //Output: Access granted
access(false, true);    //Output: Access denied
access(false, false);   //Output: Access denied
access(true, false);    //Output: Access denied

//Question 5
//Function to loop thru an array and show appropriate comments
function arrLoop()
{
    let score = [60, 80, 51, 50, 49, 10];
    for (let ctr = 0; ctr < score.length; ctr++)
    {
        (score[ctr] > 50) ? console.log(score[ctr] + " Passed") : (score[ctr] <= 50) ?
        console.log(score[ctr] + " Failed") : console.log(score[ctr] + " Not recognised");
    }
}

//Question 6
//Call arrLoop function
arrLoop();

//Lambda (Arrow) function to determine students' Math & English Status
var verify = (a, b)=> {
    math = a; eng = b;
    (math >= 50 && eng >= 50) ? console.log("Yes, passed both Math and Eng.") : console.log("No, failed Math or English")
}
//Call verify function
verify(50, 49);     //Output: No, failed Math or English
verify(49, 50);    //Output: No, failed Math or English
verify(50, 50);     //Output: Yes, passed both Math and Eng.
verify(50,51);      //Output: Yes, passed both Math and Eng.

//Question 7
//Use Lambda function to check user's email or phone
var user = (x = "", y = "") => {
    email = x;
    phone = y;
    (email == "" || phone == "") ? console.log("Cannot sign up! Either email or phone is missing")
    : console.log("Thank you for signing up");
}

//Call the user function
user("yt@yserver.com", "080 000 111");  //Output: Thank you for signing up
user();                                 //Output: Cannot sign up! Either email or phone is missing
user("example@server.com");             //Output: Cannot sign up! Either email or phone is missing
user("080 232 2323");                   //Output: Cannot sign up! Either email or phone is missing

//Question 8
//Function checks user's input
function login(id = null, pw = null)
{
    username = id;
    password = pw;
    (username == null  || password == null) ? console.log("Invalid input") : console.log("Log in successful");
}

login();                    //Output: Invalid input
login("myID");              //Output: Invalid input
login("myID", "mypassword") //Success!

//Question 9
//Function to check hours worked
function workhr(hr)
{
    (hr >= 40) ? console.log("Full time") : console.log("Part time");
}

//Call workhr function
workhr(39);    //Output: Part time
workhr(40);    //OUtput: Full time
workhr(41);     //Output: Full time

//Question 10
//Lambda (Arrow) function to compare two number and return the larger number
var comp = (x, y) =>
{
    (x > y) ? console.log(x + " is greater than " + y) : 
    console.log(x + " is less than " + y);
}

comp(3, 2); //Output: 3 is greater than 2;
comp(2, 3); //Output: 2 is less than 3