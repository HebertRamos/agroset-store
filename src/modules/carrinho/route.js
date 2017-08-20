/**
 * @author hebert ramos
 */
define(['./module', 'text!./view.html'], function (app, view) {


    'use strict';
    return app.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('layout.carrinho', {

            url: '^/carrinho',
            template: view,
            controller: 'CarrinhoController'
        });

    }]);
});