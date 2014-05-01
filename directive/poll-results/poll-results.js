angular.module('polls').directive('pollResults', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            poll: '='
		},
		templateUrl: 'directive/poll-results/poll-results.html',
		link: function(scope, element, attrs, fn) {
            scope.answerPercentage = function(answer){
                var totalNumber = _.reduce(scope.poll.answers, function(sum, a) { return sum + a.numberOfAnswers; }, 0);
                return (answer.numberOfAnswers / totalNumber * 100).toFixed(1) || 0;
            };
		}
	};
});
