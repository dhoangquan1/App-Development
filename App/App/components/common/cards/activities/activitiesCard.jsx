import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./activitiesCard.style";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { COLORS } from "../../../../constants";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];
const iconSelect = {
  "Swimming": (props) => <FontAwesome6 name="person-swimming" size={12} color="black" {...props}/>,
  "Fishing": (props) => <FontAwesome6 name="fish-fins" size={12} color="black" {...props}/>,
  "Paddling": (props) => <MaterialIcons name="kayaking" size={12} color="black" {...props}/>,
  "Boating and Sailing": (props) => <FontAwesome6 name="sailboat" size={12} color="black" {...props}/>,
  "Hiking, Walk, & Run": (props) => <FontAwesome6 name="person-walking" size={12} color="black" {...props}/>,
}

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
            {
              iconSelect[item.activity]({
                color: '#000'
              })
            }
            <Text style={styles.categoryText}>{item.activity}</Text>
          </View>
          {
            (item.wc_parking) ? (
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