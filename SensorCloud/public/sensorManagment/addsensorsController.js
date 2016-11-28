sensorCloud.controller("addsensorsController", function($scope,$http,$window,$state,NgMap) {

    console.log("Reached addsensorsController");


    $scope.sensordetails = function(platforms,sensortype,physicalsensor,connectivity,storage,resourceallocation){

        $scope.platforms = platforms;
        $scope.sensortype = sensortype;
        $scope.physicalsensor = physicalsensor;
        $scope.connectivity=connectivity;
        $scope.storage=storage;
        $scope.resourceallocation = resourceallocation;

        console.log("platform " + $scope.platforms);
        console.log("sensortype " + $scope.sensortype);
        console.log("Sensor mode " + $scope.physicalsensor);
        console.log("connectivity " + $scope.connectivity);
        console.log("storage " + $scope.storage);
        console.log("resource allocation " + $scope.resourceallocation);


        $state.go("managesensors.addsensors2location",{"platforms" :  $scope.platforms,
                                            "sensortype" :$scope.sensortype,
                                            "physicalsensor" :$scope.physicalsensor,
                                            "connectivity" :$scope.connectivity,
                                            "storage" :$scope.storage,
                                            "resourceallocation" :$scope.resourceallocation});


    };








});








