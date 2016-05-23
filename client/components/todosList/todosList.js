import app from '/client/main.js';
import Tasks from '/imports/collections/tasks.js'

app.component('todosList',{

    templateUrl: 'client/components/todosList/todosList.html',

    controller: class  {

        constructor($scope) {
            'ngInject';
            $scope.subscribe('tasks');

            $scope.hideCompleted = false;

            $scope.addTask = function(text) {
                Meteor.call('addTask', text);
                console.log('adding task', text);
                $scope.newTask = '';
            };
            $scope.removeTask = function(task){
                Meteor.call('removeTask', task._id);
            };
            $scope.setChecked = function(task) {
                Meteor.call('setChecked', task._id, task.checked)
            };
            $scope.setPrivate = function(task){
                Meteor.call('setPrivate', task);
            };

            $scope.helpers({
                tasks(){
                    if( $scope.getReactively('hideCompleted')){
                        return Tasks.find({checked: {$ne: true}}, {sort: {createdAt:-1}});
                    } else{
                        return Tasks.find( {}, {sort: {createdAt:-1}} )
                    }
                },
                currentUser(){
                    return Meteor.user()
                },
                unfinishedTasks () {
                    return Tasks.find({checked: {$ne: true}}).count()
                }
            })
        };
    }
});