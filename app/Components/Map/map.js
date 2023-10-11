"use client"
import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api';
import Titre from '../Titre/page.js';
import theme from '../../theme/typo.js';



const Map = (props) => {
  const [lat, setLat] = useState(43.610769);
  const [lng, setLong] = useState(3.876716);
  const [zoom, setZoom] = useState(8) 

  const libraries = useMemo(() => ['places'], []);

  const mapCenter = { lat, lng };

 
  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GAK,
    libraries: libraries,
  });
  
  useEffect(() => {
    const getLocation = () =>
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude);
        setLong(longitude);
        setZoom(15)
      });

    if (isLoaded) {
      getLocation();
    }


  }, [isLoaded]);

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ height: '500px', background: '#E09037', width: '100%', display:"flex", flexDirection:"column", justifyContent:'space-evenly', margin: "0 auto" }}>
      <Titre title="RECHERCHEZ DES COMPAGNONS AUTOUR DE VOUS" />
      {lat && (
        <div style={{display:"flex", flexDirection:"column"}}>
          <input
          style={{width:"60%", margin: "20px auto"}}
          type='adress'
          onClick={() => console.log("toto")}
          placeholder="Entrez l'adresse que vous souhaitez rechercher"
          >
          </input>
          <GoogleMap
          options={mapOptions}
          zoom={zoom}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '60%', height: '300px', margin: '0 auto' }}
          onLoad={() => console.log('Chargement de la carte...')}
        >
          <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
        </GoogleMap>
        </div>
        
      )}
    </div>
  );
};

export default Map;
