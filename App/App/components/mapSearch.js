/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, VirtualizedList } from "react-native";

import useSupabase from "../services/useSupabase";
import { getFilteredActivities, getAllRivers } from "../services/getData";
import { Button, CheckBox } from "@rneui/themed";

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const MapSearch = ({onSelectActivity, onSelectRiver}) => {
  const { dataR, isLoadingR, errorR } = useSupabase(getAllRivers);
  const [rivers, setRivers] = useState(null);
  const [currentRiver, setCurrentRiver] = useState(null);

  useEffect(() => {
    const fetchRivers = async () => {
      try {
        const dataR = await getAllRivers();
        setRivers(dataR);
        // console.log(".....");
        // rivers?.map((river) => {
        //   console.log(river.name);
        // })
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
    <View style={{ position: "absolute", top: 150 }}>
      <Button
        onPress={() => setShowFilters(true)}
        title="Search..."
      />
      {
        showFilters ? (
          <View>
            <Button
              onPress={() => setShowRivers(!showRivers)}
              title="Rivers..."
            />
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

            <Button
              onPress={() => setShowActivities(!showActivities)}
              title="Activities..."
            />
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
          </View>
        ) : (<></>)
      }
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
    height: 300,
  },
});

export default MapSearch;