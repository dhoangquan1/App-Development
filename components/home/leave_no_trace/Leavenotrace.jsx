import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Linking from 'expo-linking';

import styles from "./Leavenotrace.style";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { COLORS, SIZES, images } from "../../../constants";

const Leavenotrace = () => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style = {styles.cardsContainer} onPress={() => Linking.openURL('https://www.fs.usda.gov/visit/know-before-you-go/water-safety')}>
          <FontAwesome5 name="book" size={20} color={COLORS.neutral} />
          <Text style = {styles.learnMore}>
            Learn how to recreate responsibly →
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default Leavenotrace;