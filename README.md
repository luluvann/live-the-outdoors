# Live The Outdoors
An app to choose and save my favorite trails and completed trails

## Figma Design
https://www.figma.com/file/dqil3qr9zbud5bgPtsQZAM/Front-end-Pages?node-id=0%3A1

## Deployed App
https://vast-retreat-28547.herokuapp.com/

## User Story
````
AS an outdoor enthusiast,
I WANT to be able to save my favorite trails and track my completed trails

WHEN I arrive to the homepage of the website
THEN I can choose to login or sign up by clicking on either login or sign up button
WHEN I go to the sign up page
THEN I can sign up through a form asking for my username, email and password
WHEN I go to the login page
THEN I can log in through a form asking for my email and password
WHEN I click on the submit form button in the login or sign up forms
THEN I am redirected to the dashboard page
WHEN I am on the dashboard page
THEN I will see the "All Trails" section and the "My Favorite Trails" section which contains trails cards
WHEN I click on the heart icon of a card in the "All trails" section
THEN the trail is added to "My Favorite Trails" section
WHEN I click on the heart icon sign of a card in the "My Favorite Trails" section
THEN the trail is removed from the "My Favorite Trails" section
WHEN I click on the toggle button at the right top corner of a trail card (of any section)
THEN the card the button is set as "Completed" or "Not Completed"
WHEN I click on a trail card
THEN I am redirected to a page where I can see more details about the trail selected
WHEN I am in the Dashboard or the Trail Page
THEN I can choose to logout by clicking on the logout button in the header
WHEN I click logout
THEN I am redirected to the app homepage
````

## Technologies used
Front-End
- JavaScript / JQuery
- CSS / Bootstrap
- Font Awesome

Back-End
- Node.js
- Express.js
- Sequelize ORM / MySQL
- Connect-session-sequelize
- Bcrypt
- Express Session

Util
- Nodemon
- Github Kanban
- Heroku
- Visual Studio Code

## Installation
1. Clone the repo 
```
git clone git@github.com:luluvann/project2.git
```
2. Open a terminal and cd to the root of the cloned repo
3. Create a .env file at the root of the repo
4. Paste the following text in the .env file and make sure to replace the value in DB_PW and DB_USER with your own credentials. Keep the value of DB_NAME
```
DB_PW='yourMySQLPassword'
DB_NAME='all_trails_db'
DB_USER='yourMySQLUsername'
```
5. Install all the dependencies
```
npm install
```
6. Open MySQL Terminal and connect with your MySQL password
```
mysql -u root -p
```
7. Create the database and use it
```
source db/schema.sql
USE all_trails_db;
```
8. Open a new terminal and start a new server
```
npm start
```
9. Open a new terminal and seed the tables data
```
npm run seeds
```
10. Open a web browser and go to localhost:3002

## Developers
- Khadra M
- Deepika B
- Billie H
- Lucile T