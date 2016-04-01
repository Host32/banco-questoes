(function () {
    'use strict';

    angular.module('banco-questoes').controller('ExempleController', ['$scope', function ($scope) {

        $scope.insereNovaPergunta = [];
        $scope.insereNovaPergunta.push({});

        $scope.complementos = {

            comentarios: '',
            avaliaPos: 0,
            avaliaNeg: 0,
            regViews: 0
        };

        $scope.adicionaComentario = function () {


        };

        $scope.avaliaPositivo = function () {


        };

        $scope.avaliaNegativo = function () {


        };

        $scope.registraVisualizacao = function () {


        };

        $scope.insereNovaPergunta.update();

    }]);
}());