/**
 * @author hebert ramos
 */
define(['./module'], function (module) {

    function createPostPromise($http, $q, url, body){

        var deferred = $q.defer();

        $http.post(url, body)
            .then(function(resp){
                deferred.resolve(resp.data);
            }, function(err){
                deferred.reject(err);
            });

        return deferred.promise;
    }

    return module.service('CheckoutService', ['$http', '$q', 'CarrinhoService', function($http, $q, CarrinhoService){

        var that = this;

        that.finalizarCompra = function(){

            return createPostPromise($http, $q, '/agrosetStoreApi/vendas/reserva', CarrinhoService.getCarrinho().itens);

        };

    }])
});