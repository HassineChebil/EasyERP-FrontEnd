(function(){
	'user strict';
	
	angular
		.module('app')
		.controller('FanDashController',FanDashController);
	
	FanDashController.$inject = ['$location','AuthenticatedUser','$scope','$rootScope','$route','MaintenanceService','PurchaseService','SaleService'];
	
	function FanDashController($location,AuthenticatedUser,$scope,$rootScope,$route,MaintenanceService,PurchaseService,SaleService){
		var userID = $rootScope.AuthenticatedUser;
		
		$scope.id = userID;
		$scope.activetab = $route.current.activetab;
		    
        $scope.maintenancesstat = {};
        $scope.purchasesstat = {};
        $scope.salessstat = {};
        
        MaintenanceService.getAll().$promise.then(function(maintenancestat){
           
        $scope.maintenancesstat=maintenancestat.length;
		});
        
        PurchaseService.getAll().$promise.then(function(purchasestat){
        $scope.purchasesstat=purchasestat.length ;
	    });
	
        
        SaleService.getAll().$promise.then(function(salestat){
        $scope.salesstat=salestat.length ;
	    });
        
        }
        
        
})();