# angular-meteor-1.3-boilerplate
Angular-Meteor template as base for new projects. Clone this repository to start a new angular-meteor 1.3 project with a simplified and clean architecture.

> Using Meteor Framework in less than 100 lines of code is posible to create an application totally reactive, multiuser and with real time capabilities.
>

This template project consists of a typical "*todo*" app in wich users can work collaboratively creating tasks and seeing the tasks other users create in real time. CSS styles are very basic.

It implements users and permissions management, so users must registrate and login to use the application.

The architecture and use of imports has been simplified for efficiency. (Compare the use of imports and angular dependencies in this code with the [official tutorial](https://www.meteor.com/tutorials/angular/creating-an-app))

The application uses [web components](https://en.wikipedia.org/wiki/Web_Components) to create reusable and structured code. The "todos list" is implemented by means of a web component: `<todos-list></todos-list>`




## Stack

- Front-end: AngularJS 1.5.5 and EcmasScript 2015 standard (ES6)
- Server: Meteor 1.3 and NodeJS
- Database: MongoDB
- Realtime data: WebSockets





## Requirements for running the application

- [Meteor](http://www.meteor.com) framework version  >= 1.3
- Angular package for Meteor and other Meteor packages (included)