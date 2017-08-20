/**
 * @author hebert ramos
 */
define(['./module'], function(app){


    return app.run(['$transitions', '$rootScope', '$q', '$state', '$http',
        function($transitions, $rootScope, $q, $state, $http) {

        function checkLoginHandler (){

            var deferred = $q.defer();

            if($rootScope.usuarioAtual){
                deferred.resolve();
            }else{


                $http.get('/auth/user').then(function(resp){
                    deferred.resolve();
                }, function(err){
                    deferred.reject($state.go('layout.home'));
                });

            }

            return deferred.promise;
        }

        $transitions.onBefore({ to: 'layout.checkout', from: 'layout.*' }, checkLoginHandler);

        $transitions.onBefore({ to: 'layout.checkout', from: '*' }, checkLoginHandler);

    }]);
});