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
            var alternativas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];

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
                        letra: alternativas.shift(),
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


        $scope.adicionaResposta = function (){
            var respostasExistentes = $scope.pergunta.respostas;
            respostasExistentes.push({
                usuarioId: "",
                data: "",
                alternativaId: "",
                justificativa: "",
                countAvaliacoesPos: 0,
                countAvaliacoesNeg: 0,
                avaliacoes: [
                    {
                        usuarioId: "",
                        data: "",
                        tipo: "" // 1||-1
                    }
                ],
                comentarios: [
                    {
                        usuarioId: "",
                        descricao: "",
                        data: ""
                    }
                ]
            });
            
            Perguntas.Update($scope.pergunta._id, {   //corrigir
                $set:{
                    respostas: respostasExistentes
                }
            });
        };

        $scope.adicionaComentarioResposta = function (){
            
            var comentariosExistentes = $scope.pergunta.respostas.comentarios;
            comentariosExistentes.push({
                usuarioId: "",
                descricao: "",
                data: new Date()
            });
            
            Perguntas.Update($scope.pergunta._id, {   //corrigir
                $set:{
                    comentarios: comentariosExistentes
                }
            });
        };

        $scope.avaliaRespostaPositivo = function (){            
            Perguntas.Update($scope.pergunta._id, {   //corrigir
                $set:{
                    countAvaliacoesPos: $scope.pergunta.respostas.countAvaliacoesPos + 1
                }
            });
        };

        $scope.avaliaRespostaNegativo= function (){
            Perguntas.Update($scope.pergunta._id, {   //corrigir
                $set:{
                    countAvaliacoesNeg: $scope.pergunta.respostas.countAvaliacoesNeg + 1
                }
            });
        };

    }]);


    $scope.respostas = {
        usuarioId: "",
        data: "",
        alternativaId: "",
        justificativa: "",
        countAvaliacoesPos: 0,
        countAvaliacoesNeg: 0,
        avaliacoes: [
            {
                usuarioId: "",
                data: "",
                tipo: "" // 1||-1
            }
        ],
        comentarios: [
            {
                usuarioId: "",
                descricao: "",
                data: ""
            }
        ]
    };

}());
