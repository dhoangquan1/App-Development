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

import styles from "./Leavenotrace.style";
import { COLORS, SIZES, images } from "../../../constants";

const Leavenotrace = () => {
  const router = useRouter();
  
  const handleCardPress = (item) => {
    router.push({
      pathname: `/rivers/[id]`,
      params: {id : item.id}
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>

        <View>
          <Text style = {styles.title}> {'Practice '}
            <Text style = {[styles.title, {textDecorationLine: "underline"}]}>Leave No Trace </Text>
          </Text>
          <Text style = {styles.text}>
            A guide on how to minimize human impact on nature
          </Text>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.learnMore}>
              Learn more
            </Text>
          </TouchableOpacity>
        </View>

        <Image style = {styles.image} resizeMode='cover' source={images.handplant} />

      </View>
    </View>
  );
};

export default Leavenotrace;