import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./searchBar.style";
import { COLORS, icons, SIZES } from "../../../constants";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from "../../../context/AuthContext";
import FilterModal from "../filterModal/filterModal";


const SearchBar = ({ form, setForm, isFiltering, setIsFiltering }) => {
  const [showModal, setShowModal] = useState(false)
  const [nameSearch, setNameSearch] = useState(form.name)

  const openFilter = () => {
    setShowModal(true)
  }

  const handleSubmit = () => {
    setForm(prevForm => ({
        ...prevForm,
        name: nameSearch
    }))
  }

  useEffect(() => {
    if(
      (form.name !== null ||
      form.activity !== "All" ||
      form.river_id !== null ||
      form.town !== null ||
      form.tags.length !== 0)
    ) {
      setIsFiltering(true)
    } else {
      setIsFiltering(false)
    }
  }, [form])

  return (
      <>
        <View style={styles.searchContainer}>
            <View style={styles.searchWrapper}>
            <FontAwesome6 name="magnifying-glass" size={20} color={COLORS.primary} />

            <TextInput
                style={styles.searchInput}
                value={nameSearch}
                onChangeText={(text) => setNameSearch(text)}
                placeholder='Search activity name'
                placeholderTextColor={COLORS.secondary}
                onSubmitEditing={handleSubmit}
            />

            <TouchableOpacity onPress={openFilter}>
                {isFiltering ? (
                    <Ionicons name="filter-circle" size={30} color={COLORS.primary} />
                ) : (
                    <Ionicons name="filter-circle-outline" size={30} color={COLORS.primary} />
                )}
            </TouchableOpacity>
            </View>
        </View>

        <FilterModal 
            isVisible={showModal} 
            closeModal={() => setShowModal(false)}
            form={form}
            setForm={setForm}
        />

      </>
  );
};

export default SearchBar;