angular.module('polls').directive('pollsAdmin', function(pollService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/polls-admin/polls-admin.html',
		link: function(scope, element, attrs, fn) {
            scope.polls = pollService.getPolls();
            scope.$on('polls', function(s, polls){
                scope.polls = polls;
            });

            scope.newPoll = {pollId: 0, answers:[]};

            scope.newPollSaved = function(){
                scope.newPoll = {pollId: 0, answers:[]};
            };
		}
	};
});
