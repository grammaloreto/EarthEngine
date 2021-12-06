
/*
The Color Index (CI) algorithm returns the near-surface concentration 
of chlorophyll-a (chlor_a) in mg m-3 using remote sensing 
reflectances (Rrs) in the blue-to-green region of the visible spectrum.


INPUT:
Remote Sensing Reflactance (Rrs) at 2-4 wavelengths between 440 and 670nm
in this example Rrs_645, Rrs_555 and Rrs_443.

OUTPUT:
chlor_a, concentration of chlorophyll a in mg/m-3

MODEL: CI ALgorithm
    Calculates the Color Index (CI) by difference in reflectance of bands from input image
   
    Formulation:
      result = Green - [ Blue + (lambdaGreen - lambdaBlue) / (lambdaRed - lambdaBlue) * (Red - Blue) ]
    Where :
      Red, Green, Blue are Reflectances in the respective bands of sat image
      lambdaRed, lambdaGreen, lambdaBlue
        are instrument-specific wavelengths closest to 645, 555, 443 
        respectively of bands
  */

   

// dataset from MODIS AQUA ImageCollection

var dataset = ee.ImageCollection('NASA/OCEANDATA/MODIS-Aqua/L3SMI')
                  .filterDate('2015-02-01', '2015-02-27');
                  
var rrs = dataset.select(['Rrs_645', 'Rrs_555', 'Rrs_443']);

var RRSVis = {
  min: 0.0,
  max: 0.011,
};

Map.setCenter(-75.3510, -46.3911, 4); // South of Chile(Golfo de Penas)
Map.addLayer(rrs, RRSVis,'Remote Sensing Reflectance');

       
// CI Function (formula) to calcule chloropyll-a concentration from
// Rrs_645(red), Rrs_555(green), Rrs_443(blue) sensor bands        
        
        
        function CI(dataset){
        var result = dataset.expression(
            'Green - ( Blue + (lambdaGreen - lambdaBlue) / (lambdaRed - lambdaBlue) * (Red - Blue) )',
            {
              'Red' : dataset.select('Rrs_645'),
              'lambdaRed' : 645,
              'Green' : dataset.select('Rrs_555'),
              'lambdaGreen' : 555,
              'Blue' : dataset.select('Rrs_443'),
              'lambdaBlue' : 443
            });
          return result;
        }