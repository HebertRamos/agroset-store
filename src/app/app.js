/**
 * @author hebert ramos
 */
define([
    'angular',
    '../modules/layout/main',
    '../modules/home/main',
    '../modules/categoria/main',
    '../modules/carrinho/main',
    '../modules/checkout/main',
    'angularRoute',
    'angularLocale',
    'angularResource',
    'angularCookie'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'ui.router', 'ngResource', 'ngCookies',
        'app.layout',
        'app.home',
        'app.categoria',
        'app.carrinho',
        'app.checkout'
    ]).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]);

});