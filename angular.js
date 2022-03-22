
var cntryApp  =  angular.module('cntryApp', [])
cntryApp.controller('countries', function($scope, $http){
	$http.get('https://restcountries.com/v2/all') 
   .success(function (data){
		$scope.countries = data;
	})
   
   $scope.orderByName    = 'name';
   $scope.orderByArea    = 'area';
   $scope.orderByRegion  = 'region';
   $scope.reverseSort    = false;
   $scope.currentPage = 1;
   $scope.pageSize = 10;
   
});





