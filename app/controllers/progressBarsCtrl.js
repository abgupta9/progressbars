"use strict"

app.controller("progressBarsCtrl", function ($scope, dataOp) {

        $scope.selectedBar = 0;

    /* Get number of progress bars and buttons using endpoint */
        dataOp.getProgBarData().success(function(data){
            $scope.noOfBars = data.bars;
            $scope.noOfButtons = data.buttons;
            $scope.limit = data.limit;
        }).error(function(){
            alert("Internal Server Error");
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