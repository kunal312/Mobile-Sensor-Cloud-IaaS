sensorCloud.controller("viewsensorsController", function(data,$scope,$http,$window,$state) {

    console.log("Reached viewsensorsController");

    console.log("Sensors:" +data.sensors[1].platform);
    $scope.sensors = data.sensors;


});

