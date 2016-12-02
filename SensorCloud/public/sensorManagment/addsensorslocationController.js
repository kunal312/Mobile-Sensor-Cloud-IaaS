sensorCloud.controller("addsensorslocationController", function($scope,$http,$window,$state,$stateParams,NgMap) {

    console.log("Reached addsensorslocationController");
    

    $scope.platforms = $stateParams.platforms;
    $scope.sensortype = $stateParams.sensortype;
    $scope.physicalsensor = $stateParams.physicalsensor;
    $scope.connectivity = $stateParams.connectivity;
    $scope.storage = $stateParams.storage;
    $scope.resourceallocation = $stateParams.resourceallocation;
    
    	
    	
//    	"platforms" :  $scope.platforms,
//        "sensortype" :$scope.sensortype,
//        "physicalsensor" :$scope.physicalsensor,
//        "connectivity" :$scope.connectivity,
//        "storage" :$scope.storage,
//        "resourceallocation" :$scope.resourceallocation});
// 	
//    	
    	
    	
    	
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

    
    
    $scope.getCurrentLocation = function(e,p)
    {
    	console.log(e);
    	console.log(p);
    	console.log("latitude:"+e.latLng.lat());
    	console.log("longitude:"+e.latLng.lng());
    	$scope.selectedlocation = "Latitude:"+e.latLng.lat()+" Longitude:"+e.latLng.lng()+"";
    	$scope.latitude = e.latLng.lat();
    	$scope.longitude = e.latLng.lng();
    }
//
//    $scope.showproperty = function(e,p){
//
//        $scope.p = p;
//        $scope.showInfoWindow('bar', p._id);
//        $scope.limage = p.listingImages[0][0];
//        console.log("Image URL:"+$scope.limage);
//    };
    
    $scope.addsensor=function(platforms,sensortype,physicalsensor,connectivity,storage,resourceallocation)
    {
    	$http({

			method : "POST",
			url: '/addSensor',
			data: {
					"platform": $scope.platforms,
					"sensortype":  $scope.sensortype,
					"sensormode":  $scope.physicalsensor,
					"connectivity":  $scope.connectivity,
					"storage":  $scope.storage,
					"resourceallocation": $scope.resourceallocation,
					"sensorlng": $scope.longitude,
					"sensorlat": $scope.latitude
	    	
				}

			}).success(function(data)
				{

					console.log("Status Code " + data.statusCode);
					if(data.statusCode==200)
						{
							alert("Sensor Added Successfully");
							

						}

						else if(data.statusCode==401)
							{
							console.log(data.statusCode);
							alert("Sensor Cannot be added");

							
							}

							
						
						
				})
    }


})
