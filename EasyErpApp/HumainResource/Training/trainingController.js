(function(){
	'user strict';
	
	angular
		.module('app')
        .controller('TrainingController',TrainingController);
	
	TrainingController.$inject = ['AuthenticatedUser','$scope','$rootScope','$route','TrainingService','EmployeeService'];
	
	function TrainingController(AuthenticatedUser,$scope,$rootScope,$route,TrainingService,EmployeeService){
		
		$scope.activetab = $route.current.activetab;
		if($scope.activetab != 'training'){
			$scope.collapseVar = 0;
		}else{
			$scope.collapseVar = 4;
		}
        
        if($rootScope.Role == 'hrEmployee'){ 
            $scope.active=true;
        }else{
            $scope.active=false;
        }
		
        
        $scope.check = function(x){
          console.log(x);
          if(x==$scope.collapseVar)
            $scope.collapseVar = 0;
          else
            $scope.collapseVar = x;
        };
        
        $scope.Mytrainings = {};
        $scope.trainings = {};
        
		TrainingService.getAll().$promise.then(function(training){
			$scope.trainings = training;
		});

        
        TrainingService.getAll().$promise.then(function(training){
            var Mylist =[];
            console.log(training.length);
			for(var i=0; i<training.length; i++)
            {
                for(var j=0; j<training[i].employees.length; j++)
                {
                    if(training[i].employees[j].id === $rootScope.AuthenticatedUser.userId)
                        Mylist.push(training[i]);
                }
            }
            $scope.Mytrainings = Mylist;
		});
        
        $scope.detailtraining={};
        $scope.detail = function(training){
            $scope.detailtraining=training;
         }
        $scope.employees={};
        
        $scope.showAdd = function(training){
            $scope.detailtraining=training;
            EmployeeService.getAll().$promise.then(function(employee){
                $scope.employees = employee;
            });
        }
        $scope.AddEmp = function(employee){
            var list = [];
            list.push(employee);
            TrainingService.Assign($scope.detailtraining.id,list);
            EmployeeService.getAll().$promise.then(function(employee){
                $scope.employees = employee;
            });
            if(employee.id ==$rootScope.AuthenticatedUser.userId)
                $scope.Mytrainings.push($scope.detailtraining);
        }
        
        $scope.DeleteEmp = function(employee){
            TrainingService.InAssign($scope.detailtraining.id,employee);
            EmployeeService.getAll().$promise.then(function(employee){
                $scope.employees = employee;
            });
            if(employee.id ==$rootScope.AuthenticatedUser.userId)
                $scope.Mytrainings.splice($scope.Mytrainings.indexOf($scope.detailtraining),1);
        }
        
        $scope.verif = function(employee){
            var test=false;
            console.log($scope.detailtraining.title);
            for(var i=0; i<$scope.detailtraining.employees.length; i++)
            {
                console.log($scope.detailtraining.employees[i].id + " " +employee.id);
                if ($scope.detailtraining.employees[i].id==employee.id)
                    {
                        return true;
                    }
            }
            console.log(test);
            return test;
        }
		
	}
	
})();