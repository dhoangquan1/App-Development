import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { COLORS, SIZES } from "../../../constants";
import RiversCard from "../../common/cards/rivers/RiversCard";
import styles from "./Rivers.style";
import { getAllRivers } from "../../../services/getData";
import useSupabase from "../../../services/useSupabase"

const Rivers = () => {
  const router = useRouter();
  const { data, isLoading, error } = useSupabase(getAllRivers);
  
  const handleCardPress = (item) => {
    router.push({
      pathname: `/rivers/[id]`,
      params: {id : item.id}
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Discover Rivers</Text>
        {/*<TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>*/}
      </View>

        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View style={styles.cardsContainer}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <RiversCard
                  item={item}
                  handleCardPress={handleCardPress}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ columnGap: SIZES.medium }}
              horizontal
            />
          </View>
        )}
    </View>
  );
};

export default Rivers;