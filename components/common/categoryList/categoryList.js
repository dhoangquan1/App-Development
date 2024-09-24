import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { COLORS, SIZES, icons } from '../../../constants'
import styles from './categoryList.style'
import React from 'react'

/**
 * Display and handle clicks of Categories
 * 
 * @param {Array} categories - an array of categories that need to be displayed
 * @param {setHook} setActiveTab - set the hook activeTab in parent class when a tab button is pressed 
 * @returns list of category and the focused activeTab
 */
const CategoryList = ({categories, setActiveTab, activeTab}) => {
    
  return (
    <ScrollView style={styles.tabsContainer} nestedScrollEnabled={true} horizontal>
        {categories?.map((item, index) => (
          <View key={index} style={activeTab === item ? styles.focusedTabContainer : styles.unfocusedTabContainer}>
            <TouchableOpacity
              style={styles.tab(item, activeTab)}
              onPress={() => setActiveTab(item)}
            >
              {activeTab === item ? icons.IconSelect(item, 24) : icons.IconSelect(item, 24, COLORS.secondary)}
              <Text style={styles.tabText(item, activeTab)}>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
    </ScrollView>
  )
}

export default CategoryList;