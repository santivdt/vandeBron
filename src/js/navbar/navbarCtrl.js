angular.module('vandeBron')
    .controller('navbarCtrl', function ($scope, $timeout, $mdSidenav, $log) {

        //function to close sidenav
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("Menu closed");
                });
        };


        //check if menu is open
        $scope.isOpenLeft = function(){
            return $mdSidenav('left').isOpen();
        };

        //function to open sidenav
        function buildToggler(navID) {
            return function() {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        $log.debug("toggle " + navID + " is done");
                    });
            }
        }

        $scope.toggleLeft = buildToggler('left');

    });