angular.module('polls').directive('pollView', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			poll: '='
		},
		templateUrl: 'directive/poll-view/poll-view.html',
		link: function(scope, element, attrs, fn) {
		}
	};
});
