import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '/client/todosList/todosList.js';
import '/client/startup/accounts-config.js';

angular.module('simple-todos', [ angularMeteor, todosList.name, 'accounts.ui' ]);
