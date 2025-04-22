var num = 10;
var n = 0;
var count = 0;
var arr = [];
for (n; n < num; n++)
{
     if (n % 2 == 0)
     {
          continue;  //Skip when n is an odd number
     }
     arr[count] = n;
     count++;
}

console.log("Odd numbers between 1 and 10 are " + arr);

function test(a, b)
{
     let firstName = a;
     let lastName = b;
     console.log("My name is " + firstName + " " + lastName);
}

test("Opeyemi", "Fasanu");

function factorial(num)
{
     if (num <= 0)
     {
          return 1;
     }
     else 
     {
          console.log("Num is " + num);
          factorial(num-1);
          
     }
}
console.log(factorial(4));

/* Lambda function*/
var sample = (n, e) => n / (1 + (n * (e * e)));
console.log("If n = 1000 and e = 0.05, the estimated sample size is " + sample(1000, 0.05).toFixed(0));

/* Examples of anonymous functions */
var anon = function(){ console.log("Coding is fun.");}
anon(); //call the function 


var anon = function(){ return 2*3;}
var output = anon(); //call the function
console.log(output);

/* Using the .map() function with an array and lambda function */
var arr = ["2", "3", "4"]; //array of 3 elements 

/* Multiply each element in the array by 2 */

arr.map(
     (value,index)=>
     {
     console.log("Index: " + index + ", value: " + value + " x 2 = " + value * 2);
     }
     );

/* Using while loop to loop through an array */
var arr = [2, 3, 4, 6];
let a = 0;
var b = 0;
while(a < arr.length)
{
     console.log("In array at index " + a + ", the value is " + arr[a]);
     a++;
}

for (let c = 0; c < arr.length; c++)
{
     b += arr[c];
}
console.log("The average of " + arr + " is " + b/arr.length);

/*Using nested ternary operator*/
var d = 5;
var f = 20;
(d < f) ? console.log(d + " is less than " + f) : (d > f) ?  console.log(d + " is greater than " + f) : (d == f) ? console.log(d + " is equal to " + f) : console.log("Not a number.");

function score(x)
{
     (x >= 180) ? console.log("Passed") : console.log("Failed");
}

score(50);

//How to use split() method
var sentence = "I love programming with JavaScript.";
var arr = sentence.split(" "); //Split the sentence into an array
console.log("There are " + arr.length + " words in I love programming with JavaScript. The third was is " + arr[2]);

//How to use objects
var user = {username: "User", password: "Password"}; //Object for users
console.log("The username is " + user.username + " and the password is " + user.password);

//Object() constructor 
var car = new Object()
car.model = "Tesla";
car.type = "Electric";
car.mode = "Self-driving";
console.log("Below are the properties of the car object:");
console.log("Model = " + car["model"]);
console.log("Type = " + car["type"]);
console.log("Mode = " + car["mode"]);

function func(mod, ty, md)
{
     var car = new Object();
     car.model = mod;
car.type = ty;
car.mode = md;
console.log("Below are the properties of the car object:");
console.log("Model = " + car["model"]);
console.log("Type = " + car["type"]);
console.log("Mode = " + car["mode"]);
}

func("GMD", "Automatic", "Man-controlled" );



