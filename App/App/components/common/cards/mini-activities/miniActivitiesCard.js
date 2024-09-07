import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./miniActivitiesCard.style";

import { COLORS, icons } from "../../../../constants";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const MiniActivitiesCard = ({ item, handleNavigate }) => {

  if(item.name !== 'special')
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode='cover'
          style={styles.imageContainer}
        />

      <View style={styles.textContainer}>
        
        <View style = {styles.detailsContainer}>
          <View style={styles.categoryContainer(item.activity)}>
            {icons.IconSelect(item.activity, 12)}
            <Text style={styles.categoryText}>{item.activity}</Text>
          </View>
          {
            (item.activities_tags.some(tag => tag.tag === "Wheelchair Parking")) ? (
              <FontAwesome6 name="wheelchair" size={15} color="black" />
            ) : (
              null
            )
          }

        </View>

        <Text style={styles.activityName} numberOfLines={1}>
          {item.name}
        </Text>
        <View style = {styles.detailsContainer}>
          <Entypo name="location" size={16} color={COLORS.primary} />
          <Text style={styles.detailsText} numberOfLines={1}>
            {item.address}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default MiniActivitiesCard;