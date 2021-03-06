export default (ngModule) => {
    ngModule
        .controller('AuthCtrl', ['$scope', '$location', 'Noder', 'LoopBackAuth', '$timeout', '$mdSidenav', '$mdUtil', 'Sidebar',
            function($scope, $location, Noder, LoopBackAuth, $timeout, $mdSidenav, $mdUtil, Sidebar) {
                $scope.Sidebar = Sidebar;
                $scope.auth = LoopBackAuth;
                //* auth.currentUserId **/
                $scope.error = {};
                 $scope.logout = function() {
                    Noder.logout().$promise.then(function(data) {
                        $location.path('/');
                    });
                };
                var buildToggler = function(navId) {
                    var debounceFn = $mdUtil.debounce(function() {
                        $mdSidenav(navId)
                            .toggle()
                            .then(function() {});
                    }, 300);
                    return debounceFn;
                };
                $scope.toggleSideBar = buildToggler('left');
            }
        ]);
};
