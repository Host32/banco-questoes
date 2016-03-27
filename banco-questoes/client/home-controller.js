(function () {
    'use strict';

    angular.module('banco-questoes').controller('HomeController', ['$scope', function ($scope) {
        $scope.abaSelecionada = 'destaque';

        $scope.selectTab = function (tab) {
            $scope.abaSelecionada = tab;
        };

        $scope.helpers({
            perguntasDestaque: function () {
                return Perguntas.find({
                    $where: '(this.countAvaliacoesPos - this.countAvaliacoesNeg) / this.avaliacoes.length > 0.5 && this.avaliacoes.length > 5'
                }, {
                    limit: 20
                });
            },
            perguntasFrequentes: function () {
                return Perguntas.find({}, {
                    sort: {
                        countVisualizacoes: -1
                    },
                    limt: 20
                });
            },
            perguntasEmAberto: function () {
                return Perguntas.find({
                    respostas: {
                        $size: 0
                    }
                }, {
                    limit: 20
                });
            }
        });

        $scope.perguntas = {
            destaque: $scope.perguntasDestaque,
            frequentes: $scope.perguntasFrequentes,
            emAberto: $scope.perguntasEmAberto
        };
    }]);
}());
