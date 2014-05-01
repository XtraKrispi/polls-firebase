angular.module('polls').directive('debugToggle', function(configService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/debug-toggle/debug-toggle.html',
		link: function(scope, element, attrs, fn) {
            scope.debug = configService.getConfigValue('debug');
            scope.$on('config', function(s, config){
                if (config && angular.isDefined(config.debug)){
                    scope.debug = config.debug;
                }
            });

            scope.debugChanged = function(){
                configService.setDebugMode(scope.debug);
            };
        }
    };
});
