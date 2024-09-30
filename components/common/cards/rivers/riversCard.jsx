import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";

import styles from "./riversCard.style";
import { COLORS, icons } from "../../../../constants";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

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
          <FontAwesome6 name="map-location-dot" size={16} color={COLORS.primary} />
          <Text style={styles.riverAddress} numberOfLines={1}>
            {item.activities[0].count} activities
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