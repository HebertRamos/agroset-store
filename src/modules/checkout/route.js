/**
 * @author hebert ramos
 */
define(['./module', 'text!./view.html'], function (app, view) {


    'use strict';
    return app.config(['$stateProvider', function ($stateProvider) {

        $stateProvider.state('layout.checkout', {

            url: '^/checkout',
            template: view,
            controller: 'CheckoutController'

        });

    }]);
});