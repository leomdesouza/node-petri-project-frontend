
angular.module('userService', [])

.factory('User', function($http){

    var api_host = 'https://connectingworldproject.herokuapp.com';

    var userFactory = {};

    userFactory.create = function(userData){
        return $http.post(api_host + '/clientActions/SignUp', userData);
    };

    userFactory.all = function(){
        return $http.get(api_host + '/clientActions/seeUsers');
    };

    return userFactory;
});