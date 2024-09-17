import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./Welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../../context/AuthContext";
import CategoryButton from "../../common/categoryButton/CategoryButton.js";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const {user} = useAuth();
  const [activeJobType, setActiveJobType] = useState("Swimming");


  return (
    <View>
      <View>
        <Text style={styles.username}>
          Welcome, {user?.name ? user.name : 'Guest' }
        </Text>
        <Text style={styles.welcome}>
          Explore your rivers!
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <FontAwesome6 name="magnifying-glass" size={20} color={COLORS.primary} />

          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Find your river adventure...'
            placeholderTextColor={COLORS.secondary}
            onSubmitEditing={handleClick}
          />

          <TouchableOpacity>
            <Ionicons name="filter" size={25} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryButton 
              item = {item}
              handlePress = {handleClick}
            />
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>

    </View>
  );
};

export default Welcome;