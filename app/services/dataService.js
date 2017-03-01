"use strict"

var dataService = angular.module("dataService", []);

dataService.factory("dataOp", ["$http", function ($http) {

        var urlBase = 'http://pb-api.herokuapp.com/bars';
        var dataOp = {};

        /*http call to get data from api */
        dataOp.getProgBarData = function () {
            return $http.get(urlBase);
        };

        return dataOp;
    }]);