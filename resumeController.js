var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var ans = {}
			var lines = response.data.split('\n');
			$scope.line = lines
			
			for(var line = 0; line < lines.length; line++)
			{
				alert(line[0])
				/* while (lines[line] != '\n')
				{
					$scope.heading = 
					ans = ans + lines[line];
					ans = ans + '\n';  
				} */
				
				
				
				
			}
			$scope.resumeVar = ans
		});
	}
);
