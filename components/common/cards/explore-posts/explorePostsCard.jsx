import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { useEffect, useState } from "react";

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from "./explorePostsCard.style";
import { COLORS, icons } from "../../../../constants";

const ExplorePostsCard = ({ item, handleNavigate}) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate(item)}>
      {/*User information (above image)*/}
      <View style={styles.userInfoContainer}>
        <Image
          source={{uri: item.user_image}}
          resizeMode='cover'
          style={styles.profileContainer}
        />
        <View>
            <Text style={styles.userNameText}>{item.user_name}</Text>
            <Text style={styles.dateText}>posted on {item.created_at.substring(0,10)}</Text>
        </View>
      </View>
      
      <Image
        source={{uri: item.image}}
        resizeMode='cover'
        style={styles.imageContainer}
      />

      {/*Post information (below image)*/}
      <View style={styles.textContainer}>
        
        {/*Category symbol line */}
        <View style = {styles.topDetailsContainer}>
          <View style={styles.categoryContainer(item.activity)}>
            {icons.IconSelect(item.activity, 12)}
            <Text style={styles.categoryText}>{item.activity}</Text>
          </View>
        </View>

        {/*Name line */}
        <Text style={styles.activityName} numberOfLines={1}>
          {item.name}
        </Text>

        {/*additional information line */}
        <View style={styles.mainDetailsContainer}>
          <View style = {[styles.detailsContainer, {width: '45%'}]} >
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

        {/*Description line */}
        <Text style={styles.description}>
          "{item.description}"
        </Text>

      </View>
    </TouchableOpacity>
  );
};

export default ExplorePostsCard;