# It-Goes-Like-This

## Overview

For project #3, I created a MERN full-stack application.

Have you ever got a song stuck in your head but you could not remember the title to that song? As much music we try to keep stored in our brain, it isn't possible to remember everything. It Goes Like This is an app that allows users to search for a song they are trying to conjure up. 

In order to use the app, a user has to log in/sign up to Spotify using oAuth. Once logged in the user is redirected to the home page where they can now go to the search page to type in the lyrics. The search triggers a Genius API call to populate the results. If the user sees the song they recognize, they can click the song which triggers a Spotify API call to show a list of playable tracks.

Even though this is suppose to be a MERN stack application, most of the back end is not being used. I attempted to put full CRUD on my SearchHistory model to try to utilize the back end.

##### Live Site: https://it-goes-like-this.herokuapp.com/

## Technologies Used

* Mongoose/MongoDB, Express, React, Node.js
* Spotify and Genius API
* BootStrap
* Project Planning - [Trello](https://trello.com/b/1iYwcRE9/wdi-project-3-it-goes-like-this#)
* Wireframes - [Figma](https://www.figma.com/file/aLmUqoFOczHxskSaBqM4cSNR/It-Goes-Like-This?node-id=0%3A1)
* ERD - [LucidChart](https://www.lucidchart.com/invitations/accept/b96ef709-87b0-432b-8a1c-f6ef3702c3b1)
* Visual Studio Code
* MondgoDB Compass
* Postman

## Features

* Log in to Spotify through oAuth
* Linked Genius API call to Spotify API call to pull tracks

## Future Development

* Have the song play through my app instead of Spotify
* Save searched tracks to a Spotify playlist
* Narrow down the list of songs pulled from Spotify
* Return a single song instead of an array
* Mobile?
* More styling