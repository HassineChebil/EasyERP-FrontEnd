(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('GeneralLedgerController',GeneralLedgerController);
	
	GeneralLedgerController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','$location','GeneralLedgerService'];
	
	function GeneralLedgerController(AuthenticatedUser,$scope,$rootScope,$route,$location,GeneralLedgerService){
		
	$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'gl'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 1;
		}
		
        
			$scope.check = function(x){
			  console.log(x);
			  if(x==$scope.collapseVar)
				$scope.collapseVar = 0;
			  else
				$scope.collapseVar = x;
			};

		$scope.gls = {};
        $scope.gl = {};
       

        $scope.operations = {}
        $scope.shDetails=shDetails;
        $scope.generate=generate;
                
        GeneralLedgerService.getAll().$promise.then(function(gls){
            $scope.gls = gls;
		});
        
        function shDetails(operations)
        {
           
            $scope.operations = operations;

        }
        
        function generate()
        {
           
            GeneralLedgerService.add($scope.gl).$promise.then(function(){
            $location.path("/fangeneralledger");
		});
		
		}
        
       
    
    }
	
})();