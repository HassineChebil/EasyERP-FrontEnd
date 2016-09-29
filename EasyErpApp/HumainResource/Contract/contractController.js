(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('ContractController',ContractController);
	
	ContractController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','ContractService','$location','$resource'];
	
	function ContractController(AuthenticatedUser,$scope,$rootScope,$route,ContractService,$location,$resource){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'contract' && $scope.activetab !='contractCreate'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 1;
		}
		
        
			$scope.check = function(x){
			  console.log(x);
			  if(x==$scope.collapseVar)
				$scope.collapseVar = 0;
			  else
				$scope.collapseVar = x;
			};
		$scope.contracts = {};
		$scope.tab = 1;
		$scope.contract = {
			signingDate : '',
			type : '',
			description : '',
			hrEmployee : {id : $rootScope.AuthenticatedUser.userId}
			
		};
		$scope.employee = {
			fName: '',
			lName : '',
			cin : '',
			email : '',
			password : '',
			gender : '',
			phone : '',
			registrationNbr: '',
			position : '',
			accountState : true
			
		};
		
		$scope.division = '';
		$scope.paySlipt = {
			grossWage : '',
			paidLeaveDays : '',
			unpaidLeaveDays : '',
			paySplitMonth : ''
		};
		
		
		$scope.hrEmp = {};
		
		ContractService.getAll().$promise.then(function(contract){
			$scope.contracts = contract;
		});
		
		
$scope.create = function(contract,employee,paySlipt,division)	{
	ContractService.addContract(contract).$promise.then(function(response){
		console.log(response.id);
		$scope.employee.contract = {id : response.id};
		console.log($scope.employee);
		if(division == 'hr'){
		ContractService.addHrEmployee(employee)
	}else if(division == 'fa'){
		ContractService.addFanEmployee(employee);
	}else{
		ContractService.addInventEmployee(employee);
	}
		$scope.paySlipt.contract = {id : response.id}
		ContractService.addPaysplit(paySlipt);
	});
	
	
	$location.path('/contract');
};

$scope.creator = function(hrEmployee){
	$scope.hrEmp = hrEmployee;
};
		
$scope.delete = function(contractId,contract){
	ContractService.getEmployee().$promise.then(function(employees){
		for(var i=0; i<employees.length; i++)
            {
               
                if(employees[i].contract.id == contractId){
					console.log(employees[i]);
					ContractService.deleteEmployee(employees[i].id);
				}
            }
	});
	
	ContractService.getPaySplit().$promise.then(function(paySplits){
		for(var i=0; i<paySplits.length; i++)
            {
               
                if(paySplits[i].contract.id == contractId){
					console.log(paySplits[i]);
					ContractService.deletePaySplit(paySplits[i].id).$promise.then(function(response){
						ContractService.deleteContract(contractId);
					});
				}
            }
	});
	$scope.contracts.splice($scope.contracts.indexOf(contract), 1);
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