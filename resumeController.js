var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var ans = {}
			var lines = response.data.split('\n');
			$scope.line = lines
			
			for(var line = 0; line < lines.length; line++)
			{
				$scope.name = lines[0];
				$scope.email = line[1];
				$scope.phone = line[2];
				$scope.address = line[3]
					
				/* ans = ans + lines[line];
				ans = ans + '\n';  */
				
				
				
				
			}
			$scope.resumeVar = ans
		});
	}
);
