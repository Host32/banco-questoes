/*jslint nomen:true*/
(function () {
    'use strict';

    angular.module('banco-questoes').controller('VisualisarPerguntaController', ['$scope', '$stateParams', function ($scope, $stateParams) {

        $scope.userImage = function (comentario) {
            return "";

            //            Gravatar.imageUrl('ivan.i.n@hotmail.com', {
            //                size: 32
            //            });
        };

        $scope.helpers({
            pergunta: function () {
                return Perguntas.findOne({
                    _id: $stateParams.id
                });
            }

        });

    }]);
}());
