import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Accounts } from 'meteor/accounts-base'

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

var app = angular.module('simple-todos', [ angularMeteor, 'accounts.ui' ]);

export default app;