# The React-Chat

This is a simple messenger application built with [express](http://expressjs.com), [react](https://facebook.github.io/react/) and [nodejs](https://nodejs.org/). It implements the client side logic that is able to connect with a web server to broadcast chat messages to other clients.

### Online at Heroku

You can use the application online, ready for production, at [https://luthier-chat.herokuapp.com](https://luthier-chat.herokuapp.com). Open multiple pages and see the chat in action.

### The React-chat-server

The server side logic of this app is developed at [https://github.com/Trakton/react-chat-server](https://github.com/Trakton/react-chat-server). Check this repository in order to understand the whole application!

### Running in development

To build this application and test it locally, first, get the webserver running by following the tutorial at [https://github.com/Trakton/react-chat-server](https://github.com/Trakton/react-chat-server).

Then, when the webserver is listening, you can:

1. Clone this repository and 'cd' into it
1. run 'npm install' 
1. run 'npm start'

This will build a webserver at [localhost:3001](localhost:3001) to serve react files to land the app. You can now open multiple browser pages using the same link and port to connect multiple clients and see how the chat behaves!


### Development

This project is part of a personal desire to learn new technologies, and apply them in a real application fully functional and online in production mode. Here is a summary of the technologies learned and included in the app:

* [Express](https://expressjs.com)
* [Nodejs](https://nodejs.org)
* [React](https://facebook.github.io/react/)
* [React-router](https://github.com/ReactTraining/react-router)
* [Redux](http://redux.js.org/)
* [Socket-io](https://socket.io/)
 
