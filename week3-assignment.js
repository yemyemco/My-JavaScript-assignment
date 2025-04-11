var name = "Opeyemi";
var age = 18;
var nationality= "Nigerian";

/* Concatenate name, age, and nationality */
console.log("My name is " + name + ". I am " + age + " years old and a " + nationality);

var quote= "He that is down needs fear no fall.";

/* change quote to uppercase letters */
console.log("Quote in CAPS: " + quote.toUpperCase());

var quote= "HE THAT IS LOW NO PRIDE";

/* change quote to lowercase letters */
console.log("Quote in lowercase: " + quote.toLowerCase());

var word = ["T", "E", "N"];

/* Display TEA in reverse*/

console.log("In reverse, TEN becomes " + word[2] + word[1] + word[0]);

/* Sum three vaklues together */
var item1 = 20;
var item2 = 30;
var item3 = 40;
var sum = item1 + item2 + item3;

console.log("The sum of three items whose pries are " + "N" + item1 + ", N" + item2 + " and N" + item3 + " is N" + sum);

/* Compute the avaerage of 5 scores */
var score1 = 5;
var score2 = 10;
var score3 = 15;
var score4 = 20;
var score5 = 25;
var avg = (score1 + score2 + score3 + score4 + score5) / 5;

console.log("The average of " + score1 + ", " + score2 + ", " + score3 + ", " + score4 + ", " + score5 + " is " + avg)

/* Food list array */
var arr = ["Pounded yam", "Fried plantains", "Rice", "Yam", "Potato"];
console.log("The first and last food items in the list are " + arr[0] + " and " + arr[4]);

/* Add Garri to the end of the food list */
arr.push("Garri");
console.log("Garri has been added at the end of the food list with push() method as follows: " + arr);

/* Add Semovita to the beginning of the food list */
arr.unshift("Semovita");
console.log("Semovita has been added at the beginning of the food list with unshift() method as follows: " + arr);

/* Three arrays of student classes with 10 names each */

var jssOne = ["Ali", "Ojo", "Titi", "Joe", "Tim", "Jim", "Jet Li", "Jackie", "Sampson", "T-pain"];

var jssTwo = ["Emilokan", "Emefelefele", "Trump", "Kemi Badenoch", "Jimi", "Johnny", "Jackie", "Chan", "Donnie", "Yen"];
 
 var jssThree = ["Simi", "Sumbi", "Keir", "Starmer", "Justin", "Treadeur", "Jane", "Yun", "Sarah", "Yemi"];
 
 console.log("JSS One class list: " + jssOne);
 console.log("JSS Two class list: " + jssTwo);
 console.log("JSS Three class list: " + jssThree);
 