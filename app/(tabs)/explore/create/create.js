/**
 * @fileOverview This file defines the Create component for the Explore page.
 * It provides a form for users to create new posts within the community.
 * 
 * @module (Tabs)/Home/CreatePost
 */

import { View, Text, ScrollView,SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../create/create.style'
import FormField from '../../../../components/common/form-field/FormField'

/**
 * Create Component for creating new posts.
 * This component provides a form with fields that users can fill out to create a new post.
 * 
 * @component
 * @returns {JSX.Element} The rendered Create post page component.
 */
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