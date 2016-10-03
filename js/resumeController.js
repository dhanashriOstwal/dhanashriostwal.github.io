var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("/js/resume.txt").success(function(response){
			
			
			$scope.resumeVar = response.data;
		});
	}
);
