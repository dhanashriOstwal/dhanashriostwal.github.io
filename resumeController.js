var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var headings = ['Home','Objective','Education','CourseWork','Experience','ResearchProject','AcademicProjects','TechnicalSkillset']	
			
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
					if(index === 0)
						json_data['name'] = value;
					if(index === 1)
						json_data['email'] = value;
					if(index === 2)
						json_data['phone'] = value;
					if(index === 3)
						json_data['address'] = value;

				}
 				else{
					found = headings.indexOf(value);
					if(found >= 0){
						key = value;
						json_data[key] = "";
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
			//console.log(JSON.stringify(json_data))
////////////////////////////////////
			$scope.resumeVar = angular.fromJson(json_data);
			$scope.name = $scope.resumeVar.name;
			$scope.email = $scope.resumeVar.email;
			$scope.phone = $scope.resumeVar.phone;
			$scope.address = $scope.resumeVar.address;
			$scope.Objective = $scope.resumeVar.Objective;
			
			//$scope.Education = $scope.resumeVar.Education;
			
			$scope.education = $scope.resumeVar.Education.split('-')
			
			
			
			
			
			
			$scope.Experience = $scope.resumeVar.Experience;
			$scope.CourseWork = $scope.resumeVar.CourseWork ;
			$scope.ResearchProject = $scope.resumeVar.ResearchProject;
			$scope.AcademicProjects = $scope.resumeVar.AcademicProjects;
			$scope.TechnicalSkillset = $scope.resumeVar.TechnicalSkillset;
			
			$scope.mySplit = function(string) {
				console.log(string);
				var array = string.split(',');
				$scope.educationDetails = array;
				
				return $scope.educationDetails;
			}
			
		});
	}
);
