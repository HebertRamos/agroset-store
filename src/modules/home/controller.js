/**
 * @author hebert ramos
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('HomeController', ['$scope', 'produtos', function ($scope, produtos) {


        $scope.produtos = produtos;

    }]);
});