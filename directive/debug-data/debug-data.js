angular.module('polls').directive('debugData', function($rootScope) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            data: '='
		},
		templateUrl: 'directive/debug-data/debug-data.html',
		link: function(scope, element, attrs, fn) {
            scope.$watch(function() { return $rootScope.debug; }, function(val){
                scope.debug = val;
            });
		}
	};
});
