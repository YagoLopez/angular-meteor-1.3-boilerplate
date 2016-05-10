import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';

class TodosListCtrl {

    constructor($scope) {

        $scope.subscribe('tasks');

        $scope.hideCompleted = false;

        $scope.addTask = function(text) {
            Meteor.call('addTask', text);
            $scope.newTask = '';
        };
        $scope.removeTask = function(task){
            Meteor.call('removeTask', task._id);
        };
        $scope.setChecked = function(task) {
            //task.checked = !task.checked;
            Meteor.call('setChecked', task._id, task.checked)
        };
        $scope.setPrivate = function(task){
            Meteor.call('setPrivate', task);
        };

        $scope.helpers({
            tasks(){
                if( $scope.getReactively('hideCompleted')){
                    console.log('tasks completed');
                    return Tasks.find({checked: {$ne: true}}, {sort: {createdAt:-1}});
                } else{
                    console.log('tasks incompleted', Tasks.find());
                    return Tasks.find( {}, {sort: {createdAt:-1}} )
                }
            },
            currentUser(){
                console.log('currentUser: ', Meteor.user());
                return Meteor.user()
            },
            unfinishedTasks () {
                return Tasks.find({checked: {$ne: true}}).count()
            },
        })
    };


};

export default angular.module('todosList', [ angularMeteor ]).component('todosList',{
    templateUrl: 'client/todosList/todosList.html',
    controller: TodosListCtrl

})