(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('EmployeeDataService',employeeDataService);
	
	employeeDataService.$inject = ['$resource']
	
	function employeeDataService($resource){
		var service = {};
		
		service.GetAllEmployees = GetAllEmployees;
		service.GetEmployee = GetEmployee;
		service.AddHrEmployee = AddHrEmployee;
		service.AddInventEmployee = AddInventEmployee;
		service.AddFanEmployee = AddFanEmployee;
		service.DeleteEmployee = DeleteEmployee;
		
        
		return service;
		
		function GetAllEmployees(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp');
		}
        
        function GetEmployee(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/search/:type/:id');
		}
		
		
		 function AddHrEmployee(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/hr');
		}
		
		 function AddInventEmployee(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/inventory');
		}
		
		 function AddFanEmployee(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/financial');
		}
		
		 function DeleteEmployee(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/:id/remove');
		}
		
		
		
	}
})();