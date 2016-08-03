# snowschoolers-react-demo

This repo is for the initial prototype of the Snow Schoolers mobile application built with React Native.

## Backend Installation

There is a fake JSON API using the json-server npm module. To install it, use:

```
npm install -g json-server
```

Then, **cd** to the `json/` directory and type the following command to run the json db server:

```
json-server --watch db.json
```

By default, the API will be served at <http://localhost:3000>

The fake API follows RESTful standards, so you can manipulate it using RESTful routes.
