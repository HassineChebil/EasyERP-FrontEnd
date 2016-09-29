(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('SaleController',SaleController);
	
	SaleController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','$location','SaleService'];
	
	function SaleController(AuthenticatedUser,$scope,$rootScope,$route,$location,SaleService){
		
	$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'sale'){
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

		$scope.sales = {};
       
 
   
        $scope.buyers = {}
        $scope.details = {}
         $scope.invoicesale = {};
     
        $scope.shDetails=shDetails;
        $scope.invoice=invoice;      
       
        
		
		SaleService.getAll().$promise.then(function(Sales){
            $scope.sales = Sales;
		});
        
        function suivant()
        {
            $scope.sale.financialEmployee = {};
            $scope.sale.financialEmployee.id=$rootScope.AuthenticatedUser.userId;
            console.log($scope.sale);
            SaleService.add($scope.sale);
        }

        function shDetails(materials)
        {
            $scope.details = materials;
    
        }
        
         function invoice(sale)
        {
            $scope.invoicesale = sale;
    
        }
        
        

       
		
		
		
		
	}
	
})();