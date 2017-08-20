/**
 * @author hebert ramos
 */
define(['./module'], function (app) {
    'use strict';

    function createGetPromise($http, $q, url){

        var deferred = $q.defer();

        $http.get(url)
            .then(function(resp){
                deferred.resolve(resp.data);
            }, function(err){
                deferred.reject(err);
            });

        return deferred.promise;
    }

    function buscarCategoriasFn($http, $q){

        return function(){
            return createGetPromise($http, $q, '/public/agrosetStoreApi/categorias');
        }
    }

    function buscarProdutosPorCategoriaFn($http, $q){

        return function(idCategoria){
            return createGetPromise($http, $q, '/public/agrosetStoreApi/categorias/'+idCategoria+'/produtos');
        }
    }

    function buscarTodosProdutosFn($http, $q){

        return function(){
            return createGetPromise($http, $q, '/public/agrosetStoreApi/produtos');
        }
    }

    return app.service('ProdutoService', ['$http', '$q', function($http, $q){


        var that = this;

        that.buscarCategorias = buscarCategoriasFn($http, $q);

        that.buscarProdutosPorCategoria = buscarProdutosPorCategoriaFn($http, $q);

        that.buscarTodosProdutos = buscarTodosProdutosFn($http, $q);

    }]);
});