/**
 * @author hebert ramos
 */
define(['./module', 'front'], function (module, front) {
    'use strict';

    function todasCaterorias(categorias) {

        var todasCategorias = angular.copy(categorias);

        categorias.map(function(cat){
            cat.filhas.forEach(function(filha){
                todasCategorias.push(filha);
            });

        });

        return todasCategorias;
    }

    function buscaCateoriaAtual($scope, $state){


        var todasCategoriass = todasCaterorias($scope.$parent.categorias);
        var index = todasCategoriass.map(function(cat){
            return cat.id
        }).indexOf(parseInt($state.params.id));


        return todasCategoriass[index];
    }

    module.controller('CategoriaController', ['$scope', '$state', 'produtos', function ($scope, $state, produtos) {


        $scope.produtos = produtos;

        $scope.categoriaAtual = buscaCateoriaAtual($scope, $state);


        $scope.produtos = produtos;

    }]);
});