(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('DepotController',DepotController);
	
	DepotController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','DepotService','$location','Map'];
	
	function DepotController(AuthenticatedUser,$scope,$rootScope,$route,DepotService,$location,Map){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'depot' && $scope.activetab !='depotCreate'){
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
		$scope.depots = {};
		$scope.tab = 1;
		$scope.depot = {
            id:'',
			reference : '',
			name : '',
			address : '',
            type : '',
			inventEmployee : {id : $rootScope.AuthenticatedUser.userId}
			
		};
		
		$scope.inventEmp = {};
		
		DepotService.getAll().$promise.then(function(depot){
			$scope.depots = depot;
		});
		
		
$scope.create = function(depot)	{
	DepotService.addDepot(depot).$promise.then(function(response){
		
		
		DepotService.addDepot(depot)
	
	});
	
	
	$location.path('/depot');
    
};
        $scope.creator = function(depot){
	$scope.dep = depot;
};

         $scope.place = {};
    
    $scope.search = function() {
       
        $scope.apiError = false;
        Map.search($scope.searchPlace)
        .then(
            function(res) { // success
                Map.addMarker(res);
                $scope.place.name = res.name;
                $scope.place.lat = res.geometry.location.lat();
                $scope.place.lng = res.geometry.location.lng();
            },
            function(status) { // error
                $scope.apiError = true;
                $scope.apiStatus = status;
            }
        );
    }
    
    
    Map.init();

		
	}
	
})();