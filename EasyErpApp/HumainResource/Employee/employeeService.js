(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('EmployeeService',EmployeeService);
	
	EmployeeService.$inject = ['EmployeeDataService'];
	
	function EmployeeService (EmployeeDataService){
		var service = {};
		
		service.getAll = getAll;
		return service;
        
        function getAll(){
			return EmployeeDataService.GetAllEmployees().query();
		} 
	}
})();