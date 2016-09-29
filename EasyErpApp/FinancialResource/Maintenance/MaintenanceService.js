(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('MaintenanceService',MaintenanceService);
	
	MaintenanceService.$inject = ["MaintenanceDataService"];
	
	function MaintenanceService ( MaintenanceDataService){
		
        var service = {};
		
		service.getAll = getAll;
        service.getAllmainstat=getAllmainstat;
		
		
		return service;
		
        function getAll(){
            return MaintenanceDataService.query()
            }
        
        function getAllmainstat(){
			return MaintenanceDataService.stat()
            }
        
}
    
})();