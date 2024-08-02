//   count the number of rows first.

// ****
// ****
// ****
// **** pattern output should be this

function pattern() {
  for (let i = 0; i < 4; i++) { // determine the length of a row
    let row = "";
    for (let j = 0; j < 4; j++) {  // column size
      row += "*";
    }
    console.log(row);
  }
}
pattern();

// another pattern type question
// *
// **
// ***
// ****
// *****
// ******

function patt() {
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {  //less than i so that it comes in ascending order
      console.log(i);
      row += "*";
    }
    console.log(row);
  }
}

patt();

function pattern2() {
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    console.log(row);
  }
}

pattern2();

// output -> 1
//           1 2
//           1 2 3
//           1 2 3 4
//           1 2 3 4 5

function pattern4() {
  for (let i = 1; i < 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) { // same as above 
      row += i;
    }
    console.log(row);
  }
}

pattern4();

//  output -->   1
//               22
//               333

function pattern5() {
  for (let i = 0; i < 4; i++) {    
    let row = "";
    for (let j = 4; j > i; j--) {
      row += "*";
    }
    console.log(row);
  }
}

pattern5();

//  output ---> "****"  first row prints 4 star, 2 --> 3, 3-->2, 4--> 1;
//              "***"
//              "**"
//              "*"

//    total row - row number +1 another method to solve this

function pattern6() {
  for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 1; j <= 4 - i; j++) {
      row += j;
    }
    console.log(row);
  }
}

pattern6();

//  output -->  1234
//   123
//   12
//  1

function generatePattern1(rows) {
  // Loop through each row
  for (let i = 1; i <= rows; i++) {
    let row = ""; // Initialize the row string
    // Loop through each column in the current row
    for (let j = 0; j < i; j++) {
      row += (j % 2) + " "; // Append 0 or 1 to the row string
    }
    console.log(row.trim()); // Print the row, removing trailing spaces
  }
}

generatePattern1(5);

// output is---->

// 0
// 1 0
// 0  1 0
// 1  0  1 0
// 0  1  0  1 0

function generatePattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let leftPart = ""; // This will hold the increasing part of the pattern
    let rightPart = ""; // This will hold the decreasing part of the pattern

    // Generate the increasing part
    for (let j = 1; j <= i; j++) {
      leftPart += j + " ";
    }

    // Generate the decreasing part
    for (let j = i; j >= 1; j--) {
      rightPart += j + " ";
    }

    // Calculate the number of spaces
    let spaces = "  ".repeat(rows - i);

    // Combine left part, spaces, and right part
    let row = leftPart + spaces + rightPart;

    console.log(row.trim());
  }
}

generatePattern(4);
// output--->
// 1            1
// 1 2        2 1
// 1 2 3    3 2 1
// 1 2 3 4 4 3 2 1

function generateLetterPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let row = ""; // Initialize the row string

    // Loop through each column in the current row
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 + j) + " "; // Append the letter to the row string
    }

    console.log(row.trim()); // Print the row, removing trailing spaces
  }
}

generateLetterPattern(5);

// OUTPUT -->
// A
// A B
// A B C
// A B C D
// A B C D E
