(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('LoginController',LoginController);
	
	LoginController.$inject = ['LoginService','$scope','$location','AuthenticatedUser','Role','$rootScope'];
	
	function LoginController(LoginService,$scope,$location,AuthenticatedUser,Role,$rootScope){
		$scope.credentials = {
    				username: '',
					password: ''
				  };
		$scope.errorMsg = '';
		$scope.login = function(credentials){
			 LoginService.Login(credentials.username,credentials.password,function(response){
				if(response.success){
					$rootScope.AuthenticatedUser = {userId : response.userId, userName : response.userName, userLname : response.userLname};
					console.log($rootScope.AuthenticatedUser);
					LoginService.GetType(response.userId,function(pathResponse){
						$rootScope.Role = pathResponse.role;
						$location.path(pathResponse.path);
						console.log('test',pathResponse.path);
						console.log('test',$rootScope.Role);
						
					})
					
				}else{
					$scope.errorMsg = response.message;
					console.log(response.message);
					
				$scope.credentials = {
    				username: '',
					password: ''
				  };
				}
			});
			
			
			
	};
		
		$scope.logout = function(){
			$rootScope.AuthenticatedUser = null;
			$location.path("/");
		};
		
		}
		
})();