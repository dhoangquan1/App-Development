import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CategoryButton.style';
import { COLORS, SIZES } from '../../../constants';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const iconSelect = {
    "Swimming": (props) => <FontAwesome6 name="person-swimming" size={24} color={COLORS.primary} {...props}/>,
    "Fishing": (props) => <FontAwesome6 name="fish-fins" size={24} color={COLORS.primary} {...props}/>,
    "Paddling": (props) => <MaterialIcons name="kayaking" size={24} color={COLORS.primary} {...props}/>,
    "Boating and Sailing": (props) => <FontAwesome6 name="sailboat" size={24} color={COLORS.primary} {...props}/>,
    "Hiking, Walk, & Run": (props) => <FontAwesome6 name="person-walking" size={24} color={COLORS.primary} {...props}/>,
  }

const CategoryButton = ({item, handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.tab(item)}
      onPress={() => handlePress(item)}
    >
      {
        iconSelect[item]({
          color: COLORS.primary
        })
      }
      <Text style={styles.tabText}>{item}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton