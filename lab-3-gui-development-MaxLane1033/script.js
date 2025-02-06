// Print a message to the console
console.log("Hello, JavaScript!");

// Declare variables
let name = "Student";
let age = 20;

console.log("Name:", name);
console.log("Age:", age);

// Function to change text on button click
function changeText() {
    let x = document.getElementById("message");
    x.innerText = "You clicked the button!";
    x.style.color = "green";
}