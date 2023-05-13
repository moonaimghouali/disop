import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import geoJson from "./sh.json";
import { drawRegion } from './Utils'
import {DropDownListComponent } from '@syncfusion/ej2-react-dropdowns'
import './map.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoib3Vzc2FtYWJlbmFrbW91bWUiLCJhIjoiY2xleW5odmdsMWs0eDN3bWtmMmozejR3NyJ9.oRCpsgixzLYvCEcXf9E-5g';


const MapView = ({regions, setShow}) => {

    const mapContainerRef = useRef(null);
    const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }));
    const [mapObj, setMapObj] = useState({})
    // const isMounted = useRef(true);

    const [lng, setLng] = useState(1.6596);
    const [lat, setLat] = useState(28.0339);
    const [zoom, setZoom] = useState(4);
  
    // Initialize map when component mounts
    useEffect(() => {

      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
      });
      
      // Add zoom and rotation controls to the map.
      map.addControl(new mapboxgl.NavigationControl(), "top-right");
  
      map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(6));
      });

      setMapObj(map)

      if (regions.length >0) drawRegion(map, regions, setShow) 

      // Clean up on unmount
      return () => map.remove();
    }, [regions]); 

    // useEffect(()=>{
    //   drawRegion(mapObj, regions)
    // },[regions, mapObj])



  return (
    <div className='h-full w-full overflow-clip rectangle-container'>
      
      <div className="w-fit p-2 menu">
        <DropDownListComponent  value="Regions"  id="entites" dataSource={['Regions', 'Unites', 'Perimetres']} placeholder="Localiser les ..." ></DropDownListComponent>
      </div>
      
      <div className='sidebarStyle'>
        <div>
          long: {lng} | lat: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='h-[90%] w-full' ref={mapContainerRef} />
    </div>
  )
}

export default MapView