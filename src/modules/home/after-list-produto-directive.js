/**
 * @author hebert ramos
 */
define(['./module', 'front'], function (module, front) {
    'use strict';

    module.directive('afterListProduto', function() {
        return function(scope) {
            if (scope.$last){
                front.init();
            }
        };
    });



});