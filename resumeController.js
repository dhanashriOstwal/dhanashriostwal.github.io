var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var ans = {}
			var lines = response.data;
			$scope.line = lines.split(/\n//\n/)
			console.log($scope.line)
			
			
			/* for(var i = 1 ; i < lines.length;i++)
			{
				while(lines[i]!=' ')
					alert(lines[i])
			} */
			/* for(var line = 0; line < lines.length; line++)
			{
				
				/* while (lines[line] != '\n')
				{
					$scope.heading = 
					ans = ans + lines[line];
					ans = ans + '\n';  
				} 
				
				
				
				
			} */
			$scope.resumeVar = ans
		});
	}
);
