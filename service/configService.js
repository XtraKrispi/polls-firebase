(function(Firebase){
    angular.module('polls').factory('configService',function($rootScope) {
        var firebaseUrl = 'https://commonsensedog.firebaseio.com/poll-config/';

        var dataRef = new Firebase(firebaseUrl);
        var config = {};
        dataRef.on('value', function(snapshot){
            var configValues = snapshot.val();
            config = configValues;
            $rootScope.safeApply(function(){
                $rootScope.$broadcast('config', config);
            });
        });

        var configService = {
            getConfigValues: function(){
                return config;
            },
            getConfigValue: function(key){
                if (config && angular.isDefined(config[key])){
                    return config[key];
                }

                return null;
            },
            setDebugMode: function(val){
                var debugDataRef = new Firebase(firebaseUrl + "debug");
                debugDataRef.set(val);
            }
        };

        return configService;
    });
})(window.Firebase);
