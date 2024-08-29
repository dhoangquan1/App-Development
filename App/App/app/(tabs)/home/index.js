import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../../../constants";
import {
  Leavenotrace,
  Rivers,
  Activities,
  ScreenHeaderBtn,
  Welcome,
} from "../../../components";

// TODO: Document home component

/**
 * description of Home
 * This component contains a search bar and displays various sections of the app.
 * @returns {JSX.Element} The home page.
 */
const Home = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.neutral }}>
      
      <ScrollView>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Leavenotrace />
          <Rivers />
          <Activities />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;