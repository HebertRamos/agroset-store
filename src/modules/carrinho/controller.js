/**
 * @author hebert ramos
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('CarrinhoController', ['$scope', '$state', 'CarrinhoService', function ($scope, $state, CarrinhoService) {

        $scope.carrinho = CarrinhoService.getCarrinho();

        $scope.removerItemCarrinho =  function($event, produto){

            $event.preventDefault();

            CarrinhoService.removerItemCarrinho(produto);

            $scope.carrinho = CarrinhoService.getCarrinho();
        };

        $scope.atualizarTotalCarrinho = function(){

            CarrinhoService.atualizarTotalCarrinho();
            $scope.carrinho = CarrinhoService.getCarrinho();
        };

        $scope.irParaCheckout = function($event){
            $event.preventDefault();

            if($scope.$root.usuarioAtual){
                $state.go('layout.checkout');
            }else{
                angular.element('#login-link').click();
            }
        };

    }]);
});