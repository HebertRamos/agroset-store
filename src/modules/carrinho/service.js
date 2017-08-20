/**
 * @author hebert ramos
 */
define(['./module'], function (app) {
    'use strict';

    function criarItemVenda(produto) {
        return {
            produtoVenda: produto,
            quantidade: 1
        };
    }

    function getIndexItemVendaCarrinho(carrinho, produto) {

        return carrinho.itens.map(function (itemVenda) {
            return itemVenda.produtoVenda.id;
        }).indexOf(produto.id);
    }

    function buscarItemVendaCarrinho(carrinho, produto) {

        var index = getIndexItemVendaCarrinho(carrinho, produto);

        return index !== -1 ? carrinho.itens[index] : null;
    }

    function isProdutoNoCarrinho(itemVenda) {
        return itemVenda !== null && itemVenda !== undefined;
    }

    function adicionarItemCarrinhoFn($cookieStore, carrinho) {

        return function (produto) {

            var itemVenda = buscarItemVendaCarrinho(carrinho, produto);
            if (isProdutoNoCarrinho(itemVenda)) {
                itemVenda.quantidade++;
            } else {
                carrinho.itens.push(criarItemVenda(produto));
            }

            calcularTotalCarrinho(carrinho);
            setCarrinhoCookie($cookieStore, carrinho);
        };
    }

    function removerItemCarrinhoFn($cookieStore, carrinho) {

        return function (produto) {

            var index = getIndexItemVendaCarrinho(carrinho, produto);
            carrinho.itens.splice(index, 1);

            calcularTotalCarrinho(carrinho);
            setCarrinhoCookie($cookieStore, carrinho);
        }
    }

    function calcularTotalCarrinho(carrinho) {

        carrinho.total = 0;
        carrinho.itens.forEach(function (itemVenda) {
            carrinho.total += (itemVenda.quantidade * itemVenda.produtoVenda.preco);
        });
    }

    function setNovoCarrinhoCookie($cookieStore) {
        setCarrinhoCookie($cookieStore, {itens: [], total: 0});
    }

    function initCarrinho($cookieStore, that) {

        if (!$cookieStore.get('carrinhoAgroSet')) {
            setNovoCarrinhoCookie($cookieStore);
        }

        that.carrinho = $cookieStore.get('carrinhoAgroSet');
        calcularTotalCarrinho(that.carrinho);
    }

    function atualizarTotalCarrinhoFn($cookieStore, carrinho) {
        return function () {
            calcularTotalCarrinho(carrinho);
            setCarrinhoCookie($cookieStore, carrinho);
        };
    }

    function setCarrinhoCookie($cookieStore, carrinho) {
        $cookieStore.put('carrinhoAgroSet', carrinho);
    }

    function limparCarrinhoFn($cookieStore, that) {

        return function () {

            setNovoCarrinhoCookie($cookieStore);
            that.carrinho = $cookieStore.get('carrinhoAgroSet');

        };
    }

    return app.service('CarrinhoService', ['$cookieStore', function ($cookieStore) {

        var that = this;

        initCarrinho($cookieStore, that);

        that.adicionarItemCarrinho = adicionarItemCarrinhoFn($cookieStore, that.carrinho);

        that.removerItemCarrinho = removerItemCarrinhoFn($cookieStore, that.carrinho);

        that.atualizarTotalCarrinho = atualizarTotalCarrinhoFn($cookieStore, that.carrinho);

        that.getCarrinho = function () {
            return that.carrinho;
        };

        that.limparCarrinho = limparCarrinhoFn($cookieStore, that);

    }]);
});