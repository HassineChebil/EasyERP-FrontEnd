(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('UserService',UserService);
	
	UserService.$inject = ['$resource']
	
	function UserService($resource){
		var service = {};
		
		service.GetUserByLoginAndPassword = GetUserByLoginAndPassword;
		
		return service;
		
		function GetUserByLoginAndPassword(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/authentif/:login/:password');
		}
		

	}
})();