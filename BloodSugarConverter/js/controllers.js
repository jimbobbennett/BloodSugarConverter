var bloodSugarConversionApp = angular.module('BloodSugarConversionApp', []);

bloodSugarConversionApp.controller('BloodSugarConversionCtrl', function ($scope)
{
    $scope.usMeasurement = 0;
    $scope.internationalMeasurement = 0;

    $scope.changeUSMeasurement = function()
    {
        $scope.internationalMeasurement = Math.round(($scope.usMeasurement / 18) * 10) / 10;
    };

    $scope.changeInternationalMeasurement = function()
    {
        $scope.usMeasurement = Math.round(($scope.internationalMeasurement * 18) * 10) / 10;
    };
});