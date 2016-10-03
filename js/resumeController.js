var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl",['$scope', '$http', function($scope,$http)
	{
		$http.get('resume.txt').success(function(data){
			$scope.resumeVar = data
		});
	}]
);