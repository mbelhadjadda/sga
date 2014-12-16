angular.module("sga", ["page1", "page2", "pageNt"]).run(['$rootScope', '$location', '$window',
    function ($rootScope, $location, $window) {

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