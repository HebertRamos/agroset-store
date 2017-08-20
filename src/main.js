require.config({

    // alias libraries paths
    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        'domReady': 'vendor/requirejs-domready/domReady',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'angular': 'vendor/angular/angular',
        'angularLocale': 'vendor/angular-i18n/angular-locale_pt-br',
        'angularRoute': 'vendor/angular-ui-router/release/angular-ui-router',
        'angularResource': "vendor/angular-resource/angular-resource",
        'angularCookie': 'vendor/angular-cookies/angular-cookies',
        'text': 'vendor/text/text',

        'jqueryCookie' : 'assets/js/jquery.cookie',
        'waypoints': 'assets/js/waypoints.min',
        'modernizr': 'assets/js/modernizr',
        'bootstrapHoverDropdown': 'assets/js/bootstrap-hover-dropdown',
        'owlCarouselMin': 'assets/js/owl.carousel.min',
        'front': 'assets/js/front'
    },

    // angular does not support AMD out of the box, put it in a shim
    shim: {
        jquery: {
            exports: '$'
        },
        bootstrap: {
            deps: ['jquery']
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angularRoute': {
            exports: 'angular',
            deps: ['angular']
        },
        'angularLocale': {
            exports: 'angular',
            deps: ['angular']
        },
        'angularResource': {
            exports: 'angular',
            deps: ['angular']
        },
        'angularCookie': {
            exports: 'angular',
            deps: ['angular']
        },
        jqueryCookie: {
            deps: ['jquery']
        },
        waypoints: {
            deps: ['jquery']
        },
        bootstrapHoverDropdown: {
            deps: ['jquery', 'bootstrap']
        },
        owlCarouselMin: {
            deps: ['jquery']
        },
        front: {
            deps: ['jquery', 'jqueryCookie']
        }
    },

    // kick start application
    deps: ['./app/bootstrap']
});