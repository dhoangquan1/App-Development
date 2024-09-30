/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, ScrollView, VirtualizedList, Modal } from "react-native";

import useSupabase from "../services/useSupabase";
import { getFilteredActivities, getAllRivers } from "../services/getData";
import { Button, CheckBox } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../constants";

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const MapSearch = ({isVisible, closeModal, onSelectActivity, onSelectRiver}) => {
  const { dataR, isLoadingR, errorR } = useSupabase(getAllRivers);
  const [rivers, setRivers] = useState(null);
  const [currentRiver, setCurrentRiver] = useState(null);

  useEffect(() => {
    const fetchRivers = async () => {
      try {
        const dataR = await getAllRivers();
        setRivers(dataR);
      } catch (error) {
        console.error('Error updating map:', error);
      }}

      fetchRivers();
  })

  const activityFilters = [null, "Land", "Paddling", "Fishing", "Swimming"];
  const [currentActivity, setCurrentActivity] = useState(activityFilters[0]);

  const [showFilters, setShowFilters] = useState(false);
  const [showRivers, setShowRivers] = useState(false);
  const [showActivities, setShowActivities] = useState(false);

  return (
    <Modal 
        animationType='slide'
        transparent={false}
        visible={isVisible}
        onRequestClose={closeModal}
    >
        <View style={styles.modal}>
            <TouchableOpacity style={styles.button}
            onPress={() => setShowRivers(!showRivers)}
            >
                <Text style={styles.buttonText}>
                Rivers...
                </Text>
            </TouchableOpacity>
            {
            showRivers ? (
                <View>
                <ScrollView style={styles.scrollView}>
                    <CheckBox
                    title="None"
                    checked={currentRiver == null}
                    onPress={() => {
                        setCurrentRiver(null);
                        onSelectRiver(null);
                    }}
                    />
                    {rivers?.map((river) => {
                    return (
                        <CheckBox
                        title={river.name}
                        checked={river.id == currentRiver}
                        onPress={() => {
                            setCurrentRiver(river.id);
                            onSelectRiver(river.id);
                        }}
                        />
                    );
                    })}
                </ScrollView>
                </View>
            ) : (<></>)
            }

            <TouchableOpacity style={styles.button}
            onPress={() => setShowActivities(!showActivities)}
            >
                <Text style={styles.buttonText}>
                    Activities...
                </Text>
            </TouchableOpacity>
            {
            showActivities ? (
                <View>
                {activityFilters?.map((activity) => {
                    return (
                    <CheckBox
                        title={activity ?? "None"}
                        checked={activity == currentActivity}
                        onPress={() => {
                        setCurrentActivity(activity);
                        onSelectActivity(activity);
                        }}
                    />
                    );
                })}
                </View>
            ) : (<></>)
            }

            <TouchableOpacity style={styles.button}
                onPress={() => closeModal}
            >
                <Text style={styles.buttonText}>
                    Close
                </Text>
            </TouchableOpacity>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 10,
        height: 300,
    },
    button: {
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: COLORS.secondary,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.small,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "350",
        fontFamily: FONT.medium,
        color: COLORS.neutral,
    },
    modal: {
        height: 700,
    }
});

export default MapSearch;