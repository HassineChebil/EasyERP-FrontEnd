(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('ContractService',ContractService);
	
	ContractService.$inject = ['ContractDataService','EmployeeDataService','PaysplitDataService','MailDataService'];
	
	function ContractService (ContractDataService,EmployeeDataService,PaysplitDataService,MailDataService){
		var service = {};
		
		service.getAll = getAll;
		service.addContract = addContract;
		service.addHrEmployee = addHrEmployee;
		service.addInventEmployee = addInventEmployee;
		service.addFanEmployee = addFanEmployee;
		service.addPaysplit = addPaysplit;
		service.deleteEmployee = deleteEmployee;
		service.deletePaySplit = deletePaySplit;
		service.deleteContract = deleteContract;
		service.getPaySplit = getPaySplit;
		service.getEmployee = getEmployee;
		service.mailing = mailing;
		
		return service;
		
		function getAll(){
			 var response;
			
			return ContractDataService.Contract().query();
		}
		
		function addContract(contract){
			return ContractDataService.Contract().save(contract);
		}
		
		function addHrEmployee(employee){
			return EmployeeDataService.AddHrEmployee().save(employee);
		}
	
		function addInventEmployee(employee){
			return EmployeeDataService.AddInventEmployee().save(employee);
		}
		
		function addFanEmployee(employee){
			return EmployeeDataService.AddFanEmployee().save(employee);
		}
		
		function addPaysplit(paySplit){
			return PaysplitDataService.Paysplit().save(paySplit);
		}
		
		function deleteEmployee(id){
			return EmployeeDataService.DeleteEmployee().delete({id : id});
		}
		
		function deletePaySplit(id){
			return PaysplitDataService.DeletePaySplit().delete({id : id});
		}
		
		function getEmployee(){
			return EmployeeDataService.GetAllEmployees().query();
		}
		
		function getPaySplit(){
			return PaysplitDataService.Paysplit().query();
		}
		
		function deleteContract(id){
			return ContractDataService.DeleteContract().delete({id : id});
		}
		
		function mailing(email){
			console.log(email);
			return 
			MailDataService.Mailing().save({mail : email.to,subject : email.subject, body : email.body},{},function(resp){
			console.log(resp)
		});
		}
		
	}
	
	
	
})();