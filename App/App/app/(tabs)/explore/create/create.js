import { View, Text, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../create/create.style'
import FormField from '../../../../components/common/form-field/FormField'

// TODO: Document create component

/**
 * Create Component for making a new post
 * @returns {JSX.Element} The post creation page.
 */
const create = () => {
  /**
   * Handles form submission
   */
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