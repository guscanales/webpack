export default (ngModule) => {
    ngModule
        .controller('UserCtrl', ['$scope', '$location', 'Noder', 'LoopBackAuth', '$timeout', '$mdSidenav', '$mdUtil', 'Sidebar',
            function($scope, $location, Noder, LoopBackAuth, $timeout, $mdSidenav, $mdUtil, Sidebar) {
                $scope.Sidebar = Sidebar;
                $scope.auth = LoopBackAuth;
                console.log($scope.auth)
                    //* auth.currentUserId **/
                $scope.error = {};
                $scope.logout = function() {
                    Noder.logout().$promise.then(function(data) {
                        $location.path('/');
                    });
                };
                $scope.login = function() {
                    Noder.login({
                        username: $scope.username,
                        password: $scope.password
                    }, function(data) {
                        Noder.prototype$roles({
                            id: data.userId
                        }, function(data) {
                            $scope.auth.roles = data.roles
                            $location.path('/');
                        })
                    }, function(data) {
                        if (data.data.error.code == "LOGIN_FAILED") {
                            $scope.error.notfound = true;
                        }
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
