angular.module('polls').directive('pollEdit', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            poll: '=',
            onSaved: '&'
		},
		templateUrl: 'directive/poll-edit/poll-edit.html',
		link: function(scope, element, attrs, fn) {
            scope.$watch('poll', function(val){
                scope.editingPoll = jQuery.extend(true, {}, scope.poll);
            });

            scope.pollSaved = function(){
                scope.poll = scope.editingPoll;
                scope.onSaved();
            };
		}
	};
});
