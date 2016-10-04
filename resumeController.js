var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var headings = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var json_data = {}
			var lines = response.data;
			var flag = 0;
			var key = "";
			var found = "";
			//var i = 0;
			$scope.line = lines.split("\n")
			//console.log($scope.line)
			
			//console.log($scope.line)
			angular.forEach($scope.line, function(value, index) {
				if(index < 4){
					json_data[index] = value;
				}
 				else{
					found = headings.indexOf(value);
					if(found >= 0){
						key = value;
						//i = 0;
					}
					else{
						if(value != ""){
							value = value + "-"
							json_data[key] = json_data[key] + value
							//i = i + 1;
						}
						
					}
				} 
				//console.log(index + ': ' + value);
				
			});
			console.log(JSON.stringify(json_data))
////////////////////////////////////
			$scope.resumeVar = angular.JSON(json_data)
		});
	}
);
