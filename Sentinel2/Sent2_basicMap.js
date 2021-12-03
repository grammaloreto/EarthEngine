
// Location of interest(Barranquilla Colombia) and data source(sent2)
var quilla = ee.Geometry.Point([-74.82605265595836, 11.013642915391868]),
    sent2 = ee.ImageCollection("COPERNICUS/S2");

// Filters including clouds %, dates and geometry
var filtros = sent2.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
  .filter(ee.Filter.date('2020-02-02', '2021-02-02'))
  .filter(ee.Filter.bounds(quilla));

print(filtros.size()); // in this case 37 

// Visualization variables: wavelength and bands
var rgbVis = {
  min: 0.0,
  max: 3000,
  bands: ['B4', 'B3', 'B2'],
};

// Map with one layer called Filtered (with all filters included)
Map.addLayer(filtros, rgbVis, 'Filtered');    

