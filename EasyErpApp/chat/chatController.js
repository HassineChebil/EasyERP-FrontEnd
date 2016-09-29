(function(){
	'use strict';
	
	angular
		.module('app')
		.controller('ChatController',ChatController);
	
	ChatController.$inject = ['$log','$rootScope', '$scope', '$location', 'PubNub','EmployeeService'];
	
	function ChatController($log,$rootScope, $scope, $location, PubNub,EmployeeService){		
		
		$scope.userId   = $rootScope.AuthenticatedUser.userName + " " + $rootScope.AuthenticatedUser.userLname;
	  // make up a channel name
		$scope.channel  = 'The chat Channel';
	  // pre-populate any existing messages (just an AngularJS scope object)
	  $scope.messages = ['Welcome to ' + $scope.channel];

	  if (!$rootScope.initialized) {
		// Initialize the PubNub service
		PubNub.init({
		  subscribe_key: 'demo',
		  publish_key: 'demo',
		  uuid:$scope.userId
		});
		$rootScope.initialized = true;
	  }

	  // Subscribe to the Channel
		PubNub.ngSubscribe({ channel: $scope.channel });

	  // Create a publish() function in the scope
	  $scope.publish = function() {
		PubNub.ngPublish({
		  channel: $scope.channel,
		  message: "[" + $scope.userId + "] " + $scope.newMessage
		});
		$scope.newMessage = '';
	  };

	  // Register for message events
	  $rootScope.$on(PubNub.ngMsgEv($scope.channel), function(ngEvent, payload) {
		$scope.$apply(function() {
		  $scope.messages.push(payload.message);
		});
	  });

	  // Register for presence events (optional)
	  $rootScope.$on(PubNub.ngPrsEv($scope.channel), function(ngEvent, payload) {
		$scope.$apply(function() {
			$scope.users =PubNub.ngListPresence($scope.channel);
			});
	  });
		
/*			var list= [];
			list = PubNub.ngListPresence($scope.channel);
			var users = [];
			var Mylist = [];
			EmployeeService.getAll().$promise.then(function(employee){
				users = employee;
			});
			console.log(list);
			for(var i=0; i<list.length; i++)
			{
				for(var j=0; j<users.length; j++)
				{
					var u = users[j].userName + " " + users[j].userLname;
					console.log(u+ " "+list[i]);
					if(u == list[i])
						Mylist.push(training[i]);
				}
			}*/

	  // Pre-Populate the user list (optional)
	  PubNub.ngHereNow({
		channel: $scope.channel
	  });

	  // Populate message history (optional)
	  PubNub.ngHistory({
		channel: $scope.channel,
		count: 500
	  });
		}
		
})();