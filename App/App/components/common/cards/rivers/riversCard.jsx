import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

import styles from "./riversCard.style";
import { icons } from "../../../../constants";
import { checkImageURL } from "../../../../utils";
import Entypo from '@expo/vector-icons/Entypo';

const RiversCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleCardPress(item)}
    >
      <ImageBackground
          source={{uri: (item.image)}}
          resizeMode='cover'
          style={styles.riverImage}
      >

      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <Entypo name="location" size={16} color="black" />
          <Text style={styles.riverAddress} numberOfLines={1}>
            {item.address}
          </Text>
        </View>
        <Text style={styles.riverName} numberOfLines={1}>
          {item.name}
        </Text>
      </View>

      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RiversCard;