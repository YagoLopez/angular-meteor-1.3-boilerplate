import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '/imports/components/todosList/todosList.js';
import '/imports/startup/accounts-config.js';

angular.module('simple-todos', [ angularMeteor, todosList.name, 'accounts.ui' ]);