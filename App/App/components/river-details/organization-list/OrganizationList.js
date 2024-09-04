import { View, Text, ActivityIndicator, FlatList, ScrollView} from 'react-native'
import React from 'react'
import * as Linking from 'expo-linking';
import styles from './OrganizationList.style'
import useSupabase from '../../../services/useSupabase'
import {getOrganizations } from '../../../services/getData'
import { COLORS, SIZES } from '../../../constants'
import OrgCard from '../../common/cards/organizations/orgCard'

const OrganizationList = ({riverID}) => {
    const {data, isLoading, error} = useSupabase(() => getOrganizations(riverID))

    return (
    <View style={styles.container}>
        <View style={styles.cardsContainer}>
            {isLoading ? (
                <ActivityIndicator size='large' color={COLORS.primary} />
            ) : error ? (
                <Text>Something went wrong</Text>
            ) : (
                data?.map((item) => (
                    <OrgCard
                        item={item}
                        key={`${item.id}`}
                        handleNavigate={() => Linking.openURL(`${item.link}`)}
                    />  
                ))
            )}
        </View>
    </View>
  )
}

export default OrganizationList