(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('TrainingService',TrainingService);
	
	TrainingService.$inject = ['TrainingDataService'];
	
	function TrainingService (TrainingDataService){
		var service = {};
		
		service.getAll = getAll;
        service.Assign = Assign;
        service.InAssign = InAssign;
		return service;
        
        function getAll(){
			return TrainingDataService.Training().query();
		}
        
        function Assign(id,employee){
			return TrainingDataService.AssignEmployees().save({id: id},employee);
		}
        function InAssign(id,employee){
			return TrainingDataService.InAssignEmployees().save({id: id},employee);
		}
        
	}
})();