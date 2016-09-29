(function(){
	'user strict';
	
	angular
		.module('app')
		.controller('FanPurchaseController',FanPurchaseController);
	
	FanPurchaseController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','PurchaseService'];
	
	function FanPurchaseController(AuthenticatedUser,$scope,$rootScope,$route,PurchaseService){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'purchase'){
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
		
	
        $scope.purchases = {};
        $scope.invoicepurch = {};
		
		PurchaseService.getAll().$promise.then(function(purchase){
			$scope.purchases =purchase;
			
		});
        
        
        
         $scope.invoice = function(purchase){
	           $scope.invoicepurch=purchase;
         }
        
        
        
        
	}
	
})();