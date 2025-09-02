
function checkPassword(password) {
    let score = 0;
    let feedback = [];
    
    // Check length
    if (password.length >= 8) {
        score++;
        feedback.push("✓ Good length");
    } else {
        feedback.push("✗ Too short (need 8+ chars)");
    }
    
    // Check for lowercase
    if (/[a-z]/.test(password)) {
        score++;
        feedback.push("✓ Has lowercase");
    } else {
        feedback.push("✗ Add lowercase letters");
    }
    
    // Check for uppercase
    if (/[A-Z]/.test(password)) {
        score++;
        feedback.push("✓ Has uppercase");
    } else {
        feedback.push("✗ Add uppercase letters");
    }
    
    // Check for numbers
    if (/\d/.test(password)) {
        score++;
        feedback.push("✓ Has numbers");
    } else {
        feedback.push("✗ Add numbers");
    }
    
    // Check for special characters
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        score++;
        feedback.push("✓ Has special chars");
    } else {
        feedback.push("✗ Add special characters");
    }
    
    // Determine strength
    let strength = "";
    if (score <= 2) strength = "WEAK";
    else if (score <= 3) strength = "OKAY";
    else if (score <= 4) strength = "GOOD";
    else strength = "STRONG";
    
    return { score, strength, feedback };
}

function showResults(password, results) {
    console.log("\n" + "=".repeat(40));
    console.log(`PASSWORD: "${password}"`);
    console.log(`STRENGTH: ${results.strength} (${results.score}/5)`);
    console.log("=".repeat(40));
    
    results.feedback.forEach(item => console.log(item));
    
    console.log("\n" + "-".repeat(40));
    if (results.score >= 4) {
        console.log("🎉 Great password!");
    } else {
        console.log("💡 Try to improve your password");
    }
    console.log("-".repeat(40));
}

// Get password from command line or prompt user
function main() {
    console.log("Starting password checker..."); // Debug line
    
    const args = process.argv.slice(2);
    console.log("Arguments received:", args); // Debug line
    
    if (args.length > 0) {
        // Password provided as argument
        const password = args[0];
        console.log("Testing password:", password); // Debug line
        const results = checkPassword(password);
        showResults(password, results);
    } else {
        // Interactive mode
        console.log("Entering interactive mode..."); // Debug line
        
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        console.log("🔐 Simple Password Checker");
        console.log("Type 'quit' to exit\n");
        
        function askPassword() {
            rl.question("Enter password to check: ", (password) => {
                if (password.toLowerCase() === 'quit') {
                    console.log("Goodbye!");
                    rl.close();
                    return;
                }
                
                if (password.trim()) {
                    const results = checkPassword(password);
                    showResults(password, results);
                } else {
                    console.log("Please enter a password.");
                }
                
                console.log();
                askPassword();
            });
        }
        
        askPassword();
    }
}

// Add error handling
try {
    main();
} catch (error) {
    console.error("Error occurred:", error.message);
}