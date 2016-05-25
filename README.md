# angular-meteor-1.3-boilerplate
Angular-Meteor template as base for new projects.

Clone this repository to start a new angular-meteor 1.3 project with a simplified and clean architecture.

> Using Meteor Framework in less than 100 lines of code is posible to create an application totally reactive, multiuser and with real time capabilities.
>

This template project consists of a typical "*todo*" app in wich users can work collaboratively creating tasks and seeing tasks other users create in real time. CSS styles are very basic.

It implements *users* and *permissions management*, so users must registrate and login to use the application.

The **architecture** and **use of imports** has been simplified for efficiency. (Compare the use of imports and angular dependencies in this code with the [official tutorial](https://www.meteor.com/tutorials/angular/creating-an-app)):

The application uses [Component Based Software Engineering](https://en.wikipedia.org/wiki/Component-based_software_engineering) (aka [Web Components](https://en.wikipedia.org/wiki/Web_Components)) to create reusable and structured code. The "todos list" is implemented by means of a web component: `<todos-list></todos-list>`



## Architecture:

- **Client side code** is located in `/client/components/` directory (*.html templates, *.js components*, etc.)

- **Code shared by client and server** is located in the `/imports/` directory. (For example, *collections*)
- **Server side code** is located in `/server/` directory (For example, *Meteor methods*)


([Here you can get a more complete project with this simplified architecture](https://github.com/YagoLopez/angular-meteor-socially))



## Stack

- **Front-end**: AngularJS 1.5.5 and EcmasScript 2015 standard (ES6)

- **Back-end**: Meteor 1.3 and NodeJS

- **Database**: MongoDB

- **Realtime data**: WebSockets




## Demo

The app is running [HERE](https://meteortestyls.herokuapp.com/) in a Heroku dyno, therefore it is not a forever-running process. After a period of time the process is shutdown and only when is visited by an user is launched again, so it can take some time to start.

You can login as username: "usuario1" and password: "usuario1" or create a new account

>
>For testing the real time capabilities, open another browser version in incognito mode. Changes made by one user in the data are inmediately propagated to the rest of users (for example if an user delete a public task). Keep in mind privated taks are only visible to his owners.
>




## Requirements for cloning and running the application

- [Meteor](http://www.meteor.com) framework version  1.3+
- Angular package for Meteor and other Meteor packages (included)