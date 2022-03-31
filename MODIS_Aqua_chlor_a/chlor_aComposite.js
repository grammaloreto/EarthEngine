// Composite chlor_a is very useful to known which pixels(zones) have higher or lower concentrations in a period of time
//Polygon of interest
var geometry = /* color: #ffc82d */ee.Geometry.LineString(
    [[-75.28067085442873, -46.79602569308098],
     [-75.2699793237477, -46.880525529322455],
     [-75.36924812493655, -46.94530223040271],
     [-75.17551480331485, -46.93842393533514],
     [-74.98472664056155, -46.88995875412861],
     [-74.79652208279471, -46.89066605537935],
     [-74.63311747484774, -46.86858915556074],
     [-74.63476122206671, -46.83792075689329],
     [-74.76681488796358, -46.82695412143842],
     [-74.80061651829915, -46.79010826829022],
     [-74.87555000481936, -46.7607584500523],
     [-75.04067278414455, -46.712926539679295],
     [-75.28067085442873, -46.795555615113706]]);

// MODIS-Aqua level 3 product
var dataset = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI')
              .select('chlor_a');

// composite dates
var iniDate = ee.Date.fromYMD(2015,1,1);
var endDate = ee.Date.fromYMD(2015,3,31);

// Selecting characteristics of composite layer
var medianComposite = dataset.filterDate(iniDate,endDate)
                      .median();

var chlor_aVis = {
  min: 0.0,
  max: 9.99,
  gamma:1.3,
}; //min and max of band visualization
 
// Layers
Map.centerObject(geometry);
Map.addLayer(
    medianComposite, chlor_aVis,
    'Chlorophyll a median composite');     