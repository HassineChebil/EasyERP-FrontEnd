(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('HrDashController',HrDashController);
	
	HrDashController.$inject = ['$location','AuthenticatedUser','$scope','$rootScope','$route','CandidateService','EmployeeService','TrainingService'];
	
	function HrDashController($location,AuthenticatedUser,$scope,$rootScope,$route,CandidateService,EmployeeService,TrainingService){
		var userID = $rootScope.AuthenticatedUser;
		
		
		$scope.activetab = $route.current.activetab;
		
		
		$scope.collapseVar = 0;
        
        $scope.check = function(x){
          console.log(x);
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
		
		$scope.candidates = {};
		$scope.employees = {};
		$scope.trainings = {};
		CandidateService.getAll().$promise.then(function(list){
			$scope.candidates = list.length;
           
		});
		EmployeeService.getAll().$promise.then(function(employee){
			$scope.employees = employee.length;
			
		});
		TrainingService.getAll().$promise.then(function(training){
			$scope.trainings = training.length;
		});
		
		/*if(AUTH_EVENTS.isAuth && AUTH_EVENTS.isHrEmployee){
			
		}else{
			$location.path('/');
		}*/
	}
	
})();