const drugs = [

 { id: 1, name: "Amoxicillin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 120, manufacturer: "Pfizer" },

 { id: 2, name: "Paracetamol", category: "Analgesic", dosageMg: 1000, isPrescriptionOnly: false, stock: 200, manufacturer: "GSK" },

 { id: 3, name: "Ibuprofen", category: "Analgesic", dosageMg: 400, isPrescriptionOnly: false, stock: 150, manufacturer: "Bayer" },

 { id: 4, name: "Chloroquine", category: "Antimalarial", dosageMg: 250, isPrescriptionOnly: true, stock: 80, manufacturer: "Sanofi" },

 { id: 5, name: "Ciprofloxacin", category: "Antibiotic", dosageMg: 500, isPrescriptionOnly: true, stock: 70, manufacturer: "Pfizer" },

 { id: 6, name: "Loratadine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 160, manufacturer: "Novartis" },

 { id: 7, name: "Metformin", category: "Antidiabetic", dosageMg: 850, isPrescriptionOnly: true, stock: 140, manufacturer: "Teva" },

 { id: 8, name: "Artemether", category: "Antimalarial", dosageMg: 20, isPrescriptionOnly: true, stock: 60, manufacturer: "Roche" },

 { id: 9, name: "Aspirin", category: "Analgesic", dosageMg: 300, isPrescriptionOnly: false, stock: 180, manufacturer: "Bayer" },

 { id: 10, name: "Omeprazole", category: "Antacid", dosageMg: 20, isPrescriptionOnly: true, stock: 90, manufacturer: "AstraZeneca" },

 { id: 11, name: "Azithromycin", category: "Antibiotic", dosageMg: 250, isPrescriptionOnly: true, stock: 50, manufacturer: "Pfizer" },

 { id: 12, name: "Cetirizine", category: "Antihistamine", dosageMg: 10, isPrescriptionOnly: false, stock: 110, manufacturer: "Novartis" },

 { id: 13, name: "Insulin", category: "Antidiabetic", dosageMg: 100, isPrescriptionOnly: true, stock: 30, manufacturer: "Novo Nordisk" },

 { id: 14, name: "Artemisinin", category: "Antimalarial", dosageMg: 100, isPrescriptionOnly: true, stock: 50, manufacturer: "GSK" },

 { id: 15, name: "Codeine", category: "Analgesic", dosageMg: 30, isPrescriptionOnly: true, stock: 20, manufacturer: "Teva" },

 { id: 16, name: "Vitamin C", category: "Supplement", dosageMg: 500, isPrescriptionOnly: false, stock: 300, manufacturer: "Nature’s Bounty" },

 { id: 17, name: "Ranitidine", category: "Antacid", dosageMg: 150, isPrescriptionOnly: false, stock: 90, manufacturer: "Sanofi" },

 { id: 18, name: "Doxycycline", category: "Antibiotic", dosageMg: 100, isPrescriptionOnly: true, stock: 40, manufacturer: "Pfizer" },

 { id: 19, name: "Tramadol", category: "Analgesic", dosageMg: 50, isPrescriptionOnly: true, stock: 45, manufacturer: "Teva" },

 { id: 20, name: "Folic Acid", category: "Supplement", dosageMg: 5, isPrescriptionOnly: false, stock: 250, manufacturer: "Nature’s Bounty" }

];

//Question 1
console.log("*** Question 1 ***");
let drugName = []; //To hold antibiotics 

for(let a = 0; a < drugs.length; a++)
{
     if (drugs[a].category == "Antibiotic")
     {
          drugName[a] = drugs[a].name; //Store drug name where it's an antibiotic 
     }
     else
     {
          drugName[a] = null; //store null where it's not an antibiotic 
     }
}

//Call lambda function that retains only antibiotics
let antibiotics = drugName.filter((x)=>
{
    return x != null
});

console.log("In the drugs array, the following are antibiotic drugs: " + antibiotics); //Output: Names of antibiotics in the drugs array



//Question 2
//Function to return all drug names in lowercase 
console.log("*** Question 2 ***");
function changeCase()
{
     console.log("All drug names in lowercase letters are: ");
     for (let b = 0; b < drugs.length; b++)
     {
          console.log(drugs[b].name.toLowerCase());
     }
}
changeCase();


//Question 3
//Function to return all drugs in a category
console.log("*** Question 3 ***");
let isDrug = []; //To hold drug list 
function drugRequest(x)
{
     let c=0;
     drugs.forEach(()=>
     {
         //Check category requested and store drug names if category exists
         (x == drugs[c].category) ? isDrug[c] = drugs[c].name :
         isDrug[c] = null;
         c += 1;
     }
     );
     
     //Select drugs
     isDrug = isDrug.filter((x)=>
{
     return x != null
});

(isDrug.length > 0) ? console.log("The requested drug category is " + x + ". The list of drugs under it are " + isDrug) :
console.log("Invalid! Check the requesed drug category")
}


drugRequest("Antibiotic");
drugRequest("Supplement");
drugRequest("Analgesic");
drugRequest("Antidiabetic");
drugRequest("Antibiotics"); //Output: Invalid! Check the requesed drug category
drugRequest("Antipsychotic"); //Output: Invalid! Check the requesed drug category



//Question 4
//Function to log each drug and it's manufacturer
console.log("*** Question 4 ***");
function manufacturer()
{
     let d=0;
     drugs.forEach(()=>
     {
          console.log("Drug name is " + drugs[d].name + " and the manufacturer is " + drugs[d].manufacturer);
          
     d += 1;
     }
     )
}

manufacturer(); 



//Question 5
//Function to show all drugs that require prescription 
console.log("*** Question 5 ***");
function prescription()
{
     let e=0;
     console.log("The following drugs are prescription only: ");
     drugs.forEach(()=>
     {
          if(drugs[e].isPrescriptionOnly == true)
          {
               console.log(drugs[e].name)
          }
          e += 1;
     }
     )
}

prescription();

//Question 6
//Function to return new array of drugs
console.log("*** Question 6 ***");
function newDrugs()
{
    let newArr = drugs.map(()=>
     {
          drugs[f].name
     })
}