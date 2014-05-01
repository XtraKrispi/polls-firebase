angular.module('polls').directive('chat', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/chat/chat.html',
		link: function(scope, element, attrs, fn) {
		}
	};
});
