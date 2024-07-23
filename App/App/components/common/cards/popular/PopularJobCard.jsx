import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.facname}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item?.town}
        </Text>

        <View style={styles.infoWrapper}>
          <Text style={styles.publisher}>
            {item?.facility_t} -
          </Text>
          <Text style={styles.location}> 
            {item.maintresp}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;