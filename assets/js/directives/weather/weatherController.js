weatherApp.controller('WeatherController', ['$scope', '$rootScope', function($scope, $rootScope){

  $rootScope.$on('weatherResults', function (event, data) {
    $scope.weatherResults = data;
    $scope.weatherDetails = $scope.weatherResults.weather[0];
    $rootScope.weatherStateClass = 'weather-state-' + $scope.weatherDetails.icon;

    switch($scope.weatherResults.weather[0].icon) {
      case '01d':
        $scope.weatherAnimation = 'sunny';
        $scope.skyColourClass = 'weather-animation--day-blue';
        break;
      case '01n':
        $scope.weatherAnimation = 'starry';
        $scope.skyColourClass = 'weather-animation--night';
        break;
      case '02d':
        $scope.weatherAnimation = 'cloudy';
        $scope.skyColourClass = 'weather-animation--day-blue';
        break;
      case '02n':
        $scope.weatherAnimation = 'cloudy cloudy--night';
        $scope.skyColourClass = 'weather-animation--night';
        break;
      case '03d':
        $scope.weatherAnimation = 'cloudy';
        $scope.skyColourClass = 'weather-animation--day-blue';
        break;
      case '03n':
        $scope.weatherAnimation = 'cloudy cloudy--night';
        $scope.skyColourClass = 'weather-animation--night';
        break;
      case '04d':
        $scope.weatherAnimation = 'cloudy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '04n':
        $scope.weatherAnimation = 'cloudy cloudy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      case '09d':
        $scope.weatherAnimation = 'rainy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '09n':
        $scope.weatherAnimation = 'rainy rainy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      case '10d':
        $scope.weatherAnimation = 'rainy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '10n':
        $scope.weatherAnimation = 'rainy rainy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      case '11d':
        $scope.weatherAnimation = 'stormy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '11n':
        $scope.weatherAnimation = 'stormy stormy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      case '13d':
        $scope.weatherAnimation = 'snowy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '13n':
        $scope.weatherAnimation = 'snowy snowy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      case '50d':
        $scope.weatherAnimation = 'foggy';
        $scope.skyColourClass = 'weather-animation--day-grey';
        break;
      case '50n':
        $scope.weatherAnimation = 'foggy foggy--night';
        $scope.skyColourClass = 'weather-animation--night-grey';
        break;
      default:
        $scope.weatherAnimation = 'sunny';
        $scope.skyColourClass = 'weather-animation--day-blue';
    }
  });

}])
.directive('weatherDisplayDirective', function() {
  return {
    controller: 'WeatherController',
    templateUrl: 'js/directives/weather/weather.html'
  }
});
