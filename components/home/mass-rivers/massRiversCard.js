import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import * as Linking from 'expo-linking';

import styles from "./massRiversCard.style";
import { COLORS, SIZES, images } from "../../../constants";

const MassRiversCard = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>

        <View style={styles.textContainer}>
          <Text style = {styles.title}> 
            Massachusetts Rivers Alliance
          </Text>
          <Text style = {styles.text}>
            Our mission is to protect and restore the Commonwealth's rivers and streams
          </Text>
          <TouchableOpacity style = {styles.button} onPress={() => Linking.openURL('https://www.massriversalliance.org')}>
            <Text style = {styles.buttonText}>
              Visit our website
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.imageBackground}>
            <Image style = {styles.image} resizeMode='contain' source={images.logo} />
        </View>

      </View>
    </View>
  );
};

export default MassRiversCard;