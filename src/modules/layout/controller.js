/**
 * @author hebert ramos
 */
define(['./module'], function (app) {
    'use strict';

    return app.controller('LayoutController', ['$scope', '$state', 'categorias', 'usuarioAtual', 'CarrinhoService',
        function ($scope, $state, categorias, usuarioAtual, CarrinhoService) {

        $scope.$root.usuarioAtual = usuarioAtual;



        $scope.categorias = categorias;

        $scope.getTextoCarrinho = function(){

          var carrinho = CarrinhoService.getCarrinho();

          var texto =  carrinho.itens.length + ' ite';
            if(carrinho.itens.length > 1){
                texto += 'ns ';
            }else{
                texto += 'm ';
            }

            texto += 'no carrinho';

            return texto;
        };

        $scope.adicionarItemCarrinho = function($event, produto){
            $event.preventDefault();
            CarrinhoService.adicionarItemCarrinho(produto);
            $state.go('layout.carrinho');
        };

        $scope.$on('SET_QUANTIDADE_CARRINHO', function(ev, quantidade){
            $scope.quantidadeCarrinho = quantidade;
        });

    }]);
});