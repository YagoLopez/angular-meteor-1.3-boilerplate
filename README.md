# angular-meteor-1.3-boilerplate
Angular-Meteor template as base for new projects. Clone this repository to start a new angular-meteor 1.3 project with a simplified and clean architecture.

This template project consists of a typical "todo" app in wich users can work collaboratively creating tasks and seeing the tasks other users create in real time. CSS styles are very basic.

It implements users and permissions management, so users must registrate and login to use the application.

It has a simplified architecture and use of imports. (Compare the use of imports and angular dependencies in this code with the [official tutorial](https://www.meteor.com/tutorials/angular/creating-an-app))

It uses Web Components to create reusable and structured code. The "todos list" is implemented by menans of a web component: "<todos-list></todos-list>"

- Front-end: AngularJS 1.5.*
- Server: Meteor and NodeJS
- Database: MongoDB
- Realtime data: WebSockets
- EcmasScript 2015 standard (ES6)


## Requirements for running the application

- [Meteor](http://www.meteor.com) framework 
- Angular package for Meteor and other Meteor packages (included)