import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation'
import { Location } from '../interfaces/app-interfaces';

export const useLocation = () => {

  const [hasLocation, setHasLocation] = useState(false);
  const [initialPosition, setInitialPosition] = useState<Location>({
    latitude: 0,
    longitude: 0
  });
  
  const [userLocation, setUserLocation] = useState<Location>({
    longitude: 0,
    latitude: 0
  });
  
  useEffect(() => {

    getCurrentLocation()
      .then( location => {
        setInitialPosition(location);
        setUserLocation(location);
        setHasLocation(true);
      });
      
  }, []);

  const getCurrentLocation = (): Promise<Location> => {
    return new Promise( (resolve, reject) => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          resolve({
            latitude: coords.latitude,
            longitude: coords.longitude
          });  
        },
        (err) => reject({ err }), { enableHighAccuracy: true }
      );
    });
  }
  
  const followUserLocation = () => {
    Geolocation.watchPosition(
      ({ coords }) => {



          const location: Location = {
              latitude: coords.latitude,
              longitude: coords.longitude
          }

          setUserLocation( location );

      },
      (err) => console.log(err), { enableHighAccuracy: true, distanceFilter: 10 }
  );
  }

  return {
    hasLocation,
    initialPosition,
    getCurrentLocation,
    followUserLocation
  }
}