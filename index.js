// PART 1***********************************
// let str = 
// "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// let rows=str.split("\n")
// console.log(rows);
// END PART 1*******************************

//PART 2************************************
// let str =
//   "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctors Assistant,26";
// let rows = str.split("\n");
// let arr = [];
//
// for (let i = 0; i < rows.length; i++) {
//   let columns = rows[i].split(",");
//    arr.push(columns);
// }
// console.log("The new array is:", arr);
// END PART 2**************************************

// PART 3******************************************
let newArr = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctors Assistant", "26"]
];

let header= newArr[0];
let rows=newArr.slice(1);
let result=[];

for (let x=0; x< rows.length; x++){
  let row=rows[x];
  let obj ={};
  for(let y=0; y<header.length; y++){
     obj[header[y]]=row[y];
  }
   result.push(obj);
  }
console.log("The new object is;",result);
// END PART 3*********************************

//PART 4**************************************
let people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }
  ];
 
  let cleanedArr=people.sort((x,y)=> x.id-y.id);

  cleanedArr.pop();

  cleanedArr.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" });

  cleanedArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

  console.log("Here is the array after modifying data:",cleanedArr);

  // Calculating average age:

  let groupPeople = [
    { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
    { id: "48", name: "Barry", occupation: "Runner", age: 25 },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
    { id: "7", name: "Bilbo", occupation: "None", age: 111 }
  ];
  
  let sum = 0;
  let count = 0;
  
  for (let x = 0; x < groupPeople.length; x++) {
    sum += groupPeople[x].age;
    count++;
  }
  let avgAge = sum / count;
  
  console.log("Average age of this group is:", avgAge);
//END PART 4**********************************************
