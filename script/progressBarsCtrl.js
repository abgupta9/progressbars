"use strict"

var app = angular.module("progressBars", []);

app.controller("progressBarsCtrl", function ($scope, $http) {

    $scope.selectedBar = 0;

    $http.get("http://pb-api.herokuapp.com/bars").then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            var data = response.data;
            $scope.noOfBars = data.bars;
            $scope.noOfButtons = data.buttons;
            $scope.limit = data.limit;

        } else {
            alert("You are not connected to the internet, please connect to internet !");
        }
        ;
    }, function (error) {
        alert("Internal Server Error : " + error);
    });

    $scope.selectBar = function (index) {
        $scope.selectedBar = index;
    };

    $scope.updateProgressBar = function (value) {
        var updatedValue = $scope.noOfBars[$scope.selectedBar] + value;
        if (updatedValue > $scope.limit) {
            $scope.noOfBars[$scope.selectedBar] = $scope.limit;
        } else if (updatedValue > 0) {
            $scope.noOfBars[$scope.selectedBar] = $scope.noOfBars[$scope.selectedBar] + value;
        } else {
            $scope.noOfBars[$scope.selectedBar] = 0;
        }
    };

});