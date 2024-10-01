import React, {useState, useEffect, useRef} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as Location from 'expo-location';
import * as Linking from 'expo-linking';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import styles from '../../activity-details/navigation/Navigation.style';
import { COLORS } from '../../../constants';

/**
 * Make a small map for the activity detail
 * @param {*} param0 input the activity as item
 * @returns a small map window
 */
const Navigation = ({item}) => {
  const [userLocation, setUserLocation] = useState({
    longitude: 0,
    latitude: 0,
    longitudeDelta: 0.02,
    latitudeDelta: 0.02,
  });

  const marker = {
    longitude: item.longitude ? item.longitude : 0,
    latitude: item.latitude ? item.latitude: 0,
    longitudeDelta: 0.02,
    latitudeDelta: 0.02,
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      setUserLocation({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: 0.1,
        latitudeDelta: 0.1,
      })
    })()
  }, [])

  const getDirection = async() => {
   try {
    const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${item.latitude},${item.longitude}}`;
    const label = `${item.name}`;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url);
   } catch (error) {
    Alert.alert('Error', error.message)
   }
  }

  return (
    <View style={styles.container}>
        <View style={styles.mapContainer} >
            <MapView
                style={styles.map}
                region={marker}
                showsUserLocation={true}
            >
                <Marker
                    key={`${item.id}`}
                    coordinate={marker}
                >
                    {<FontAwesome name="map-marker" size={24} color={COLORS.tertiary} />}
                </Marker>
            </MapView>
        </View>
        <TouchableOpacity style={styles.button} onPress={getDirection}>
          <FontAwesome5 name="directions" size={24} color={COLORS.primary} />
          <Text style={styles.text}> Get directions </Text>  
        </TouchableOpacity>
    </View>
  );
}

export default Navigation
