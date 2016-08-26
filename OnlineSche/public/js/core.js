var scotchEvent = angular.module('scorchEvent', []);



function mainController($scope, $http) { 
    $scope.formData =  {};

    // when landing on the page, get all event and show
        $http.get('/')
            .success(function (data) {
            $scope.events = data;
            console.log(data);

        })
            .Error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting th add form , send the text to the node API
    $scope.createEvent = function () {
        $http.post('/event', $scope.formData)
        .success(function (data) {
            $scope.formData = {}; // clear the from 
            $scope.events = data;
            console.log(data);
        })
        .Error(function (data) {
            console.log('Error: ' + data);
        });
    };
    //delete a event after checking it 

    

};