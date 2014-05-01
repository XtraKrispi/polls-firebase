angular.module('polls').directive('debugToggle', function($rootScope, configService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/debug-toggle/debug-toggle.html',
		link: function(scope, element, attrs, fn) {
      scope.debug = $rootScope.debug;

      scope.$watch(function() { return $rootScope.debug; }, function(val){
        scope.debug = val;
      });

      scope.debugChanged = function(){
        configService.setDebugMode(scope.debug);
      };
    }
  };
});
