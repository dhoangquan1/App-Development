import { View, Text, TouchableOpacity, Image } from "react-native";

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "./activitiesCard.style";
import { COLORS, icons } from "../../../../constants";
import {StarRatingDisplay} from 'react-native-star-rating-widget';


const ActivitiesCard = ({ item, handleNavigate }) => {

  if(item.name !== 'special')
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate(item)}>
        <Image
          source={{
            uri: item.image,
          }}
          resizeMode='cover'
          style={styles.imageContainer}
        />

      <View style={styles.textContainer}>
        
        {/*Category and accessibility symbols line */}
        <View style = {styles.topDetailsContainer}>
          <View style={styles.categoryContainer(item.activity)}>
            {icons.IconSelect(item.activity, 12)}
            <Text style={styles.categoryText}>{item.activity}</Text>
          </View>
          {(item.tags.some(tag => tag.name === "Wheelchair Entrance")) && (
            <FontAwesome6 name="wheelchair" size={16} color="black" />
          )}
        </View>

        {/*Name line */}
        <Text style={styles.activityName} numberOfLines={1}>
          {item.name}
        </Text>

        {/*Star rating line */}
        <View style={styles.rating}>
          <StarRatingDisplay
            rating={item.ave_rating}
            color={COLORS.secondary}
            starSize={20}
            starStyle={{marginHorizontal: 0}}
          />
          <Text style={styles.aveRatingText}> {item.ave_rating.toFixed(1)} </Text>
          <Text style={styles.reviewNumText}>({item.rating_count} reviews)</Text>
        </View>

        {/*additional information line */}
        <View style={styles.mainDetailsContainer}>
          <View style = {styles.detailsContainer}>
            <MaterialCommunityIcons name="map-marker-distance" size={16} color={COLORS.primary} />
            <Text style={styles.detailsText}>
              {item.dist_miles.toFixed(1)} miles
            </Text>
          </View>

          <View style = {[styles.detailsContainer, {width: '25%'}]} >
            <Entypo name="location" size={16} color={COLORS.primary} />
            <Text style={styles.detailsText} numberOfLines={1} ellipsizeMode="tail">
              {item.town} 
            </Text>
          </View>

          <View style = {styles.detailsContainer}>
            <FontAwesome5 name="water" size={16} color={COLORS.primary} />
            <Text style={styles.detailsText}>
              {item.river_name}
            </Text>
          </View>
        </View>

      </View>
    </TouchableOpacity>
  );
};

export default ActivitiesCard;