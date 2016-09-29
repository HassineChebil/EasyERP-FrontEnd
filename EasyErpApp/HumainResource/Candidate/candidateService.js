(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('CandidateService',CandidateService);
	
	CandidateService.$inject = ['CandidateDataService'];
	
	function CandidateService (CandidateDataService){
		var service = {};
		
		service.getAll = getAll;
        service.create = create;
        service.Accept = Accept;
        service.Deny = Deny;
		return service;
        
        function getAll(){
			return CandidateDataService.Candidate().query();
		}
        
        function create(candidate){
			return CandidateDataService.Candidate().save(candidate);
		}
        
        function Accept(candidate){
			return CandidateDataService.AcceptCandidate().save(candidate);
		}
        
        function Deny(candidate){
			return CandidateDataService.DenyCandidate().delete({id:candidate.id});
		}
	}
})();