angular.module('polls').directive('pollAnswersEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            answers: '='
		},
		templateUrl: 'directive/poll-answers-edit/poll-answers-edit.html',
		link: function(scope, element, attrs, fn) {
            scope.addAnswer = function(){
                scope.answers.push({text: scope.newAnswer, numberOfAnswers: 0});
                scope.newAnswer = "";
            };

            scope.removeAnswer = function(answer){
                scope.answers = _.without(scope.answers, answer);
            };
		}
	};
});
