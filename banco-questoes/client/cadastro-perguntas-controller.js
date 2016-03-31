/*jslint nomen:true*/
(function () {
    'use strict';

    angular.module('banco-questoes').controller('CadastroPerguntasController', ['$scope', '$log', function ($scope, $log) {

        $scope.pergunta = {
            enuciado: '',
            alternativas: [{}, {}],
            tags: ''
        };

        $scope.addAlternativa = function () {
            $scope.pergunta.alternativas.push({});
        };

        $scope.removeAlternativa = function ($index) {
            $scope.pergunta.alternativas.splice($index, 1);
        };

        $scope.fechaModal = function () {
            $('#myModal').modal('hide');
        };

        $scope.insereNovaPergunta = function () {
            $scope.fechaModal();
            Perguntas.insert({
                usuarioId: '',
                data: new Date(),
                pergunta: $scope.pergunta.enuciado,
                tags: _.uniq(_.filter($scope.pergunta.tags.split(",").map(function (tag) {
                    return tag.trim().toLowerCase();
                }), function (tag) {
                    return tag.length > 0;
                })),
                countAvaliacoesPos: 0,
                countAvaliacoesNeg: 0,
                countVisualizacoes: 0,
                alternativas: $scope.pergunta.alternativas.map(function (alternativa) {
                    return {
                        texto: alternativa.texto
                    };
                }),
                respostas: [],
                comentarios: [],
                avaliacoes: []
            }, function (err) {
                if (err) {
                    $log.error(err);
                    $('#modalErro').modal();
                } else {
                    $('#modalSucesso').modal();
                }
            });
        };

    }]);
}());
