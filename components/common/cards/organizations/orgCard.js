import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./orgCard.style";

import { COLORS } from "../../../../constants";

const OrgCard = ({ item, handleNavigate }) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode='contain'
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.activityName} numberOfLines={1}>
          {item.name}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigate}>
          <Text style={styles.buttonText}> Visit their website </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrgCard;