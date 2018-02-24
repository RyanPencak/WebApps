/*

  In this assignmenmt you are given a list of student names. The challenge
  is to pair students by how similar their names are in edit distance.
  The pairing algorithm  pseudocode is:

  sort the students by last name (A to Z)
  while there is > 1 unpaired student
    X = the first unpaired student
    if X's first name begins with a vowel
      compute the Hamming distance to all other unpaired students

    if X's first name begins with a consonant
      compute the Levenshtein distance to all other unpaired students

    pair X with the most similar name, Y (ie shortest edit distance). If there
    is a tie in edit distance, sort the results by last name (A...Z) and
    take the first.

    remove X and Y from the list of unpaired students.


  to help you, you are provided with the scripts:
    levenshtein.js and hamming.js

  **THERE IS CURRENTLY A NAMING CONFLICT, solve this by wrapping each
    provided distance funciton the JavaScirpt namespace-like construct of your choice.

    YOU CANNOT SIMPLY RENAME the distance functions!
    YOU CANNOT MODIFY THE distance functions IN ANY WAY other than
    to implement your namespace construct!

    I suggest putting each in it's own unique object so in your main
    code you can write:
     hamming.distance(a,b)
      or
     levenshtein.distance(a,b)
 */

var names = ["Jordan Voves", "Keller Chambers", "Stefano Cobelli",
"Jenna Slusar", "Jason Corriveau", "Cole Whitley", "Dylan Zucker",
"Danny Toback", "Eric Marshall", "Allan La", "Natalie Altman",
"Evan Harrington", "Jack Napor", "Jingya Wu", "Christian Ouellette",
"Junjie Jiang", "Morgan Muller", "Sarah Xu", "Aleksandar Antonov",
"Parker Watson", "Haipu Sun", "Ryan Pencak", "Dan Kershner",
"John Venditti", "Jacob Mendelowitz", "Dunni Adenuga", "Jeff Lee",
"Uttam Kumaran", "Jack Hall-Tipping"]


/* STEP 1: SORT NAMES by LAST NAME! */

/* function nameCmp: compare two names by last name */
function nameCmp(names1,names2) {
  //split arrays
  var namesSplit1 = names1.split(" ");
  var namesSplit2 = names2.split(" ");

  //get last name
  var lastName1 = namesSplit1[namesSplit1.length - 1];
  var lastName2 = namesSplit2[namesSplit2.length - 1];

  //compare names
  if(lastName1 < lastName2) return -1;
  if(lastName1 > lastName2) return 1;
  return 0;
}

//slice names into first and last
// var splitNames = names.slice();

//sort by last name with name compare function
var sortedList = names.sort(nameCmp);

console.log("Sorted Names:");
console.log(sortedList);

/* WHILE > 1 students are UNPAIRED
     take 1st student, compute distance to all others,
      pair with lowest score.
      */

function pair(sortedNames) {

  var Ham = new Hamming();
  var Lev = new Levenshtein();

  var pairedList = [];

  while(sortedNames.length > 1) {

    var currentName = sortedNames.shift();
    var firstLetter = currentName[0];
    var minDistance = Infinity;
    var minDistanceIndex = 0;

    if(firstLetter == "A" || firstLetter == "E" || firstLetter == "I" || firstLetter == "O" || firstLetter == "U") {
      for(i=0; i<sortedNames.length; i++){
        var thisDistance = Ham.distance(currentName, sortedNames[i])
        if(thisDistance < minDistance)
        {
          minDistance = thisDistance;
          minDistanceIndex = i;
        }
      }
    }
    else {
      for(i=0; i<sortedNames.length; i++){
        var thisDistance = Lev.distance(currentName, sortedNames[i]);
        if(thisDistance < minDistance)
        {
          minDistance = thisDistance;
          minDistanceIndex = i;
        }
      }
    }

    // add pair to pairedList
    pairedList.push(currentName + " and " + sortedNames[minDistanceIndex]);

    // remove paired name from list
    sortedNames.splice(minDistanceIndex,1);

  }

  //push unpaired student if there is one
  if(sortedNames != 0){
    pairedList.push(sortedNames[0]);
  }

  return(pairedList);

}

var print_paired_list = pair(sortedList);
console.log("Paired Students:");
console.log(print_paired_list);
