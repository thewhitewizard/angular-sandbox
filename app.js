var app = angular.module('HMTest', []);

app.controller('HMCtrl', function($scope,HMService) {
  $scope.status = "HM is " + HMService.fillStatus();
})

app.service('HMService', function($rootScope) {
   this.fillStatus = function() {
        return "UP"
    };
});