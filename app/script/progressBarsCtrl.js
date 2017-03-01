"use strict"

var app = angular.module("progressBars", []);

app.controller("progressBarsCtrl", function ($scope, $http) {

    $scope.selectedBar = 0;

    /* Get number of progress bars and buttons using endpoint */
    $http.get("http://pb-api.herokuapp.com/bars").then(function (response) {
        if (response.status == 200) {
            console.log(response.data);
            var data = response.data;
            $scope.noOfBars = data.bars;
            $scope.noOfButtons = data.buttons;
            $scope.limit = data.limit;

        } else {
            /* No data returned from api */
            alert("No Data returned from API");
        }
        ;
    }, function (error) {
        /* Exception from API Server */
        alert("Internal Server Error : " + error);
    });

    /* Method to Select the Progress Bar */
    $scope.selectBar = function (index) {
        $scope.selectedBar = index;
    };

    /* Method to Update the status of Progress when button pressed */
    $scope.updateProgressBar = function (value) {
        var updatedValue = $scope.noOfBars[$scope.selectedBar] + value;
        
        if (updatedValue > $scope.limit) { /* Limit the max value of Bar */ 
            $scope.noOfBars[$scope.selectedBar] = $scope.limit;
        } else if (updatedValue > 0) { /* Update the value only if it is not less than 0 */
            $scope.noOfBars[$scope.selectedBar] = $scope.noOfBars[$scope.selectedBar] + value;
        } else {/* Restrict the bar to go beyond 0 */
            $scope.noOfBars[$scope.selectedBar] = 0;
        }
    };

});