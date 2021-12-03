// Sentinel 2 and location (Medellin) in a Polygon
var sent2 = ee.ImageCollection("COPERNICUS/S2"),
medellin = ee.Geometry.Polygon(
    [[[-75.78099267217412, 6.374826238799363],
      [-75.78099267217412, 5.978884712866472],
      [-75.06688134404912, 5.978884712866472],
      [-75.06688134404912, 6.374826238799363]]], null, false);
      
      // filters: cloud%, dates and the geometry or location
      var filtro = sent2.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
      .filter(ee.Filter.date('2019-02-02', '2020-02-02'))
      .filter(ee.Filter.bounds(medellin));

      // red-green-blue visualization - bands
      var rgbVis = {
        min: 0.0,
        max: 3000,
        bands: ['B4', 'B3', 'B2'],
      };
      
      // variables to mosaic and composite the ImageCollection
      // using the median() function to create a composite 
      // this means each pixel value is the median of all pixels from the pile
      var mosaico = filtro.mosaic();
      
      var medianComposite = filtro.median();

      // Map with 2 layers: mosaic and mediancomposite.
      Map.addLayer(mosaico, rgbVis, 'Mosaic');
      Map.addLayer(medianComposite, rgbVis, 'Median Composite');
      