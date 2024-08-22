import { View, Text, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../create/create.style'
import FormField from '../../../../components/common/form-field/FormField'

const create = () => {
    const submit = async () => {

    }

  return (
    <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
            <Text>
                Create a new post
            </Text>
        </ScrollView>
    </SafeAreaView>
  )
}

export default create