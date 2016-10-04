var app = angular.module("personalWebsite",[])

app.controller("resumeCtrl", function($scope,$http)
	{
		
		$http.get("resume1.txt").then(function(response){
		var arrNavigate = ['Home','Objective','Education','Relevant Course Work','Professional Experience','Projects','Technical Skills']	
			
			// $scope.resumeVar = response.data;
			var ans = {}
			var lines = response.data;
			//$scope.line = lines.split("\\n\\n")
			
			
			BufferedReader in = new BufferedReader(new FileReader("resume1.txt"));

			List<String> allStrings = new ArrayList<String>();
			String str ="";
			while(true)
			{
				String tmp = in.readLine();
				if(tmp.isEmpty())
				{
				  if(!str.isEmpty())
				  {
					  allStrings.add(str);
				  }
				  str= "";
				}
				else if(tmp==null)
				{
					break;
				}
				else
				{
				   if(str.isEmpty())
				   {
					   str = tmp;
				   }
				   else
				   { 
					   str += "\\n" + tmp;
				   }
				}
			}
			$scope.line = allStrings;
			console.log($scope.line)
////////////////////////////////////
			$scope.resumeVar = ans
		});
	}
);
