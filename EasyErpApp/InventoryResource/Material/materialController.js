(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('MaterialController',MaterialController);
	
	MaterialController.$inject = ['AuthenticatedUser','$location','$scope','$rootScope','$route','MaterialService'];
	
	function MaterialController(AuthenticatedUser,$location,$scope,$rootScope,$route,MaterialService){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'material' && $scope.activetab !='materialCreate'){
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
		
		$scope.materials = {};
		$scope.material = {
			code : '',
			designation : '',
			type : '',
            code: '',
			inventEmployee : {id : $rootScope.AuthenticatedUser.userId}
			
		};
		
        
		MaterialService.getAll().$promise.then(function(material){
			$scope.materials = material;
			
		});
		
		$scope.tab = 1;
        
        $scope.create = function(material)	{
	MaterialService.create(material);
            $location.path('/material');
            
            MaterialService.getAll().$promise.then(function(material){
		
		
		$scope.materials=material;
	
	});

};
		
	$scope.delete= function(material)	{
	
		
		
		MaterialService.deleteMaterial(material.id);
        $scope.materials.splice($scope.materials.indexOf(material), 1);
	
	};
	
	
	stripTrailingSlashes: false;
    
};
	
	
})();