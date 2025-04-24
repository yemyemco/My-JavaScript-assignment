//Week 5 Assignment
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
function newDrugs()
{
    let f = 0;
    let newArr = [];
    drugs.forEach(()=>
     {
          newArr[f] = "Drug: [" + drugs[f].name + "] - Dosage[" + 
          drugs[f].dosageMg + "]Mg";
          f++;
     }
);

    console.log(newArr);
}
newDrugs();

//Question 7
//Function to return all drugs with a stock less than 50
function drugStock()
{
     let g = 0;
     var drugList = [];  //To hold list of drugs
     drugs.forEach(()=>{ 
          if(drugs[g].stock < 50)
          {
               drugList[g] = drugs[g].name;  //Select drugs with stock < 50
          }
          else{ drugList[g] = null }    //Null for drugs with 50+ stock
          g += 1;
     }
     
)
drugList = drugList.filter((x)=> {return x != null }); //update drug list with only drugs with stock < 50
console.log("Drugs whose stocks are less than 50 are " + drugList);   //Show updated drug list
}
drugStock();

//Question 8
//Function to show all non-prescription drugs 
function nonPrescription()
{
     let h=0;
     console.log("The following are non-prescription drugs in the list: ");
     drugs.forEach(()=>
     {
          if(drugs[h].isPrescriptionOnly == false)
          {
               console.log(drugs[h].name)    //Show non-prescription drugs
          }
          h += 1;
     }
     )
}

nonPrescription();

//Question 9
//Function to show all drugs by the manufacturer specified
function drugManufacturer(m)
{
     let k = 0;
     let drugMfd = [];
     //Select drugs based on manufacturer if it exists
     drugs.forEach(()=>
     {
          (drugs[k].manufacturer == m) ? drugMfd[k] = drugs[k].name : 
          drugMfd[k] = null
          k += 1;
     });     

     drugMfd = drugMfd.filter((x)=> { return x != null });
     (drugMfd.length > 0) ? console.log("Drugs produced by " + m + " are " + drugMfd) : 
     console.log("Error! Manufacturer not found!");
}
drugManufacturer("Pfizer");        //Output: Shows drugs from Pfizer
drugManufacturer("GSK");           //Output: Shows drugs from GSK  
drugManufacturer("Teva");          //Output: Shows drugs from Teva
drugManufacturer("Drugfield");     //Output: Error! Manufacturer not found
drugManufacturer("CDC");           //Output: Error! Manufacturer not found

//Question 10
//Function to count drugs that are analgesics
function analgesics()
{
     let counter = 0;
     let ctr = 0;
     drugs.forEach(()=>
     {
          if (drugs[ctr].category == "Analgesic")
          {
               counter++; //Count in each analgesic drug case
          } 
          ctr += 1;
     }
);

     console.log("There are " + counter + " analgesic drugs in the list.");
}
analgesics();