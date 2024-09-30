import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { COLORS } from './theme';
const IconSelect = (activity, size, ...props) => {
  const icons = {
    "Swimming": <FontAwesome6 name="person-swimming" size={size} color={COLORS.primary} {...props}/>,
    "Fishing": <FontAwesome6 name="fish-fins" size={size} color={COLORS.primary} {...props}/>,
    "Paddling": <MaterialIcons name="kayaking" size={size} color={COLORS.primary} {...props}/>,
    "Boating and Sailing": <FontAwesome6 name="sailboat" size={size} color={COLORS.primary} {...props}/>,
    "Hiking, Walk, & Run": <FontAwesome6 name="person-walking" size={size} color={COLORS.primary} {...props}/>,
  }
  return icons[activity] || <MaterialIcons name="local-activity" size={size} color={COLORS.primary} {...props}/>
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
