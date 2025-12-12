//Classroom Assignment: Primitive Data Types
// let firstName = "Divyabharathi";   // string
// let companyName = "Testleaf";      // string
// let mobileNumber = 9876543210;     // number
// let isAutomation = true;           // boolean
// let hasPlaywright;                 // undefined (not assigned)

// // Print values and their types
// console.log("firstName:", firstName, "→", typeof firstName);
// console.log("companyName:", companyName, "→", typeof companyName);
// console.log("mobileNumber:", mobileNumber, "→", typeof mobileNumber);
// console.log("isAutomation:", isAutomation, "→", typeof isAutomation);
// console.log("hasPlaywright:", hasPlaywright, "→", typeof hasPlaywright);


//2.var let const
// Global constant
// const browserVersion = "Chrome";

// function getBrowserVersion() {
//     if (browserVersion ==="Chrome") {
//         // Using var
//         var browserVersion = "Edge"; 
//         console.log("Inside if block (var):", browserVersion);
//     }
//     // var accessible here
//     console.log("Outside if block (var):", browserVersion);
// }

// getBrowserVersion();
// console.log("Global const:", browserVersion);


// ///let
// // Global constant
// const browserversion = "Chrome";

// function getBrowserversion() {
//     if (browserversion ==="Chrome") {
//         //  let
//         let browserversion = "Edge";
//         console.log("Inside if block (let):", browserversion);
//     }
//     // let is block-scoped, so here it refers back to the global const
//     console.log("Outside if block (let):", browserversion);
// }

// // Call the function
// getBrowserversion();

// // Global const remains unchanged
// console.log("Global const:", browserversion);


//3.Odd or Even

// let n = 10;
// // Step 1: Declare and initialize the variable
// let number = 10;   
// // Step 2: Create the function
// function isOddOrEven(number) {
//     if (number % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }// Step 4: Call the function and print the result
// let result = isOddOrEven(number);
// console.log("The number", number, "is", result);

//4.
// Step 1: Declare and initialize the variable
//       let num = -5;   

// // Step 2:  function
// function checkNumberType(num) {
//     // Step 3: Use conditional statements
//     if (num > 0) {
//         return "Positive";
//     } else if (num < 0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }

// // Step 4: Call the function and print the result
// let  res = checkNumberType(num);
// console.log("The number", num, "is", res);


//condition
// Function 1: launchBrowser using if-else
// function launchBrowser(browserName) {
//     if (browserName.toLowerCase() === "chrome") {
//         console.log("Launching Chrome browser...");
//     } else {
//         console.log("Launching " + browserName + " browser...");
//     }
// }

// // Function 2: runTests using switch
// function runTests(testType) {
//     switch (testType.toLowerCase()) {
//         case "smoke":
//             console.log("Running Smoke tests...");
//             break;
//         case "sanity":
//             console.log("Running Sanity tests...");
//             break;
//         case "regression":
//             console.log("Running Regression tests...");
//             break;
//         default:
//             console.log("Running Smoke tests by default...");
//             break;
//     }
// }

// // Call the functions
// launchBrowser("Chrome");      // Expected: Launching Chrome browser...
// launchBrowser("Firefox");     // Expected: Launching Firefox browser...

// runTests("smoke");            // Expected: Running Smoke tests...
// runTests("sanity");           // Expected: Running Sanity tests...
// runTests("regression");       // Expected: Running Regression tests...
// runTests("performance");      // Expected: Running Smoke tests by default...



//switch

// Step 1: Declare and initialize the variable
let score = 90;   // Try changing this value to test different cases

// Step 2: Create the function
function evaluateGrade(score) {
    // Step 3: Use switch with true to check ranges
    switch (true) {
        case (score >= 90 && score <= 100):
            return "Grade A";
        case (score >= 75 && score < 90):
            return "Grade B";
        case (score >= 50 && score < 75):
            return "Grade C";
        case (score >= 35 && score < 50):
            return "Grade D";
        case (score >= 0 && score < 35):
            return "Grade F";
        default:
            return "Invalid Score";
    }
}

// Step 4: Call the function and print the result
let result = evaluateGrade(score);
console.log("The student's score is", score, "→", result);