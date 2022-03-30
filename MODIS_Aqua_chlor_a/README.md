# MODIS (Moderate Resolution Imaging Sprectroradiometer) in Aqua satellite

Aqua MODIS are viewing the entire Earth's surface every 1 to 2 days, acquiring data in 36 spectral bands, or groups of wavelengths.

In the Modis-Aqua dataset of the GGE we can find other products such the **chlorophyll a** algorithm. 

This algorithm returns the near-surface concentration of **chlorophyll-a (chlor_a) in mg m-3**, calculated using an empirical relationship derived from in situ measurements of chlor_a and remote sensing reflectances (Rrs) in the blue-to-green region of the visible spectrum.

The current implementation for the default chlorophyll algorithm (chlor_a) employs the standard OC3/OC4 (OCx) band ratio algorithm merged with the color index (CI) of Hu et al. (2012).

**CI algorithm**

![CI_algorithm](https://user-images.githubusercontent.com/91697343/160941362-9e256bc7-4b72-4637-a708-f8502582f1c4.PNG)

**OCx algorithm**

![OCx_algorithm](https://user-images.githubusercontent.com/91697343/160941479-50b263e9-8489-4974-a7be-887615a5cff9.PNG)

* Info from Ocean Color Web of Nasa.




