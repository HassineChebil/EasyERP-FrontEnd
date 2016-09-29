(function(){
    
    'use strict';

    angular
        .module('app')
        .factory('GeneralLedgerDataService',GeneralLedgerDataService);
    
        GeneralLedgerDataService.$inject = ['$resource']
        
        function GeneralLedgerDataService ($resource)
                
        {
            
            return $resource('http://localhost:18080/EasyERP-web/rest/generalLedger/:dest/:id',{},
                     {  'get':            {method:'GET', params: { id: '@id'}},
                        'getOperations':  {method:'GET', params: { id: '@id' , dest:"operations"}},
                        'save':           {method:'POST'},
                        'query':          {method:'GET', isArray:true}},
                     {
                    stripTrailingSlashes: false
                        });
            
    }

})();