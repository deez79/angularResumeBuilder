(function(){
	var app = angular.module('resumeBuilder', []);


app.controller('PersonalController', ['$scope', '$http',
	function($scope, $http){
		
		$scope.personalD = {};						//create a personal object
		
		$http({										//make a call and get the data
			method: 'GET',
			url: 'data/personalData.json'			//json dataset
		})
			.success(function(data){				//if data returns correctly
									
				$scope.personalD = data;				//save data in work object
				
				// console.log($scope.personal); 							//FOR DEBUGGING
				//alert('PersonalController success! Hooray!!!'); 			//FOR DEBUGGING
			})
			.error(function(data){					//if data fails to return
				//something went wrong
				alert('PersonalController go boom!!!');						//FOR DEBUGGING
			})
	}
]); //end PersonalController



app.controller('JobController', ['$scope', '$http',
	function($scope, $http){
		
		$scope.jobHistory = {};						//create a jobHistory object
		
		$http({										//make a call and get the data
			method: 'GET',
			url: 'data/testResume.json'					//json dataset
		})
			.success(function(data){				//if data returns correctly
									
				$scope.jobHistory = data;			//save data in work object
				
				//console.log($scope.jobHistory); 						//FOR DEBUGGING
				//alert('JobController success! Hooray!!!'); 			//FOR DEBUGGING
			})
			.error(function(data){					//if data fails to return
				//something went wrong
				alert('JobControler go boom!!!');						//FOR DEBUGGING
			})
	}
]); //end JobController



app.controller('EducationController', ['$scope', '$http',
	function($scope, $http){
		$scope.educationD = {};						//create a educationD object

		$http({
			method: 'GET', 
			url: 'data/testEducation.json'				// json dataset
		})

			.success(function(data){

				$scope.educationD = data;

				//console.log($scope.educationD);							//FOR DEBUGGING
				//alert('EducationController success! Woot Woot!');			//FOR DEBUGGING
			})

			.error(function(data){
				//something went wrong
				alert('EducationController no likey your code!');			//FOR DEBUGGING
			})
	}
]); //end EducationController



}) ();