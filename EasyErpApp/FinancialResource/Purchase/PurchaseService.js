(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('PurchaseService',PurchaseService);
	
	PurchaseService.$inject = ["PurchaseDataService"];
	
	function PurchaseService ( PurchaseDataService){
        
		var service = {};
		
		service.getAll = getAll;
		service.getAllpurchstat= getAllpurchstat;
		
		return service;
		
        	function getAll(){
			return PurchaseDataService.query()
            }
      
        
            function getAllpurchstat(){
			return PurchaseDataService.stat()
            }
        
        
}
    
})();




