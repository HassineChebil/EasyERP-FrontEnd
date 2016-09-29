(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('DepotService',DepotService);
	
	DepotService.$inject = ['DepotDataService'];
	
	function DepotService (DepotDataService){
		var service = {};
		
		service.getAll = getAll;
		service.addDepot = addDepot;
        
		
		
		return service;
		
		function getAll(){
			 var response;
			
			return DepotDataService.Depot().query();
		}
		
		function addDepot(depot){
			return DepotDataService.Depot().save(depot);
		}
		
		
		
	}
	
	
	
})();