import { useEffect, useState } from "react";
import * as style from "./StyleMap.js"
import SearchBar from "../../components/SearchBar/SearchBar.js";
import { StyleSheet } from "react-native";
import Loader from "../../components/Loading"

import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import getCoordsForAddress from "./location.js"

export default function Map() {
  const [visible, setVisible] = useState(false)
  const [input, setInput] = useState(null)
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)

  async function requestLocationPermition(){
    const { granted } = await requestForegroundPermissionsAsync();

    if(granted){
      const currentPosition = await getCurrentPositionAsync();

      setLatitude(currentPosition.coords.latitude);
      setLongitude(currentPosition.coords.longitude);
    }
  }

  useEffect(() => {
    requestLocationPermition()
  }, [])

  return (
    <style.view>
      <Loader visible={visible}/>
      <SearchBar input={input} setInput={setInput} searchAddress={getCoordsForAddress} setLatitude={setLatitude} setLongitude={setLongitude} setVisible={setVisible}/>
      {latitude && longitude &&
        <MapView 
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.020,
          longitudeDelta: 0.020,
        }}
        
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
        />
      </MapView>
    }
    </style.view>
  );
}

export const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
  }
})