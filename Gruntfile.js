/**
 * @author hebert ramos
 */
module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');


    var paths = {
      src: 'src',
      dist: 'dist'
    };


    var configs = {

        requirejs:{
            minifyJs: {
                options: {
                    name: 'main',
                    baseUrl: 'src',
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
                    packages: [''],
                    deps: [
                        'jquery',
                        'angular',
                        'text',
                        'bootstrap',
                        'domReady',
                        'angularLocale',
                        'angularRoute',
                        'angularResource',
                        'angularCookie',
                        './app/bootstrap'
                    ],
                    out: 'dist/main.js',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    optimize: 'uglify2',
                    uglify2: {
                        mangle: {
                            except: ['$super', '$rootScope', '$state']
                        }
                    }
                }
            }
        },
        cssmin:{
            minifyCss:{
                src:[
                    'src/assets/css/font-awesome.css',
                    'src/assets/css/bootstrap.min.css',
                    'src/assets/css/animate.min.css',
                    'src/assets/css/owl.carousel.css',
                    'src/assets/css/owl.theme.css',
                    'src/assets/css/style.default.css'
                ],
                dest: 'src/assets/css/main.css'
            }
        },
        copy:{
            dist: {
                expand: true,
                cwd: 'src',
                src: [
                    'index.html',
                    'vendor/requirejs/**',
                    'assets/css/main.css',
                    'assets/css/fonts/**',
                    'assets/js/respond.min.js',
                    'assets/img/**'
                ],
                dest:'dist'
            }
        }

    };

    grunt.initConfig(configs);


    grunt.registerTask('minify', ['requirejs', 'copy']);
};