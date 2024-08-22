import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from "react-native";

import {
  ScreenHeaderBtn,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";

const ActivitiesDetails = () => {
const {river_id, type} = useLocalSearchParams();
  const router = useRouter();

  /*const { data, isLoading, error, refetch } = useFetch();*/
  const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView>
        <Text>
            YOU ARE IN Activities with id: {river_id} and type: {type}
        </Text>
    </SafeAreaView>
  )
}

export default ActivitiesDetails