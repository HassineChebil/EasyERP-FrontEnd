(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('AssignementDataService',AssignementDataService);
	
	AssignementDataService.$inject = ['$resource']
	
	function AssignementDataService($resource){
		var service = {};
		
		service.Assignement = Assignement;
		
		return service;
		
		function Assignement(){
			return $resource('http://localhost:18080/EasyERP-web/rest/assignement');
		}
		

        
	}
})();