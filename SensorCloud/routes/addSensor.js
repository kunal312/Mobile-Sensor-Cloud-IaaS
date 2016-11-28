var ejs = require("ejs");
var mysql = require('./mysql');
var express = require('express');
var router = express.Router();



router.post('/addSensor',function(req,res,next)
{

    console.log("Reaced Add Sensor Routes");
    console.log("Platforms:" +req.body.platform);
    console.log("sensortype:" +req.body.sensortype);
    console.log("sensormode:" +req.body.sensormode);
    console.log("connectivity:" +req.body.connectivity);
    console.log("storage:" +req.body.storage);
    console.log("resourceallocation:" +req.body.resourceallocation);
    console.log("sensorlng:" +req.body.sensorlng);
    console.log("sensorlat:" +req.body.sensorlat);


    var addSensors='INSERT INTO sensors (platform,sensortype,sensormode, connectivity,storage,resourceallocation,sensorlat,sensorlng) VALUES ("' +req.body.platform + '", "' + req.body.sensortype + '", "' + req.body.sensormode + '", "' + req.body.connectivity + '",  "'+ req.body.storage +'","'+ req.body.resourceallocation +'","'+ req.body.sensorlat +'","'+ req.body.sensorlng +'")';

    mysql.getItems(function(err,results){


            if(err){
                throw err;
            }
            else
            {
                if(results!== undefined){

                    console.log("sensor added into database");

                    console.log("Results: " + results);


                    json_responses = {"statusCode" : 200 } ;
                    console.log(json_responses);
                    res.send(json_responses);

                }
                else {

                    console.log("Cannot add sensors  into Database");

                    json_responses = {"statusCode" : 401 };
                    console.log(json_responses);
                    res.send(json_responses);


                }
            }
        },addSensors);




})

//Fetching Sensors

router.post('/viewSensors',function(req,res,next)
{

    console.log("Reached View Sensor Routes");



    var getSensors="select * from sensors";

    mysql.getItems(function(err,results){


        if(err){
            throw err;
        }
        else
        {
            if(results.length > 0){

                console.log("sensor fetched from database");

                console.log("Results: " + results);


                json_responses = {"statusCode" : 200 ,"sensors":results} ;
                console.log(json_responses);
                res.send(json_responses);

            }
            else {

                console.log("Cannot fetch sensors  into Database");

                json_responses = {"statusCode" : 401 };
                console.log(json_responses);
                res.send(json_responses);


            }
        }
    },getSensors);



})
module.exports= router;