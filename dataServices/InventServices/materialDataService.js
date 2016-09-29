(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('MaterialDataService',MaterialDataService);
	
	MaterialDataService.$inject = ['$resource']
	
	function MaterialDataService($resource){
		var service = {};
		
		service.Material = Material;
		
		return service;
		
		function Material(){
			return $resource('http://localhost:18080/EasyERP-web/rest/material/:id');
		}
		

        
	}
})();