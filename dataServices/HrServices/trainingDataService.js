(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('TrainingDataService',trainingDataService);
	
	trainingDataService.$inject = ['$resource']
	
	function trainingDataService($resource){
		var service = {};
		
		service.Training = Training;
		service.GetTraining = GetTraining;
        service.AssignEmployees = AssignEmployees;
        service.InAssignEmployees = InAssignEmployees;
        
		return service;
		
		function Training(){
			return $resource('http://localhost:18080/EasyERP-web/rest/training');
		}
        
        function GetTraining(){
			return $resource('http://localhost:18080/EasyERP-web/rest/training/search/:type/:id');
		}
        
        function AssignEmployees(){
			return $resource('http://localhost:18080/EasyERP-web/rest/training/emp/:id/add',{id : '@id'},{'save':{method : 'PUT'}});
		}
        
        function InAssignEmployees(){
			return $resource('http://localhost:18080/EasyERP-web/rest/training/emp/:id/remove',{id : '@id'},{'save':{method : 'PUT'}});
		}
	}
})();