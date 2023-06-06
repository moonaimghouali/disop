import * as L from 'leaflet'
import mapboxgl from 'mapbox-gl';

let Colors = [ "#FF0000",	"#FFFF00","#FFFF00","#7FFF00","#00FF00"]

export const drawRegion = (map, regions, setShow) =>{
  
  regions.map(r => {
    let coordinates = []
    let featureArray = []

    let color
    if (r.id ===1) { color = "#ffa500" } else { color = "#000000" }

    let coord = r.coordonnees
    let array = coord.split(";").map(p=> p.split(",").map(i=> parseFloat(i)))
    let arr = array.slice(0, array.length - 1)   

    for (let i = 0; i < arr.length ; i++) {
     let tmp = arr[i][0]
     arr[i][0] = arr[i][1]
     arr[i][1] = tmp
    }
   
    coordinates = [arr]
    featureArray.push(
      {
        'type': 'Feature',
        'properties': {
          "title": `${r.code_region}`,
          "nom": `${r.nom_region}`
        },
        'geometry': {
        'type': 'Polygon',
        'coordinates': coordinates
        }
      }
    )

    map.on("load", function () {

      map.addSource(`sourceRegion${r.id}`, {
        'type': 'geojson',
        'data': {
        'type': 'FeatureCollection',
        'features': featureArray
          }
        }); // add source

      map.addLayer({
        'id': `layerRegion${r.id}`,
        'type': 'fill',
        'source': `sourceRegion${r.id}`,
        'paint': {
          "fill-color": Colors[r.id +2],
          "fill-opacity" : 0.60,
          'fill-outline-color': "#aaaaaa",
        },
        // 'layout' : {
        //   "text-field"  : ["get", "title"],
        //   "text-font" : ["Open Sans Semibold"],
        //   "text-offset" : [0, 1.25],
        //   "text-anchor" : "top"
        // }
      }); // add layer

        // Center the map on the coordinates of any clicked circle from the 'circle' layer.
        map.on('click', `layerRegion${r.id}`, (e) => {
          
          let coord = e.features[0].geometry.coordinates
          let p  =  new L.Polygon(coordinates)
          var bounds = p.getBounds();
          var center = bounds.getCenter();
          console.log('Polygon clicked!', e.features[0].properties);

          // setShow(prev => !prev )
          map.flyTo({
            center: {lat : center.lng, lng :center.lat  },
            zoom : 6
          });

        }); // on click

      

        // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
        map.on('mouseenter', `layerRegion${r.id}`, () => {
          map.getCanvas().style.cursor = 'pointer';
        });
          
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'circle', () => {
          map.getCanvas().style.cursor = '';
        });

    })  //On load   
   
  })//regions map

    
}