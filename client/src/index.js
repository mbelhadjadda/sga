angular.module("sga", ["page1", "page2", "pageNt", "home"]).run(['$rootScope', '$location', '$window',
    function ($rootScope, $location, $window) {

        $rootScope.eventTrackButtonSga = function (label) {
            $window.ga('send', 'event', $location.path(), 'Click sur un button', label);
        };

        $rootScope.noPageTracking = ["/pageNt"];
        $rootScope.$on('$routeChangeSuccess',
            function (event) {
                if (!$window.ga || $rootScope.noPageTracking.indexOf($location.path()) === 0) {
                    return;
                } else {
                    $window.ga('send', 'pageview', {
                        page: $location.path()
                    });
                };
            }
        );
            }
            ]);