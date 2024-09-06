import React, {useState, useEffect, useRef} from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Platform, Text, View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import useSupabase from '../services/useSupabase';
import { getAllActivities } from '../services/getData';
import { COLORS } from '../constants';

const Site = () => {
    return (
        <SafeAreaView>
            <Text>Site</Text>
        </SafeAreaView>
    );
}

export default Site