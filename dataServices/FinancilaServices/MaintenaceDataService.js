(function(){
	'use strict';
	angular
	.module('app')
	.factory('MaintenanceDataService',MaintenanceDataService);
	MaintenanceDataService.$inject = ['$resource'];
	function MaintenanceDataService ($resource){
        
		/*var service = {};

		service.GetAllMaintenance = GetAllMaintenance;
        service.GetAllMaintenancestat = GetAllMaintenancestat;
	

		return service;

		function GetAllMaintenance(){
			return $resource('http://localhost:18080/EasyERP-web/rest/maintenance');
		}
         function GetAllMaintenancestat(){
			return $resource('http://localhost:18080/EasyERP-web/rest/maintenance/stat');
		}
*/
        
        return $resource('http://localhost:18080/EasyERP-web/rest/maintenance/:dest/:id',{},
                     {  'get':      {method:'GET', params: { id: '@id', dest:"find"}},
                        'save':     {method:'POST'},
                        'finalize': {method:'POST', params: { id: '@id'}},
                        'query':    {method:'GET', isArray:true},
                        'update':   {method: 'PUT'},
                        'stat':     {method: 'GET'   ,isArray:true,params: { dest:"stat"}}
                         
                     },
                     {
                    stripTrailingSlashes: false
                        });
            
	}
})();