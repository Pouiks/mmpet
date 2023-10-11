"use client"

import { useEffect, useState } from 'react';

export default function Geolocation() {
  const [coordinates, setCoordinates] = useState(null);



  return (
    <div>
      {coordinates ? (
        <div>
          <p>Latitude : {coordinates.latitude}</p>
          <p>Longitude : {coordinates.longitude}</p>
        </div>
      ) : (
        <p>En attente de la géolocalisation...</p>
      )}
    </div>
  );
}