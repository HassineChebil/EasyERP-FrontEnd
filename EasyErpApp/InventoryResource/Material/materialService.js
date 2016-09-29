(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('MaterialService',MaterialService);
	
	MaterialService.$inject = ['MaterialDataService'];
	
	function MaterialService (MaterialDataService){
		var service = {};
		
		service.getAll = getAll;
		service.deleteMaterial = deleteMaterial;
        service.create=create;
		
		return service;
		
		function getAll(){
			 var response;
			
			return MaterialDataService.Material().query();
		}
		
	
		function deleteMaterial(id){
			return MaterialDataService.Material().delete({id:id});
		}
        
        function create(material){
			return MaterialDataService.Material().save(material);
		}
		
		
		
		
	}
	
	
	
})();