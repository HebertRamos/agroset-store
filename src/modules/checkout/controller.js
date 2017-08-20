/**
 * @author hebert ramos
 */
define(['./module'], function (module) {
    'use strict';

    module.controller('CheckoutController', ['$scope', '$state', 'CarrinhoService', 'CheckoutService', function ($scope, $state, CarrinhoService, CheckoutService) {

        $scope.carrinho = CarrinhoService.getCarrinho();

        $scope.finalizarCompra = function(){

            CheckoutService.finalizarCompra()
                .then(function(resp){

                    alert('compra com código '+ resp.id +' realiza com suesso!');

                    CarrinhoService.limparCarrinho();
                    $state.go('layout.home');
                })
                .catch(function(err){
                    alert('erro');
                })
        }
    }]);
});