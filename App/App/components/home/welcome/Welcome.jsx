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
import { icons, SIZES } from "../../../constants";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Swimming");

  const iconSelect = {
    "Swimming": (props) => <FontAwesome6 name="person-swimming" size={24} color="black" {...props}/>,
    "Fishing": (props) => <FontAwesome6 name="fish-fins" size={24} color="black" {...props}/>,
    "Paddling": (props) => <MaterialIcons name="kayaking" size={24} color="black" {...props}/>,
    "Boating and Sailing": (props) => <FontAwesome6 name="sailboat" size={24} color="black" {...props}/>,
    "Hiking, Walk, & Run": (props) => <FontAwesome6 name="person-walking" size={24} color="black" {...props}/>,
  }

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='Find your river adventure...'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
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
                  color: '#000'
                })
              }
              <Text style={styles.tabText}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator = 'false'
        />
      </View>
    </View>
  );
};

export default Welcome;