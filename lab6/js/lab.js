/*
 * Author: Anna Yu
 * Created: 1 February 2021
 * License: Public Domain
*/

// declaring the variables
var myTransport = [];
var myMainRide = {};

// defining the variables
myTransport = ["car", "bus", "bike", "legs"];
myMainRide = {
              make : "Honda",
              model : "Civic",
              color : "white",
              year : 2014,
              age : function() {
                return 2019 - year;
              }
            };

// output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, "\t"), "</pre>");
