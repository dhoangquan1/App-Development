import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

import styles from "./riversCard.style";
import { COLORS, icons } from "../../../../constants";
import Entypo from '@expo/vector-icons/Entypo';

const RiversCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      onPress={() => handleCardPress(item)}
    >
      <ImageBackground
          source={{uri: item.image ? item.image : 'https://t3.ftcdn.net/jpg/01/13/46/78/360_F_113467839_JA7ZqfYTcIFQWAkwMf3mVmhqXr7ZOgEX.jpg'}}
          resizeMode='cover'
          style={styles.riverImage}
      >

      <View style={styles.infoContainer}>
        <View style={styles.addressContainer}>
          <Entypo name="location" size={16} color={COLORS.primary} />
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