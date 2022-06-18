
Edinburgh College – Sighthill

 


2i Testing Project




Francisco Jose Bejarano Escano
EC1825088
Contents
1.	Planning — Action plan	3
1.1.	Analysis of the project brief	3
1.1.1.	Problem analysis	3
1.1.2.	Aims of the project assignment	3
1.1.3.	Requirements	3
1.1.4.	Analysis	4
1.2.	Project plan	6
2.	Developing	8
2.1.	Implementing the planned solution	8
2.1.1.	Source code listing	8
2.1.2.	Unfamiliar libraries used	11
2.1.3.	Internal documentation	11
2.1.4.	Naming of variables	11
2.2.	Testing the implemented solution	11
References	14

 
1.	Planning — Action plan
1.1.	Analysis of the project brief
1.1.1.	Problem analysis
2iTesting offers us this project to familiarize ourselves with one of its most effective testing tools: Cypress. For this, the following scenario is proposed:
•	Create a Ui Test Pack that interacts with their random data generator as if it were a real user.
•	Prepare and download a CSV file from their random data generator.
•	Build an HTML web form from scratch.
•	Use the CSV file to enter the data in the form fields created earlier using Cypress.
1.1.2.	Aims of the project assignment
The main objective of this project is to familiarize ourselves with the use of this testing tool. But why Cypress? Cypress is an all-in-one framework that includes assertion libraries, mock libraries, and automated e2e tests. It consists of a new architecture, built from scratch, that executes the commands in the same execution cycle as the application. Behind Cypress runs a Node process that constantly communicates, synchronizes and executes tasks, having access to both the front and back of the application and responding to events in real time.
1.1.3.	Requirements
1.1.3.1.	Functional requirements
•	Systems Diagram to demonstrate the layers of Technology.
•	Cypress Test pack.
•	HTML webform.
•	Use Cypress to take the CSV output by the tool and enter it into the webform.
1.1.3.2.	Non-functional requirements
•	Design with accessibility features for people with disabilities.
•	Proof that the Form can accept data.
1.1.3.3.	Constrains
•	Project must be finished by May 25th.
•	Using Cypress for the first time as a testing tool.
1.1.4.	Analysis
1.1.4.1.	System diagram
The use case diagram is a form of behaviour diagram in Unified Modelling Language (UML), with which business processes as well as systems and object-oriented programming processes are represented (DesignWIKI, 2020).
Figure 1. System Diagram
1.1.4.2.	Sequence Diagram
The sequence diagram is a type of interaction diagram whose objective is to describe the dynamic behavior of the information system, emphasizing the sequence of the messages exchanged by the objects.
 
Figure 2. Sequence Diagram
1.1.4.3.	Webform Wireframe
A wireframe is a sketch where the structure of a web page is visually represented, in a very simple and schematic way. As an example, three pages have been selected as they would look like (experienceux, 2022).
 
Figure 3. Webform wireframe
1.2.	Project plan
The first step to get to know this software is to take a course through the LinkedIn Learning platform. This course teaches basic and intermediate level concepts, which may be enough to tackle this project (Wassell, 2022).
The next step is to define the parameters to be tested in the app to generate data provided by 2iTesting, to then test it with Cypress.
After verifying that it passes all the tests, the data that must be entered in the webform is extracted from the briefing provided by 2iTesting. The app will produce a CSV file that will be used later. Cypress will also be used to create this file.
Then a webform will be built from scratch using HTML language.
Back in Cypress, the data from the CSV file is parsed to a JSON file which is the type of file that Cypress can handle.
Finally, through Cypress, the data is extracted from the JSON file and entered in the corresponding fields of the webform. Once the submit button is pressed, a summary with the entered data can be seen at the bottom of the web page.
Figure 4. Gantt Chart

2.	Developing
2.1.	Implementing the planned solution
After doing the project analysis work, it's time to "get the hands dirty" and start coding, but not before taking an introductory course on Cypress.
 
