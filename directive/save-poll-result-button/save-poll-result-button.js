angular.module('polls').directive('savePollResultButton', function(pollService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			poll: "=",
			answer: "="
		},
		templateUrl: 'directive/save-poll-result-button/save-poll-result-button.html',
		link: function(scope, element, attrs, fn) {
			scope.save = function(){
				console.log('saved poll', scope.poll, 'answer', scope.answer);
                pollService.savePollResult(scope.poll.pollId, scope.answer);
                scope.answer = "";
			};
		}
	};
});
