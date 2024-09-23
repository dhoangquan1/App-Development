/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, { useState, useEffect } from "react";
import { View } from "react-native";

import useSupabase from "../services/useSupabase";
import { getFilteredActivities, getAllRivers } from "../services/getData";
import { Button, CheckBox } from "@rneui/themed";

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const MapSearch = ({onSelectActivity}) => {
  const { rivers, isLoadingR, errorR } = useSupabase(getAllRivers);

  console.log(".....");
  rivers?.map(river => {
    console.log(river.name);
  })

  // const rivers = [
  //   {name: 'Nashua'},
  //   {name: 'Ipswich'}
  // ];

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
                  {rivers?.map((river) => {
                    return (
                      <CheckBox
                        title={river.name}
                        // checked={river == currentActivity}
                        // onPress={() => {
                        //   setCurrentActivity(river);
                        //   onSelectActivity(river);
                        // }}
                      />
                    );
                  })}
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

export default MapSearch;
