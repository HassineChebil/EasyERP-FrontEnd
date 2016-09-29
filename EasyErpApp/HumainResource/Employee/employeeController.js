(function(){
	'user strict';
	
	angular
		.module('app')
        .controller('EmployeeController',EmployeeController);
	
	EmployeeController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','EmployeeService','$resource'];
	
	function EmployeeController(AuthenticatedUser,$scope,$rootScope,$route,EmployeeService,$resource){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'employee'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 3;
		}
		
        
        $scope.check = function(x){
          console.log(x);
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.employees = {};
		
		$scope.email = {
			to : '',
			subject : '',
			body : ''
		};
		$scope.sending = false;
		$scope.confMsg = 0;
        
		EmployeeService.getAll().$promise.then(function(employee){
			$scope.employees = employee;
			console.log(employee[1]);
		});
        
        $scope.detailemployee={};
        $scope.detail = function(employee){
            $scope.detailemployee=employee;
         };
		
		$scope.mail = function(email){
		$scope.sending = true;
		console.log(email);
		$resource('http://localhost:18080/EasyERP-web/rest/mail/:mail/:subject/:body/send',{mail : '@mail',subject : '@subject', body : '@body'} , {'save' : {method : 'POST'}}).save({mail : email.to,subject : email.subject, body : email.body},{},function(resp){
			console.log(resp);
			$scope.email = {
			to : '',
			subject : '',
			body : ''
		};
			$scope.sending =false;
			$scope.confMsg = 1;
			
		});
			
		};
		
		
	}
	
})();