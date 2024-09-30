import { View, Text, TouchableOpacity, Image } from "react-native";
import { useEffect, useState } from "react";

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "./exploreReviewsCard.style";
import { COLORS, icons } from "../../../../constants";
import { StarRatingDisplay } from "react-native-star-rating-widget";

const ExploreReviewsCard = ({ item, handleNavigate}) => {

  return (
    <View style={styles.container} onPress={() => handleNavigate(item)}>
      {/*User Details Section */}
      <View style={styles.topInfoContainer}>
            <View style={styles.userInfoContainer}>
                <Image
                source={{uri: item.user_image}}
                resizeMode='cover'
                style={styles.profileContainer}
                />
                <View>
                    <Text style={styles.userNameText}>{item.user_name}</Text>
                    <Text style={styles.dateText}>reviewed on {item.created_at.substring(0,10)}</Text>
                </View>
            </View>

            <View style={styles.ratingContainer}>
                <StarRatingDisplay
                    rating={item.rating}
                    color={COLORS.secondary}
                    starSize={20}
                    starStyle={{marginHorizontal: 0}}
                />
            </View>

        </View>
      
      {item.review_image && (
        <Image
          source={{uri: item.review_image}}
          resizeMode='cover'
          style={styles.imageContainer}
        />
      )}

      {/*Mini activity card */}
      <TouchableOpacity style={styles.miniContainer} onPress={() => handleNavigate(item)}>
          <Image
            source={{uri: item.image}}
            resizeMode='cover'
            style={styles.miniImageContainer}
          />

        <View style={styles.miniTextContainer}>

          {/*Activity Type */}
          <View style = {styles.miniDetailsContainer}>
            <View style={styles.categoryContainer(item.activity)}>
              {icons.IconSelect(item.activity, 12)}
              <Text style={styles.categoryText}>{item.activity}</Text>
            </View>
          </View>

          <Text style={styles.miniActivityName} numberOfLines={1}>
            {item.name}
          </Text>
          <View style = {styles.miniDetailsContainer}>
            <Entypo name="location" size={16} color={COLORS.neutral} />
            <Text style={styles.miniDetailsText} numberOfLines={1}>
              {item.address}
            </Text>
          </View>

        </View>
      </TouchableOpacity>

      {/*Post information (below image)*/}
      <View style={styles.textContainer}>

        {/*title line */}
        <Text style={styles.activityName} numberOfLines={1}>
          {item.title}
        </Text>

        {/*Description line */}
        <Text style={styles.description}>
          "{item.description}"
        </Text>

      </View>
    </View>
  );
};

export default ExploreReviewsCard;