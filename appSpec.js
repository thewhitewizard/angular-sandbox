describe('Testing HM', function() {
  var $scope = null;
  var HMCtrl = null;
  var HMService;


  beforeEach(module('HMTest'));

  beforeEach(inject(function($rootScope, $controller,_HMService_) {
    $scope = $rootScope.$new();
   
    HMService = _HMService_;
    
    HMCtrl = $controller('HMCtrl', {
      $scope: $scope,
      HMService : HMService
    });
  }));

  it('Expected HM is UP', function() {
    expect($scope.status).toEqual('HM is UP');
  });


  it('Expected from service : UP', function() {
    expect(HMService.fillStatus()).toEqual('UP');
  }); 
 
});