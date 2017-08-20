/**
 * @author hebert ramos
 */
define(['./module', 'text!./view.html'], function (app, view) {


    'use strict';
    return app.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('layout.categoria', {

            url: '^/categoria/:id',
            template: view,
            controller: 'CategoriaController',
            resolve:{
                produtos:['ProdutoService', '$stateParams', function(ProdutoService, $stateParams){
                    return ProdutoService.buscarProdutosPorCategoria($stateParams.id);
                }]
            }
        });

    }]);
});