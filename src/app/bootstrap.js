/**
 * @author hebert ramos
 */

define([
    'require',
    'bootstrap',
    'angular',
    './app',
    'jqueryCookie',
    'waypoints',
    'modernizr',
    'bootstrapHoverDropdown',
    'owlCarouselMin'
], function (require, bootstrap, ng, app) {
    'use strict';

    require(['domReady!'], function (document) {

        ng.bootstrap(document, ['app']);

    });
});
