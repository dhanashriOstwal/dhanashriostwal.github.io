var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume.txt").then(function(response){
			
			
			// $scope.resumeVar = response.data;
			var ans = ''
			var lines = response.data.split('\n');
			for(var line = 0; line < lines.length; line++)
			{
				ans = ans + lines[line] + '\n'; 
			}
			$scope.resumeVar = ans
		});
	}
);
