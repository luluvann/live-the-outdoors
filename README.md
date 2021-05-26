# Live The Outdoors

## Design
https://www.figma.com/file/dqil3qr9zbud5bgPtsQZAM/Front-end-Pages?node-id=0%3A1

## User Story
````
AS an outdoor enthousiast,
I WANT to be able to save favorite from all the trails available and track my completed trails

When I go to the login page of the website
Then I can log in or I can sign up to be a user of the app
When I click on the signup button
Then I brought to a signup form
When I am in the signup form
Then I can enter my username, email, password (not empty)
When I click on enter signup
Then I am brought to the dashboard page
When I click on the login button
Then I am brought to my trails dashboard
When I am on the dashboard page
Then I will see all the trails cards available in the world and also my favorite trails
When I click on the + sign of a card in the All trails section
Then the trail is added to my favorite trail section
When I click on the - sign of a card in the favorite section
Then the trail is removed from the favorite trail section
When I click on the checkbox button at the right top corner of a trail card (of any section)
Then the card the button is set as completed (the button becomes green)
When I click on on trail card
Then I am brought to a new page where I can see all the details about the trail
````

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