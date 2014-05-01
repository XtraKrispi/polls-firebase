angular.module('polls').directive('debugData', function(configService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            data: '='
		},
		templateUrl: 'directive/debug-data/debug-data.html',
		link: function(scope, element, attrs, fn) {
            scope.debug = configService.getConfigValue('debug');
            scope.$on('config', function(s, config){
                if (config && angular.isDefined(config.debug)){
                    scope.debug = config.debug;
                }
            });
		}
	};
});
