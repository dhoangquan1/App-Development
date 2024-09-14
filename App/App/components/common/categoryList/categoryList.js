import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { SIZES, icons } from '../../../constants'
import styles from './categoryList.style'
import React from 'react'

/**
 * Display and handle clicks of Categories
 * 
 * @param {Array} categories - an array of categories that need to be displayed
 * @param {setHook} setActiveTab - set the hook activeTab in parent class when a tab button is pressed 
 * @returns list of category and the focused activeTab
 */
const CategoryList = ({categories, setActiveTab}) => {
    
  return (
    <ScrollView style={styles.tabsContainer} nestedScrollEnabled={true} horizontal>
        {categories?.map((item, index) => (
          <TouchableOpacity
            key={index}  
            style={styles.tab(item)}
            onPress={() => setActiveTab(item)}
          >
            {icons.IconSelect(item, 24)}
            <Text style={styles.tabText}>{item}</Text>
          </TouchableOpacity>
        ))}
    </ScrollView>
  )
}

export default CategoryList;