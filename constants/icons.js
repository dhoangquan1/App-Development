import { View, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS, FONT } from './theme';
const IconSelect = (activity, size, ...props) => {
  const icons = {
    "Nearby" : <FontAwesome6 name="location-arrow" size={24} size={size} color={COLORS.primary} {...props}/>,
    "Swimming": <FontAwesome6 name="person-swimming" size={size} color={COLORS.primary} {...props}/>,
    "Fishing": <FontAwesome6 name="fish-fins" size={size} color={COLORS.primary} {...props}/>,
    "Paddling": <MaterialIcons name="kayaking" size={size} color={COLORS.primary} {...props}/>,
    "Boating and Sailing": <FontAwesome6 name="sailboat" size={size} color={COLORS.primary} {...props}/>,
    "Hiking, Walk, & Run": <FontAwesome6 name="person-walking" size={size} color={COLORS.primary} {...props}/>,
  }
  return icons[activity] || <MaterialIcons name="local-activity" size={size} color={COLORS.primary} {...props}/>
}

const AmenitiesIconSelect = (amenity, size, ...props) => {
  const icons = {
    "Wheelchair Parking": (
    <View style={{flexDirection: 'row', gap: 2}}>
      <Text style={{color: COLORS.primary, fontSize: size,fontFamily: FONT.bold}}>P</Text>
      <FontAwesome6 name="wheelchair" size={size} color={COLORS.primary} {...props}/>
    </View>),
    "Wheelchair Entrance": (
      <View style={{flexDirection: 'row', gap: 2}}>
        <Text style={{color: COLORS.primary, fontSize: size,fontFamily: FONT.bold}}>E</Text>
        <FontAwesome6 name="wheelchair" size={size} color={COLORS.primary} {...props}/>
      </View>),
    "Dogs allowed": <FontAwesome6 name="dog" size={size} color={COLORS.primary} {...props}/>,
    "Kid friendly": <FontAwesome6 name="child-reaching" size={size} color={COLORS.primary} {...props}/>,
  }
  return icons[amenity] || <MaterialIcons name="tag" size={size} color={COLORS.primary} {...props}/>
}


import heart from "../assets/icons/heart.png";
import menu from "../assets/icons/menu.png";
import search from "../assets/icons/search.png";
import left from "../assets/icons/left.png";
import heartOutline from "../assets/icons/heart-ol.png";
import share from "../assets/icons/share.png";
import location from "../assets/icons/location.png";

//nav-bar icons
import home from "../assets/icons/Home.png";
import calendar from "../assets/icons/Calendar.png";
import map from "../assets/icons/Map.png";
import bookmark from "../assets/icons/Bookmark.png";
import notification from "../assets/icons/Bell.png";

export default {
  IconSelect,
  AmenitiesIconSelect,

  heart,
  menu,
  search,
  left,
  heartOutline,
  share,
  location,

  home,
  calendar,
  map,
  bookmark,
  notification,
};
