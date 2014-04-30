angular.module('polls').directive('pollsList', function(pollService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/polls-list/polls-list.html',
		link: function(scope, element, attrs, fn) {
			scope.$on('polls', function(s, polls){
                scope.polls = polls;
            });
		}
	};
});
