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

## Frontend Installation

### Mac OS X (iOS)

*Note: at the time these instructions were written, the version of React Native was v0.30*

For iOS on Mac OS X, first make sure you have **Xcode** in your system. You will then need the **Chrome** browser for debugging.

Then, install **node** and **watchman** using Brew:

```
brew install node
brew install watchman
```

Finally, install React Native:

```
npm install -g react-native-cli
```

You can run the app after changing to its directory and running:

```
react-native run-ios
```

Note the entry-point of the app is in the file `index.ios.js`.
