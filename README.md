# REACT + FLASK + SQLITE Full-Stack Application

This is a React project serving a Flask backend which displays if two strings are anagrams, as well as displays most popular anagram requests among users. The data flows through using RESTful APIs and gets inserted into the database.

# Prerequisites

1. Latest Node version
2. Pip3
3. Python3
4. SQLite (depends)

# Super Simple Instructions

## Fire-up the backend

Go to the flask-backend directory and run:
### `pipenv shell`
### `export FLASK_APP=api`
### `export FLASK_DEBUG=1`
### `flask run`

## Fire-up the frontend

In the root directory, run:
### `npm install`
### `npm start`

## Running

At this point, you should have the app up and running on http://localhost:3000/. Most popular anagram requests should be autopopulated from the database. If you try to enter two strings in the textboxes, it will display on the alert window whether the operation was successful or not. The most-popular anagram list will update real-time as you keep on adding valid anagrams. The backend should be able to handle alphanumeric and blank data inputs. 
Note: The most popular anagram list is based off the value of the first string textbox.

