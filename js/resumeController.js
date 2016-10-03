
var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl",['$scope', '$http', function($scope,$http)
	{
		$scope.fname = "Dhanashri";
		alert("Inside controller");
		$http.get("resume.txt").success(function(data){
			alert("Inside get");
			$scope.resumeVar = JSON.parse(data);
		});
	}]
);
