(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('GeneralLedgerService',GeneralLedgerService);
	
	GeneralLedgerService.$inject = ['GeneralLedgerDataService'];
	
	function GeneralLedgerService (GeneralLedgerDataService){
		var service = {};
		
		service.getAll = getAll;
        service.add = add;
		
		
		return service;
		
		function getAll(){
			
			return GeneralLedgerDataService.query();
		}
        
        function add(gl){
			
			return GeneralLedgerDataService.save(gl);
		}
        
		
		
	}
	
	
	
})();