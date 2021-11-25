
// Point or coordinate of interest (Cartagena) and the dataset from sentinel3

var geometry = /* color: #d63000 */ee.Geometry.Point([-75.6529962570977, 10.407545423278675]),
    s3 = ee.ImageCollection("COPERNICUS/S3/OLCI");

// Ocean colors (RGB) bands for visualization, in this case 2,6,and 8//

var rgbVis = {
  min: 0.0,
  max: 400,
  bands: ['Oa02_radiance', 'Oa06_radiance', 'Oa08_radiance'],
};

// filter by date and geometry
var filtered = s3.filter(ee.Filter.date('2019-01-01', '2019-01-05'))
  .filter(ee.Filter.bounds(geometry));
  

// Creating a Mosaic and a Composite image 

var mosaic = filtered.mosaic(); 
 
var medianComposite = filtered.median();

var image = filtered.median();

// 3 layers in my map 

Map.addLayer(filtered, rgbVis, 'Filtered Collection');
Map.addLayer(mosaic, rgbVis, 'Mosaic');
Map.addLayer(medianComposite, rgbVis, 'Median Composite');