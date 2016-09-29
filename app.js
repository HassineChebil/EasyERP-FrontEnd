(function() {
	'user strict';
	
	angular
		.module('app',['ngRoute','ngResource','pubnub.angular.service'])
		.config(config)
		.value('AuthenticatedUser',{})
		.value('Role',{})
		.run(function($rootScope, $location) {
	    $rootScope.$on("$routeChangeStart", function(event, next, current) {
	    	
	      if ($rootScope.AuthenticatedUser== null) {
	    	
	        // no logged user, redirect to /login
	        if ( next.templateUrl === "login/login.html") {
	        }
	        else {
	          $location.path("/");
	        }
	      }
	    });
	  });
	
	config.$inject = ['$routeProvider'];
	
	function config($routeProvider,$rootScope){
		$routeProvider
			.when('/',{
				controller:'LoginController',
				templateUrl:'login/login.html'
			
		})
		.when('/hrDash',{
			controller:'HrDashController',
			templateUrl:'Dashboards/HrDash.html',
			activetab:'hrDash',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/contract',{
			controller:'ContractController',
			templateUrl:'EasyErpApp/HumainResource/Contract/contractView.html',
			activetab:'contract',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/contract/create',{
			controller:'ContractController',
			templateUrl:'EasyErpApp/HumainResource/Contract/contractCreateView.html',
			activetab:'contractCreate',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		 .when('/candidate',{
			controller:'CandidateController',
			templateUrl:'EasyErpApp/HumainResource/Candidate/candidateView.html',
			activetab:'candidate',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/candidate/create',{
			controller:'CandidateController',
			templateUrl:'EasyErpApp/HumainResource/Candidate/candidateCreateView.html',
			activetab:'candidate',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/employee',{
			controller:'EmployeeController',
			templateUrl:'EasyErpApp/HumainResource/Employee/employeeView.html',
			activetab:'employee',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'hrEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/training',{
			controller:'TrainingController',
			templateUrl:'EasyErpApp/HumainResource/Training/trainingView.html',
			activetab:'training'
		})
		.when('/fanDash',{
			controller:'FanDashController',
			templateUrl:'Dashboards/FanDash.html',
			activetab:'fanDash',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/fanmaintenance',{
			controller:'FanMaintenanceController',
			templateUrl:'EasyErpApp/FinancialResource/Maintenance/Listmaintenance.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/fansale',{
			controller:'SaleController',
			templateUrl:'EasyErpApp/FinancialResource/Sale/listsale.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
         .when('/fanpurchase',{
			controller:'FanPurchaseController',
			templateUrl:'EasyErpApp/FinancialResource/Purchase/Listpurchase.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        
         .when('/fangeneralledger',{
			controller:'GeneralLedgerController',
			templateUrl:'EasyErpApp/FinancialResource/GeneralLedger/Listgl.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        
        .when('/fangeneralledgeradd',{
			controller:'GeneralLedgerController',
			templateUrl:'EasyErpApp/FinancialResource/GeneralLedger/Addgl.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'fanEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/inventDash',{
			controller:'InventDashController',
			templateUrl:'Dashboards/inventDash.html',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'inventEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/depot',{
			controller:'DepotController',
			templateUrl:'EasyErpApp/InventoryResource/Depot/depotView.html',
			activetab:'depot',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'inventEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/material/create',{
			controller:'MaterialController',
			templateUrl:'EasyErpApp/InventoryResource/Material/materialCreateView.html',
			activetab:'materialCreate',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'inventEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
        .when('/material',{
			controller:'MaterialController',
			templateUrl:'EasyErpApp/InventoryResource/Material/materialView.html',
			activetab:'material',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'inventEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
         .when('/depot',{
			controller:'DepotController',
			templateUrl:'EasyErpApp/InventoryResource/Depot/depotView.html',
			activetab:'depot',
			resolve:{
						"check":function($location,$rootScope){   
							if($rootScope.Role == 'inventEmployee'){ 
								//Do something
							}else{
								$location.path('/');
								$rootScope.AuthenticatedUser = null;
							}
						}
					}
		})
		.when('/chat',{
			controller:'ChatController',
			templateUrl:'EasyErpApp/chat/chatView.html'
		})
	}
})();