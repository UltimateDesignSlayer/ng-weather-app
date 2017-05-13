weatherApp.controller('SearchController', ['$scope', '$rootScope', '$http', '$filter', function($scope, $rootScope, $http, $filter){
  $http.get('js/data/city.json')
    .then(function(response) {
        console.log('data received.');
        $scope.fullCityList = response.data;
    });
  $scope.cityQuery = "";
  $scope.cityResults = false;

  $scope.filterCityList = function() {
    //only execute filter if there are at least 4 letters

    if($scope.cityQuery.length < 4) {
      alert('Please enter at least 4 characters.');
      return false;
    }

    $scope.filteredCityList = $scope.fullCityList.filter(function(city){
      return city.name.toLowerCase().indexOf($scope.cityQuery.toLowerCase()) > -1;
    });
    $scope.cityResults = true;
    // *** Doing it the Angular way. This performs SLOWER!! ***
    // $scope.filteredCityList = $filter('filter')($scope.fullCityList, $scope.cityQuery);

  };

  // API from here: https://openweathermap.org/current
  $scope.getLocationWeather = function(cityId){
    $scope.cityResults = false;
    $http.get('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&units=metric&appid=' + apiKey)
      .then(function(response) {
        $rootScope.$broadcast('weatherResults', response.data);
      });
  }
}])
.directive('searchDirective', function(){
  return {
    controller: 'SearchController',
    templateUrl: 'js/directives/search/search.html'
  }
});
