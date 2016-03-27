(function () {
    'use strict';

    angular.module('banco-questoes').controller('HomeController', ['$scope', function ($scope) {
        $scope.abaSelecionada = 'destaque';

        $scope.selectTab = function (tab) {
            $scope.abaSelecionada = tab;
        };

        $scope.perguntas = {
            destaque: [
                {
                    pergunta: 'Duas minas m1 e m2 produzem 40 e 60 toneladas de minério de ferro respectivamente que são distribuídos para dois estoques intermediários s1 e s2. A planta de produção p tem uma demanda de 100 toneladas de minério de ferro. As vias de transporte têm limites de toneladas de minério de ferro que podem ser transportadas e custos de transporte por tonelada de minério.A direção da empresa quer determinar a transportação que minimiza os custos.',
                    respostas: [],
                    tags: ['matematica', 'computacao']
                }, {
                    pergunta: 'Uma empresa mineradora possui 2 jazidas diferentes que produzem um dado tipo de minério. Depois do minério ser triturado ele é classificado em 3 classes: superior, médio e inferior. Existe uma demanda para cada classe de minério. A empresa possui uma fábrica de beneficiamento com capacidade para 12t da classe superior, 8t da média e 24t da inferior por semana. O custo diário da jazida 1 é de 900un e da jazida 2 é de 720un. Durante um dia de operação a jazida 1 produz 6t, 2t e 4t respectivamente do minério superior, médio e inferior, e a jazida 2 produz 2t, 2t e 12t respectivamente do minério superior, médio e inferior. Quantos dias por semana deve operar cada jazida de forma mais econômica possível?',
                    respostas: ['', '']
                }, {
                    pergunta: 'teste3',
                    respostas: ['', ''],
                    tags: ['matematica', 'portugues']
                }
            ],
            frequentes: [
                {
                    pergunta: 'aaaa',
                    respostas: ['', '', '', '']
                }, {
                    pergunta: 'testbbbbbe2',
                    respostas: ['', '', '', '']
                }, {
                    pergunta: 'ccccc',
                    respostas: ['', '', ''],
                    tags: ['matematica', 'portugues']
                }
            ],
            emAberto: [
                {
                    pergunta: 'asdasd',
                    respostas: ['', '', '', '', '', '', '']
                }, {
                    pergunta: 'fffffffffffffff',
                    respostas: ['']
                }, {
                    pergunta: 'sdasd',
                    respostas: ['', '', '']
                }
            ]
        };
    }]);
}());
