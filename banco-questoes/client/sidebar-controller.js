/*jslint nomen:true*/
(function () {
    'use strict';

    angular.module('banco-questoes').controller('SidebarController', ['$scope', '$state', function ($scope, $state) {
        $scope.helpers({
            tags: function () {
                var tags = Perguntas.find().fetch().map(function (pergunta) {
                    return pergunta.tags || [];
                });

                return _.uniq(_.flatten(tags));
            }
        });

        $scope.showSimilarBlock = function () {
            return $state.current.name === 'perguntas';
        };
    }]);
}());
