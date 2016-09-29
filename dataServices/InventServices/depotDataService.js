(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('DepotDataService',DepotDataService);
	
	DepotDataService.$inject = ['$resource']
	
	function DepotDataService($resource){
		var service = {};
		
		service.Depot = Depot;
		
		return service;
		
		function Depot(){
			return $resource('http://localhost:18080/EasyERP-web/rest/depot');
		}
		

	}
})();