# Movie database app

A webapp to search movies. This webapp is built using React, Mui, Redux Toolkit, i18next.

## App Deployment
* The app is deployed to Vercel and can be viewed here: https://movie-login.vercel.app/

## Steps to start the app locally

* Creata a `.env.local` and assign API key to `REACT_APP_API_KEY`.
* Run command `npm install`
* Run command `npm start`. The app should be available on `localhost:3000`

##
:pushpin: Note

* The login page is at the root `/`, and the movie listing page is at `/home`
* Language support for English and Arabic is added. In order to change the language, pass `lang=en` or `lang=ar` in the query param. If no lang value is passed, the app will fallback to English.\
ex: `localhost:3000?lang=en`, `localhost:3000/home?lang=ar`
