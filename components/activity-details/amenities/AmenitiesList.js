import { View, Text, FlatList} from 'react-native'
import React from 'react'
import styles from './AmenitiesList.style'
import { COLORS, SIZES, icons } from '../../../constants'

const AmenitiesList = ({data}) => {
    return (
    <View style={styles.container}>
        {data?.map((item) => (
            <View key={item.tag} style={styles.tag}>
                {icons.AmenitiesIconSelect(item.tag, 16)}
                <Text style={styles.tagText}>{item.tag}</Text>
            </View>  
        ))}
    </View>
  )
}

export default AmenitiesList