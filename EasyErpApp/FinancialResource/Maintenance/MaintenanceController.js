(function(){
	'user strict';
	
	angular
		.module('app')
		.controller('FanMaintenanceController',FanMaintenanceController);
	
	FanMaintenanceController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','MaintenanceService'];
	
	function FanMaintenanceController(AuthenticatedUser,$scope,$rootScope,$route,MaintenanceService){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'maintenance'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 1;
		}
		
        
        $scope.check = function(x){
          
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
		
	
        $scope.maintenances = {};
        $scope.invoicemaint = {};
		
		MaintenanceService.getAll().$promise.then(function(maintenance){
			$scope.maintenances =maintenance;
			
		});
        
        
        
        
        
         $scope.invoice = function(maintenance){
	           $scope.invoicemaint=maintenance;
         }
        
	}
       
    
})();