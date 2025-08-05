Part 1: Requirements Analysis & Test Plan Outline
Functional Requirements:
1.	User must land on the login page when clicked on the URL
2.	When the user taps on the label Username, the field should be focused and the curser should blink expecting for the user input.
3.	The Username field must accept only letters 
4.	User should get the validation error message when left the Username field empty
5.	When the user taps on the label Password, the field should be focused and the curser should blink expecting for the user input.
6.	The Password field must accept letters and special characters 
7.	The password field must have Password Masking.
8.	User should get the validation error message when left the Password field empty
9.	User must be able to see the Login button being enabled when the curser is hovered over it
10.	User must be able to click on the Login button
11.	User must be able to navigate to the next page when clicked Login button with valid credentials
12.	User must be able to navigate to the next page when clicked on the link Elemental Selenium
13.	When clicked on the Fork me on GitHub link, the user must navigate to his/her GitHub account and see the copy of the repository being created. [ Not sure if this is part of the testing or for one to work on it]

Non-Functional Requirements:
1.	Check for the “Not secure” sign beside the URL to ensure the site is secured
2.	Verify the URL loads immediately when clicked or entered
3.	Verify how long it takes to navigate to next page when clicked Login button
4.	Click the back button(arrow) on the browser to check the login
5.	Close the browser after entering the credentials and open again to check 
6.	Check the login for different devices
7.	Check the login for the cross-browser compatibility
8.	Verify the fields can be navigated through keyboard 
9.	Check if it is accessible for the people with accessibility issues



TEST PLAN
Scope: 
1.	Login functionality with valid and invalid credentials
2.	Testing in different browsers and devices
3.	Ensuring secure test like Password masking and Validation
4.	Error messages appear validating the empty fields and invalid logins
5.	Ensure successful login and logout

Testing Approach: 
1.	Requirement Analysis : Analyze the requirements into functional and non-functional requirements based on the login form observation 
2.	Manual Testing : 
•	 Exploratory Approach : Perform exploratory testing to find edge cases and vulnerabilities 
•	Scripted Approach : Design and execute 3-5 detailed manual test cases for the login form including both positive and negative scenarios.
3.	Test Automation: Setup the environment and Create automation test scripts using Python (Selenium/Playwright) or JavaScript/TypeScript (Playwright/Selenium) automation tool with Javascript/Typescript to check the login functionality 
4.	Security Checks : To check if the login feature is secured
Key Test Deliverables: 
1.	Test plan and  test cases
2.	Defects : Report the bugs/defects in a document
3.	UI Automation scripts
4.	Project Summary and reflection
•	Create a README.md file that includes challenges faced and recommendations

Assumptions : 
1.	The login web form opens to test the login functionality
2.	The login credentials are available and working
3.	The login UI is stable and functional across all the browsers



