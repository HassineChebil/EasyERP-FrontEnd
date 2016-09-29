(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('MailDataService',MailDataService);
	
	MailDataService.$inject = ['$resource']
	
	function MailDataService($resource){
		var service = {};
		
		service.Mailing = Mailing;
		service.fn = fn;
		return service;
		
		function GetUserByLoginAndPassword(){
			return $resource('http://localhost:18080/EasyERP-web/rest/emp/authentif/:login/:password');
		}
		
		function Mailing () {
			console.log("made it here 2");
			return $resource('http://localhost:18080/EasyERP-web/rest/mail/:mail/:subject/:body/send',{mail : '@mail',subject : '@subject', body : '@body'} , {'save' : {method : 'POST'}});
		}
		
		function fn(){
			console.log("made it to mail data");
		}

	}
})();