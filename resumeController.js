var app = angular.module('personalWebsite',[]);

app.controller('resumeCtrl', function($scope,$http)
	{
		$scope.fname = "Dhanashri"
		$http.get('resume.txt').then(function(response){
			$scope.Jsoned = angular.fromJson(response.data)
			
			$scope.resumeVar = response.data;
		});
	}
);
