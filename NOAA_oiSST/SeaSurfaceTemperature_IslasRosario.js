
// 11 points inside Parque Nacional Natural Islas del Rosario Colombia
// High Coral coberture, temperature affects corals health.

var geometry = ee.Geometry.MultiPoint(
    [[-75.62019364791692, 10.227979714458238],
     [-75.64353959518255, 10.203652358176807],
     [-75.67718522506536, 10.168694367594597],
     [-75.72044389205755, 10.15990806900956],
     [-75.76095597701848, 10.13827922879686],
     [-75.77056901412786, 10.188969518589298],
     [-75.72731034713567, 10.107554895326619],
     [-75.79185502487005, 10.112962760243013],
     [-75.77125565963567, 10.170721940648377],
     [-75.73486344772161, 10.189645334762563],
     [-75.75889604049505, 10.11259308487564]]);


     // Data: Optimum Interpolation Sea Surface Temperature from NOAA ImageCollection
     var dataset = ee.ImageCollection('NOAA/CDR/OISST/V2_1')
     .filter(ee.Filter.date('1995-06-01', '1995-06-14')) //data since 1881
     .filterBounds(geometry);// 11 points
          
     //Selecting Sea Surface Temperature (SST) data from the set
     var SST = dataset.select('sst'); // scale 0.01

     // visualization parameters
     var visParams = {
        min: -180.0,
        max: 3000.0,
        palette: [
'040274', '040281', '0502a3', '0502b8', '0502ce', '0502e6',
'0602ff', '235cb1', '307ef3', '269db1', '30c8e2', '32d3ef',
'3be285', '3ff38f', '86e26f', '3ae237', 'b5e22e', 'd6e21f',
'fff705', 'ffd611', 'ffb613', 'ff8b13', 'ff6e08', 'ff500d',
'ff0000', 'de0101', 'c21301', 'a71001', '911003'
],
};


Map.centerObject(geometry);
Map.addLayer(SST, visParams, 'Sea Surface Temperature');



