import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '/imports/api/tasks.js'
import template from '/imports/components/todosList/todosList.html';

class TodosListCtrl {

    constructor($scope) {
        $scope.viewModel(this);

        this.subscribe('tasks');

        this.hideCompleted = false;

        this.helpers({
            tasks(){
                if( this.getReactively('hideCompleted') ){
                    return Tasks.find({checked: {$ne: true}}, {sort: {createdAt:-1}});
                } else{
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

    addTask(text) {
        Meteor.call('addTask', text);
        this.newTask = '';
    };
    removeTask(task){
        Meteor.call('removeTask', task._id);
    };
    setChecked(task) {
        //task.checked = !task.checked;
        Meteor.call('setChecked', task._id, task.checked)
    };
    setPrivate(task){
        Meteor.call('setPrivate', task);
    };

}

export default angular.module('todosList', [ angularMeteor ]).component('todosList',{
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: ['$scope', TodosListCtrl]
})