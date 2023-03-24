# GameOn

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application is a Games Catalog where users can browse different games, add new ones, like and comment on games. This app is developed for the SoftUni's React exam in April 2023.

## Available Scripts

To start the server: 
- Navigate to server folder and run `npm start`
- Server runs on port 3005.

To start the app: 
- Navigate to client folder and run `npm start`
- Client runs on port 3000.

## Public Part
Guest users have access to the Home Page, the Team page and the Games Catalog, however they access the pages in read-only mode.
They can also subscribe for the site's newsletter.

Guest users can login or register using the respective pages. 

## Private Part
Authenticated users can access all public pages, as well as are able to create new games in the database, comment on games, and like games.

Owners of particular game can Edit it or Delete it. 

## Back End
The app uses MongoDB and Mongoose and communicates with the database through REST API calls.

