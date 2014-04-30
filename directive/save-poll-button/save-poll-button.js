angular.module('polls').directive('savePollButton', function(pollService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            poll: '=',
            onSaved: '&'
		},
		templateUrl: 'directive/save-poll-button/save-poll-button.html',
		link: function(scope, element, attrs, fn) {
            scope.save = function(){
                console.log('saved poll', scope.poll);
                pollService.savePoll(scope.poll);
                scope.onSaved();
            };
		}
	};
});
