
// Assignment1

let firstName = "Divyabharathi";   // string
let companyName = "Microsoft";     // string
let mobileNumber = 9876543210;     // number
let isAutomation = true;           // boolean
let hasPlaywright;                 // uninitialized (undefined)

// Print values and their types
console.log("firstName:", firstName, "| type:", typeof firstName);
console.log("companyName:", companyName, "| type:", typeof companyName);
console.log("mobileNumber:", mobileNumber, "| type:", typeof mobileNumber);
console.log("isAutomation:", isAutomation, "| type:", typeof isAutomation);
console.log("hasPlaywright:", hasPlaywright, "| type:", typeof hasPlaywright);



// Assignment2

// global constant
const browserVersion = "Chrome";

// Function definition
function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        // Shadowing with var (function-scoped)
        var browserVersion = "Edge";
        console.log("Inside if block (var):", browserVersion);
    }
    // var is  accessible outside block
    console.log("Outside if block (var):", browserVersion);
}
getBrowserVersion();

// Global variable remains unchanged
console.log("Global browserVersion:", browserVersion);


//2.1
// 1. Declare a global constant
const browserVer = "Chrome";

// 2. Function definition
function getBrowserV() {
    if (browserVer === "Chrome") {
        // 3. Shadowing with let (block-scoped)
        let browserVer = "Firefox";
        console.log("Inside if block (let):", browserVer);
    }
    // 4. let not accessible outside block
    // This will refer to the global browserVersion
    console.log("Outside if block (let):", browserVer);
}

// 5. Call the function
getBrowserV();

// Global variable remains unchanged
console.log("Global browserVersion:", browserVersion);