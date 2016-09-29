(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('LoginService',LoginService);
	
	LoginService.$inject = ['UserService'];
	
	function LoginService (UserService,Session,AUTH_EVENTS){
		var service = {};
		
		service.Login = Login;
		
		service.GetType = GetType;
		
		return service;
		
		function Login(username,password,callback){
			 var response;
			
			UserService.GetUserByLoginAndPassword().get({login: username,password: password},function(user){
				 if(user !== null &&  user.password == password){
			if(user.position === 'manager' || user.position === 'admin'){	
		
						response = {success:true, userId : user.id, userName : user.fName, userLname : user.lName};									 
						}
					 else {
						response = {success:false, message: 'only admin or manager can use the application !!'};
																		 }
				 }else{
					
					 response = {success:false, message: 'Username or password is incorrect !!'};
				 }
				 callback(response);
			});
		}
		
	
		function GetType(user,typeCallback){
			var pathResponse;
			return UserService.GetUserByLoginAndPassword().save({},{id:user},function(type){
				if(type[0] === '1'){
					pathResponse = {path: '/hrDash', role: 'hrEmployee'};
				}else if(type[0] === '2'){
					pathResponse = {path: '/fanDash', role: 'fanEmployee'};
				}else if(type[0] === '3'){
					pathResponse = {path: '/inventDash',role: 'inventEmployee'};
				}else{
					pathResponse = {path: ''};
				}
				typeCallback(pathResponse);
			});
		}
		
		
		
	}
	
	
	
})();