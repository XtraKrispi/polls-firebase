angular.module('polls').directive('mainMenu', function($location) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/main-menu/main-menu.html',
		link: function(scope, element, attrs, fn) {
            scope.isActive = function(path){
                return $location.path() === path;
            };
		}
	};
});
