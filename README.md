Final Assignment

Build an Evaluation Tool for Teachers
IMPORTANT: We know your hands itch to get started, but please read through this entire briefing before you start.
You might not have noticed that, but we have been monitoring your performance on a daily basis. After every class day, we assign each student in the class a colour code, based on their performance as we see it. These colour codes are: GREEN, YELLOW, and RED. GREEN meaning all good and on track, YELLOW meaning slightly off-track, and RED meaning needs extra attention.
Currently, we collect these evaluations in a spreadsheet. (yuck!) The spreadsheet has the following columns:
• Picture - A photo of the student
• Name - The full name of the student
• Day - Column for each day containing the colour code and optionally some remarks
We agreed between teachers that if a students is marked YELLOW or RED, we have to fill in a remark as well. For GREEN students, we are allowed to omit the remark.
Next you will find User Stories to help you build a web app to help us do this without a spreadsheet. Read them carefully.
This is an individual assignment! You can Google, ask others, anything to make you understand what you are doing. In your final (verbal) evaluation on Friday, you need to be able to tell from each and every line of code what it means, what it does exactly, and why it is there. Of course, we won’t ask about every line, just the things that might look hard ;)


User Stories

- As a Teacher I can sign into the tool with my email and password to start using it
- As a Teacher, after I signed in, I see a (list of) current classes, identifiable by their Batch number (e.g. Batch #1), start date, and end date.
- As a Teacher, I can create a new class by giving it a Batch number, start date, and end date.
- As a Teacher I can add, edit, remove students in a class. To add a student I need to provide: 1) their full name, 2) (a link to) their profile picture.
- As a Teacher, I can click on a class, after which I see a grid of all the students by their name and photo, and the last colour code given to them. Above the students grid, I see a bar with 1-3 segments, showing me the percentage (%) of students evaluated GREEN, YELLOW, and RED. As a Teacher, when I click on a photo or name, I can click on GREEN, YELLOW, or RED, fill in the date (defaults to today), and a remark. When I click “Save” it saves my evaluation, and takes me back to the student overview, when I click “Save and Next” it saves and shows me the next student.
- As a Teacher, when I look at a student’s page, I can only fill in one evaluation per student per day. I can edit my own evaluations.
- ALGORITHM PART! As a Teacher, from the class view I can click a button “ASK A QUESTION”. It shows me the name and picture of a random student to ask a question. Not entirely random though: RED students get ~53% of the questions YELLOW students ~28%, and GREEN students ~19%. 
   

 ! Pick Your Tools Wisely
We do not really care what you use to make this work, as long as you write the essential parts yourself. We advise you to stick to something you feel comfortable with, meaning you can pick any technology stack in TypeScript or JavaScript:
Back-end
TypeScript / JavaScript: Express, Koa, ...
Front-end
JavaScript: React, Super agent/Feathers client, Redux, Material UI, ...
Tips & Tricks

1. Set up a Github project board or Trello board for yourself
2. Start by sketching out the app, the navigation, and your data models
3. Make a drawing of the User interacting with your app and how this will impact the data in your database
4. Create some seed data to test different situations using your data model
5. Set up authentication in your back-end
6. Set up a front-end for the most important interactions, including signing up, in, out, and read data from your back-end
7. Tie your front-end and back-end together by making buttons, visiting URLs, etc. trigger data mutations in your back-end - WRITE TESTS for at least the important mutations and write them WHILE you’re developing not after you’re done.
8. Rinse and repeat 2-7 for each individual new, but lesser feature.
9. Make small commits, don’t work on master but make pull requests for yourself to review what you did, and to make sure that your experimental code does not end up in master before you know it’s the way to go. 
  

Bonus Stories
(should you feel bored..)
• As a Teacher during evaluation I have to fill in a Remark if I filled in YELLOW or RED.
• As a Teacher I can filter in the class overview on GREEN, YELLOW, or RED
• As a Teacher I can filter on students without evaluations for today or a specific date.
• As a Teacher I can indicate whether a student answered a question correctly or not, by giving
them a colour GREEN, YELLOW, or RED.
• For the bold : As a Teacher I can run this app as an app on my phone ;)
Good luck!
