import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./activitiesCard.style";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS, icons } from "../../../../constants";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const ActivitiesCard = ({ item, handleNavigate }) => {

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
          <Text style={styles.detailsText}>
            {item.town}
          </Text>
        </View>
        <View style = {styles.detailsContainer}>
          <FontAwesome5 name="water" size={16} color={COLORS.primary} />
          <Text style={styles.detailsText}>
            {item.rivers.name}
          </Text>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default ActivitiesCard;