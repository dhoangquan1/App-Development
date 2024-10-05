import React, { useEffect } from 'react'
import { ActivityIndicator, Image, TouchableOpacity, View, ScrollView } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'

import useSupabase from '../../services/useSupabase'
import { getFilteredActivities } from '../../services/getData'

import { useAuth } from '../../context/AuthContext'
import { useForm } from '../../context/FormContext'

import ActivitiesCard from '../../components/common/cards/home-activities/activitiesCard'
import  SearchBar  from '../../components/common/searchBar/searchBar'
import { ScreenHeaderBtn } from '../../components'

import styles from './HomeSearch.style'
import { COLORS, icons, images } from '../../constants'


const HomeSearch = () => {
    const router = useRouter();
    const {form, setForm, isFiltering, setIsFiltering, setIsResetingSearch} = useForm();
    const {user, userLocation} = useAuth();

    const {data, error, refetch, isLoading} = useSupabase(()=>getFilteredActivities(userLocation.longitude, userLocation.latitude, form, user?.id))
    
    const handleNavigate = (item) => {
        router.push({
          pathname: `/activities/[id]`,
          params: {id : item.id}
        });
      };

    useEffect(() => {
        return () => {
            setForm({
                name: null,
                activity: "All",
                river_id: null,
                town: null,
                tags: [],
            })
            setIsResetingSearch(true)
        };
    }, []);

    useEffect(() => {
        refetch()
    }, [form])
    
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                headerTransparent: true,
                headerShadowVisible: false,
                headerBackVisible: false,
                headerStyle: {
                    top: 0,
                    backgroundColor: COLORS.neutral,
                },
                headerLeft: () => (
                    <ScreenHeaderBtn
                    iconUrl={icons.left}
                    dimension='60%'
                    handlePress={() => router.back()}
                    />
                ),
                
                headerTitleAlign: "center",
                headerTitle: () => (
                    <View style={styles.header}>
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}
                    />
                    <Text style={styles.headerText}> Explore Your Rivers</Text>
                    </View>
                ),
                }}
            />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.cardsContainer}>
                    <SearchBar 
                        form={form} 
                        setForm={setForm} 
                        isFiltering={isFiltering} 
                        setIsFiltering={setIsFiltering}
                    />
                    <Text style={styles.title}>Nearby activities</Text>
                    {isLoading ? (
                        <>
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        </View>
                        <View style={styles.loadingContainer}>
                            <ActivityIndicator size='large' color={COLORS.primary} />
                        </View>
                        </>
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        data?.map((item) => (
                        <ActivitiesCard
                            item={item}
                            key={`${item.id}`}
                            handleNavigate={handleNavigate}
                        />  
                        ))
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeSearch