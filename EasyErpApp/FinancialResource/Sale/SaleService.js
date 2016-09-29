(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('SaleService',SaleService);
	
	SaleService.$inject = ['SaleDataService'];
	
	function SaleService (SaleDataService){
		var service = {};
		
		service.getAll = getAll;
        service.add = add;
		
		
		return service;
		
		function getAll(){
			
			return SaleDataService.query();
		}
        
        function add(sale){
			
			return SaleDataService.save(sale);
		}
		
	
		
		
		
	}
	
	
	
})();