(function () {
    'use strict';

    angular.module('banco-questoes').controller('VisualisarPerguntaController', ['$scope', function ($scope) {
        $scope.abreModalResposta = function () {
            $('#modalComentaResposta').modal();
        };

        $scope.fechaModalResposta = function () {
            $('#modalComentaResposta').modal('hide');
        };

        $scope.abreModalPergunta = function () {
            $('#modalComentaPergunta').modal();
        };

        $scope.fechaModalPergunta = function () {
            $('#modalComentaPergunta').modal('hide');
        };

        $scope.novoComentarioPergunta = {};

        $scope.novoComentarioResposta = {};

        $scope.insereNovoComentarioPergunta = function (novoComentarioPergunta) {
            $scope.fechaModalPergunta();
            pergunta.comentarios.push({
                userId: '',
                descricao: novoComentarioPergunta.comentarioPergunta,
                data: Date
            });

            Perguntas.update(pergunta._id, {
                $set: {
                    comentarios: pergunta.comentarios
                }
            });
        };

        $scope.insereNovoComentarioResposta = function (novoComentarioResposta) {
            $scope.fechaModalResposta();
        };

        $scope.helpers({
            pergunta: function () {
                return Perguntas.findOne({
                    _id: new Meteor.Collection.ObjectID("56f85a4895eeb18e3ab34aa3")
                });
            }

        });

    }]);
}());
