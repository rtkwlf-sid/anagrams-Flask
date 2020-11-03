# REACT + FLASK + SQLITE Full-Stack Application

This is a React project serving a Flask backend which displays if two strings are anagrams, as well as displays most popular anagram requests among users. The data flows through using RESTful APIs and gets inserted into the database.

# Prerequisites

1. Latest Node version
2. Pip3
3. Python3
4. SQLite (depends)

# Super Simple Instructions

## Fire-up the backend

In a terminal go to the flask-backend directory and run:
### `pipenv shell`
### `export FLASK_APP=api`
### `export FLASK_DEBUG=1`
### `flask run`

## Fire-up the frontend

In a terminal, go to the root directory and run:
### `npm install`
### `npm start`

## Running

At this point, you should have the app up and running on http://localhost:3000/. Most popular anagram requests should be autopopulated from the database. If you try to enter two strings in the textboxes, it will display on the alert window whether the operation was successful or not. The most-popular anagram list will update real-time as you keep on adding valid anagrams. The backend should be able to handle alphanumeric and blank data inputs. 

### Future Improvements

1. The most popular list is currently based off the strings entered through the first textbox, ideally it should recognize it's anagrams and update the same record instead of adding additional ones
2. The list currently has no cap limit, it can go on and on displaying all anagram entries, showing most used at the top
3. Backend exceptional handing and OAuth setup could be much better using try,catch and JWT tokens

