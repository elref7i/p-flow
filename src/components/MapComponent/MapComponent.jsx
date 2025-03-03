import { useEffect, useRef } from 'react';
import { Map, Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

const MAPTILER_API_KEY = 'RDRYX9wGbz3CHxvujlJe'; // استبدلها ب MapTiler API Key

export default function MapComponent() {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new Map({
      container: mapContainer.current,
      style:
        'https://api.maptiler.com/maps/streets/style.json?key=' +
        MAPTILER_API_KEY,
      center: [31.017066749999998, 30.53782525],
      zoom: 10,
    });

    new Marker({ color: '#FF0000' })
      .setLngLat([31.017066749999998, 30.53782525])
      .addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
}
