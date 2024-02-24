// Use user input prompts to capture start and end points for the values of x and y. Should be integers.
let x = parseInt(prompt("Enter the value of x:"));
let y = parseInt(prompt("Enter the value of y:"));

// Validate the inputs to ensure they are valid numbers
if (isNaN(x) || isNaN(y)) {
    console.log("Please enter valid numbers.");
} else {
    for (let i = x; i <= y; i++) {

        //check for 0
        // TODO: This was being weird. Move ahead of other modulo checks. Otherwise, it prints "Goldy Gopher" for 0
        if (i === 0) {
            console.log("0" + " ");
        }
        
        // For Numbers that are divisible by 3 and 7, print "Goldy Gopher" in place of that number
        else if (i % 3 == 0 && i % 7 == 0) {
            console.log("Goldy Gopher" + " ");
        }

        // Log/print "Goldy" for numbers that are divisible by 3
        else if (i % 3 == 0) {
            console.log("Goldy" + " ");
        }

        // Log/print "Gopher" for numbers that are divisible by 7
        else if (i % 7 == 0) {
            console.log("Gopher" + " ");
        }

        // If none of the above conditions are satisfied, just print the number
        else {
            console.log(i + " ");
        }
    }
}
