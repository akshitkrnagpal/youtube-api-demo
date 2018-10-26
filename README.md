# Youtube API Demo

This demo of the Youtube API (v3) fetches search results from youtube of the
search item provided by you.

This project was boostrapped with [create-react-app](https://github.com/facebook/create-react-app)

## Technologies

- React
- Redux
- Flow
- FontAwesome
- Reactstrap

## How to Start

- Download and extract zip.
- Install dependencies `yarn install`
- Rename `/src/app/config.sample.js` to `/src/app/config.js`.
- Replace Youtube API Key in `config.js`
- `yarn start`

## Demo

The demo is also hosted on https://akshitkrnagpal.github.io/youtube-api-demo/

## Directory Structure

```
/src
├───app - Exports Root App Component.
│   ├───components - Exports All React Components.
│   ├───redux - Exports Redux Store and Action Functions.
│   │   ├───actions - Redux Actions.
│   │   ├───middlewares - Redux Middlewares.
│   │   ├───reducers - Redux Reducers
│   │   ├───actionType.js - Exports Redux ActionTypes.
│   │   ├───store.js - Creates Redux store using reducers and middlewares.
│   ├───config.js - Contains Youtube API key.
│   ├───fontawesome.js - Create FontAwesome library.
├───index.css - Contains Custom Styles.
├───index.js - Entry Point.
```
