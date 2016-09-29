(function(){
	'user strict';
	
	angular
		.module('app')
        .controller('CandidateController',CandidateController);
	
	CandidateController.$inject = ['AuthenticatedUser','$location','$scope','$rootScope','$route','CandidateService','$window'];
	
	function CandidateController(AuthenticatedUser,$location,$scope,$rootScope,$route,CandidateService,$window){
		
		$scope.activetab = $route.current.activetab;
        $scope.candidate = {
			fname: '',
			lname : '',
			cin : '',
			email : '',
			gender : '',
			phone : '',
            interviewDate : ''
		};
        
        $scope.create = function(candidate){
            CandidateService.create(candidate);
            $location.path('/candidate');
            CandidateService.getAll().$promise.then(function(list){
                $scope.candidates = list;
            });
        };
        
		if($scope.activetab != 'candidate'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 2;
		}
		
        
        $scope.check = function(x){
          console.log(x);
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.candidates = {};
        
		CandidateService.getAll().$promise.then(function(list){
			$scope.candidates = list;
            console.log($scope.candidates[1]);
		});
        
        $scope.detailcandidate={};
        $scope.detail = function(candidate){
            $scope.detailcandidate=candidate;
        }
        
        $scope.Accept = function(candidate){
            CandidateService.Accept(candidate);
            $scope.candidates.splice($scope.candidates.indexOf(candidate), 1);
        }
        $scope.Deny = function(candidate){
            CandidateService.Deny(candidate);
            $scope.candidates.splice($scope.candidates.indexOf(candidate), 1);
        }
	}
	
})();