angular.module('polls', ['ui.utils','ngRoute','ngAnimate']);

angular.module('polls').config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);

    $routeProvider.when('/poll',{templateUrl: 'partial/poll/poll.html'});
    $routeProvider.when('/admin',{templateUrl: 'partial/admin/admin.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/poll'});
});

angular.module('polls').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

    $rootScope.debug = false;
});
