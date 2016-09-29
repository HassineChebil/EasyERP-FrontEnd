(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('PaysplitDataService',paysplitDataService);
	
	paysplitDataService.$inject = ['$resource']
	
	function paysplitDataService($resource){
		var service = {};
		
		service.Paysplit = Paysplit;
		service.GetPaysplit = GetPaysplit;
		service.DeletePaySplit = DeletePaySplit;
        
		return service;
		
		function Paysplit(){
			return $resource('http://localhost:18080/EasyERP-web/rest/paysplit');
		}
        
        function GetPaysplit(){
			return $resource('http://localhost:18080/EasyERP-web/rest/paysplit/search/emp/:date');
		}
		
		 function DeletePaySplit(){
			return $resource('http://localhost:18080/EasyERP-web/rest/paysplit/:id/remove');
		}
	}
})();