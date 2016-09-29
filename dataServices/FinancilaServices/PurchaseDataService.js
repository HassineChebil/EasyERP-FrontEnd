(function(){
	'use strict';
	angular
	.module('app')
	.factory('PurchaseDataService',PurchaseDataService);
	PurchaseDataService.$inject = ['$resource'];
	function PurchaseDataService ($resource){
        
		/* var service = {};

		service.GetAllPurchase = GetAllPurchase;
	    service.GetAllPurchasestat = GetAllPurchasestat;

		return service;

		function GetAllPurchase(){
			return $resource('http://localhost:18080/EasyERP-web/rest/purchase');
		}
        function GetAllPurchasestat(){
			return $resource('http://localhost:18080/EasyERP-web/rest/purchase/stat');
		}
*/
        
        
         return $resource('http://localhost:18080/EasyERP-web/rest/purchase/:dest/:id',{},
                     {  'get':      {method:'GET', params: { id: '@id', dest:"find"}},
                        'save':     {method:'POST'},
                        'finalize': {method:'POST', params: { id: '@id'}},
                        'query':    {method:'GET', isArray:true},
                        'update':   {method: 'PUT'},
                        'stat':     {method: 'GET'   , isArray:true , params: { dest:"stat"}}
                         
                     },
                     {
                    stripTrailingSlashes: false
                        });
	}
})();