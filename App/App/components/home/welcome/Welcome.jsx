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

import styles from "./welcome.style";
import { COLORS, icons, SIZES } from "../../../constants";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../../context/AuthContext";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const {user} = useAuth();
  const [activeJobType, setActiveJobType] = useState("Swimming");

  const iconSelect = {
    "Swimming": (props) => <FontAwesome6 name="person-swimming" size={24} color={COLORS.primary} {...props}/>,
    "Fishing": (props) => <FontAwesome6 name="fish-fins" size={24} color={COLORS.primary} {...props}/>,
    "Paddling": (props) => <MaterialIcons name="kayaking" size={24} color={COLORS.primary} {...props}/>,
    "Boating and Sailing": (props) => <FontAwesome6 name="sailboat" size={24} color={COLORS.primary} {...props}/>,
    "Hiking, Walk, & Run": (props) => <FontAwesome6 name="person-walking" size={24} color={COLORS.primary} {...props}/>,
  }

  return (
    <View>
      <View>
        <Text style={styles.username}>
          Welcome, 
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
            <TouchableOpacity
              style={styles.tab(item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              {
                iconSelect[item]({
                  color: COLORS.primary
                })
              }
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
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