(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('ContractDataService',ContractDataService);
	
	ContractDataService.$inject = ['$resource']
	
	function ContractDataService($resource){
		var service = {};
		
		service.Contract = Contract;
		service.DeleteContract = DeleteContract;
		
		return service;
		
		function Contract(){
			return $resource('http://localhost:18080/EasyERP-web/rest/contract');
		}
		
		function DeleteContract(){
			return $resource('http://localhost:18080/EasyERP-web/rest/contract/:id/remove');
		}
		

	}
})();