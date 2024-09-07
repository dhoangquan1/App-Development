import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CategoryButton.style';
import { COLORS, icons } from '../../../constants';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CategoryButton = ({item, handlePress}) => {
  return (
    <TouchableOpacity
      style={styles.tab(item)}
      onPress={() => handlePress(item)}
    >
      {icons.IconSelect(item, 24)}
      <Text style={styles.tabText}>{item}</Text>
    </TouchableOpacity>
  )
}

export default CategoryButton