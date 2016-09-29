(function(){
    
    'use strict';

    angular
        .module('app')
        .factory('SaleDataService',SaleDataService);
    
        SaleDataService.$inject = ['$resource']
        
        function SaleDataService ($resource)
                
        {
            return $resource('http://localhost:18080/EasyERP-web/rest/sale/:dest/:id',{},
                     {  'get':      {method:'GET', params: { id: '@id', dest:"find"}},
                        'save':     {method:'POST'},
                        'finalize': {method:'POST', params: { id: '@id'}},
                        'query':    {method:'GET', isArray:true},
                        'update':   {method: 'PUT'}
                     },
                     {
                    stripTrailingSlashes: false
                        });
            
     }

})();