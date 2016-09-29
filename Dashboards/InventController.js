(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('InventDashController',InventDashController);
	
	InventDashController.$inject = ['$location','AuthenticatedUser','$scope','$rootScope','$route'];
	
	function InventDashController($location,AuthenticatedUser,$scope,$rootScope,$route){
		var userID = $rootScope.AuthenticatedUser;
		
		$scope.id = userID;
		$scope.activetab = $route.current.activetab;
		console.log(userID);
		
		/*if(AUTH_EVENTS.isAuth && AUTH_EVENTS.isHrEmployee){
			
		}else{
			$location.path('/');
		}*/
	}
	
})();