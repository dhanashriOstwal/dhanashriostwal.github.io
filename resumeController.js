var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var json_data = {}
			var lines = response.data;
			var flag = 0;
			var key = "";
			$scope.line = lines.split("\n")
			console.log($scope.line)
			
			//console.log($scope.line)
			angular.forEach($scope.line, function(value, index) {
				if(index <= 4){
					json_data[index] = value;
				}
 				else{
					
					if(value === ""){
						console.log(index)
					}
				} 
				//console.log(index + ': ' + value);
				
			});
			console.log(json_data)
////////////////////////////////////
			$scope.resumeVar = json_data
		});
	}
);
