angular.module("sga", ["page1", "page2", "pageNt"]).run(['$rootScope', '$location', '$window',
    function ($rootScope, $location, $window) {

        $rootScope.noPageTracking = ["pageNt"];
        $rootScope.$on('$routeChangeSuccess',
            function (event) {
                alert("zioooo");
                alert($rootScope.noPageTracking);

                alert($location.path());

                alert($rootScope.noPageTracking.indexOf("/" + $location.path()));
                if (!$window.ga) {
                    return;
                } else {
                    $window.ga('send', 'pageview', {
                        page: base + $location.path()
                    });
                };
            }
        );
            }
            ]);