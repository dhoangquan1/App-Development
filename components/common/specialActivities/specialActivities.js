import { View, Text, ActivityIndicator, FlatList, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';


import styles from './specialActivities.style'
import { COLORS, images, SIZES } from '../../../constants'

//www.vecteezy.com

const SpecialActivity = ({item}) => {

    return (
    <View style={styles.container}>
        <View style={styles.infoContainer}>
            <Image 
                source={images.kayaking}
                resizeMethod='contain'
                style={styles.image}
            />
            {item ? (
                <>
                    <Text style={styles.description}>{item.description}</Text>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`${item.link}`)}>
                        <Text style={styles.buttonText}>Visit website</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text style={styles.description}>We have no data on this yet.</Text>
            )} 
            <Text style={styles.credits}>Image credits to www.vecteezy.com</Text>
        </View>
    </View>
  )
}

export default SpecialActivity