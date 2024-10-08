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
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../../context/AuthContext";

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const {user} = useAuth();

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

    </View>
  );
};

export default Welcome;