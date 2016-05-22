import app from '/client/main.js';
import Tasks from '/imports/collections/tasks.js'

app.component('todosList',{

    templateUrl: 'client/todosList/todosList.html',

    controller: class  {

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
                }
            })
        };
    }
});