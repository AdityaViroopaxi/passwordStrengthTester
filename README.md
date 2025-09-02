Simple Password Strength TesterA lightweight, command-line tool written in JavaScript for checking the strength of passwords. This tool provides a clear score and detailed, actionable feedback to help users create more secure passwords.FeaturesPassword Strength Scoring: Evaluates password strength on a scale of 0 to 5.Detailed Feedback: Provides actionable suggestions, such as "Add uppercase letters" or "Too short".Interactive Mode: Allows real-time password checking directly in the terminal.Command-Line Argument: Supports checking a single password passed as a command-line argument.Minimal Dependencies: Requires only a standard Node.js installation.Getting StartedPrerequisitesNode.js (version 12 or higher)InstallationClone the repository and navigate into the project directory.git clone [https://github.com/your-username/password-strength-tester.git](https://github.com/your-username/password-strength-tester.git)
cd password-strength-tester
UsageInteractive ModeRun the script without any arguments to enter interactive mode.node password-checker.js
You can then type a password and press Enter to see the results. Type quit to exit.Command-Line ModePass the password you want to test as a command-line argument.node password-checker.js "MySuperStrongP@ssw0rd!"
Example Output========================================
PASSWORD: "MySuperStrongP@ssw0rd!"
STRENGTH: STRONG (5/5)
========================================
✓ Good length
✓ Has lowercase
✓ Has uppercase
✓ Has numbers
✓ Has special chars

----------------------------------------
🎉 Great password!
----------------------------------------
ContributingContributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.LicenseThis project is licensed under the MIT License - see the LICENSE file for details.
