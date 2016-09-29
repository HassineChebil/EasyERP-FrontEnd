(function(){
	'use strict';
	
	angular
		.module('app')
		.factory('RewardingDataService',rewardingDataService);
	
	rewardingDataService.$inject = ['$resource']
	
	function rewardingDataService($resource){
		var service = {};
		
		service.Rewarding = Rewarding;
		service.GetRewarding = GetRewarding;
        service.GetRewardingByPaysplit = GetRewardingByPaysplit;
        
		return service;
		
		function Rewarding(){
			return $resource('http://localhost:18080/EasyERP-web/rest/rewarding');
		}
        
        function GetRewarding(){
			return $resource('http://localhost:18080/EasyERP-web/rest/rewarding/search/:type/:id');
		}
        
        function GetRewardingByPaysplit(){
			return $resource('http://localhost:18080/EasyERP-web/rest/rewarding/{id}/paysplit');
		}
	}
})();