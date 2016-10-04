var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var ans = {}
			var lines = response.data;
			$scope.line = lines.split("\n")
			
			
			console.log($scope.line)
////////////////////////////////////
			$scope.resumeVar = ans
		});
	}
);
