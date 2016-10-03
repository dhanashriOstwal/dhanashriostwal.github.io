var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume.txt").then(function(response){
			
			
			$scope.resumeVar = response.data;
		});
	}
);
