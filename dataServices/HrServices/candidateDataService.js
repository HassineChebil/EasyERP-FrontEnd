(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('CandidateDataService',candidateDataService);
	
	candidateDataService.$inject = ['$resource']
	
	function candidateDataService($resource){
		var service = {};
		
		service.Candidate = Candidate;
		service.GetCandidate = GetCandidate;
        service.AcceptCandidate = AcceptCandidate;
        service.DenyCandidate = DenyCandidate;
        
		return service;
		
		function Candidate(){
			return $resource('http://localhost:18080/EasyERP-web/rest/candidate');
		}
        
        function GetCandidate(){
			return $resource('http://localhost:18080/EasyERP-web/rest/candidate/search/:type/:id');
		}
        
        function AcceptCandidate(){
			return $resource('http://localhost:18080/EasyERP-web/rest/candidate/accepter');
		}
        
        function DenyCandidate(){
			return $resource('http://localhost:18080/EasyERP-web/rest/candidate/:id/remove');
		}
	}
})();