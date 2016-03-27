(function () {
    'use strict';

    angular.module('banco-questoes').controller('CadastroPerguntas', ['$scope', function ($scope) {

        $scope.pergunta = {
            enuciado: '',
            alternativas: [{}, {}],
            tags: ''
        };

        $scope.addAlternativa = function () {
            $scope.pergunta.alternativas.push({});
        };

        $scope.remove = function (item) {
            var index = $scope.pergunta.alternativas.indexOf(item);
            $scope.pergunta.alternativas.splice(index, 1);
        };

        $scope.insereNovaPergunta = function (novaPergunta) {
            Crimes.insert({
                usuarioId: '',
                data: new Date(),
                pergunta: novaPergunta.pergunta.enuciado,
                tags: novaPergunta.pergunta.tags.split(","),
                countAvaliacoesPos: 0,
                countAvaliacoesNeg: 0,
                countVisualizacoes: 0,
                alternativas: novaPergunta.pergunta.alternativas,
                respostas: [],
                comentarios: []
            });
        };

    }]);
}());