Figure 5. Certificate of Completion of End-to-End JavaScript Testing with Cypress.io Course
2.1.1.	Source code listing
As explained above, the project has been divided into three sections. In the first part, the elements of the Data Generator site are tested and a CSV file is created. 
In this section, the get() function is mainly used, pointing to the id's of the elements to be tested. Then the desired action is included, such as click() when it comes to pressing a button or type() when filling in a text field.
 
Figure 6. Code section of the first part of the project.
Once the CSV file has been downloaded to the 'Downloads' folder in the main root of the project, the code continues parsing from CSV to JSON file, which is the type of document that Cypress can handle. For this, the Papa Parse library is used, which can extract the headers and data from the CSV file and converting it to JSON (Papa Parse, 2022). The file is saved in the 'Fixtures' folder in the main root of the project.
 
Figure 7. Section of code dedicated to parsing the CSV file to JSON file
Finally, the code accesses the URL where the webform is hosted (in this case the page is saved in the 'Pages' folder and runs on the local server). In a loop, the data is filled in the corresponding text fields and the submit button is pressed. The page responds by displaying the data entered in a field under the submit button.
 
Figure 8. Section of the code dedicated to completing the webform
2.1.2.	Unfamiliar libraries used
As noted above, the Papa Parse library has been used to parse the CSV file to JSON.
2.1.3.	Internal documentation
Throughout the project, descriptions and annotations of what the code does have been left. Also, the it() functions that start each of the tests have been written as descriptively as possible.
 
Figure 9. Section of code where the description in the it() function is observed, in addition to a commented line
2.1.4.	Naming of variables
For the nomenclature of the variables, the conventional camelCase method is used. They are also given meaningful names that help relate the variable to the part of the code in which it is found.

2.2.	Testing the implemented solution
The first part of the project in charge of testing the Data Generator pack elements and generating the CSV file worked correctly from minute one. However, Cypress returned an error whenever trying to fill in the webform data.
 
Figure 10. Screenshot of the Cypress interface with the error.
After reviewing the code several times, the error is detected in the JSON file. Investigating it is found that the CSV file is encoded in UTF-8. This type of encoding tends to include some hidden characters that do not bother when reading the file, but the Papa Parse library does detect and reproduce them. Therefore, in the first line of the JSON file, and affecting the first header, it is possible to see these "strange" characters.
 
Figure 11. CSV File
 
Figure 12. JSON File with the "strange" characters affecting the first header
These characters prevent Cypress from recognizing the data it needs to extract from the JSON file and return an error during the test.
In the absence of a better solution and greater knowledge about coding or how the Data Generator code is developed to use another type of coding, the solution that has been chosen is to include in the CSV file a data that will not be used in the form. In this way, when parsing the file, the "strange" characters will be placed in the header that will not be used, so the form will complete without errors.
 
Figure 13. CSV File with an extra field.
 
Figure 14. JSON file with the "strange" characters in the header that are not needed to complete the webform.
 
References
DesignWIKI, 2020. System Diagram. [Online] 
Available at: https://deseng.ryerson.ca/dokuwiki/design:system_diagram#:~:text=A%20system%20diagram%20is%20a,all%20fall%20under%20this%20rubric.
[Accessed 09 March 2022].
experienceux, 2022. What is wireframing?. [Online] 
Available at: https://www.experienceux.co.uk/faqs/what-is-wireframing/
[Accessed 09 03 2022].
Papa Parse, 2022. Papa Parse - Powerful CSV Parser for JavaScript. [Online] 
Available at: https://www.papaparse.com/
[Accessed 4 May 2022].
Wassell, S., 2022. End-to-End JavaScript Testing with Cypress.io. [Online] 
Available at: https://www.linkedin.com/learning/certificates/ab834c192bf365c4ae393e0efed6057f6cb1fcc6e50c8e215a36e4ab0972f0d8?trk=share_certificate
[Accessed 09 March 2022].



