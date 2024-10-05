/**
 * @fileOverview This is a component for the Map page, which displays a map with nearby activities.
 * @module (Tabs)/Map
 */

import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, ActivityIndicator, Modal, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import FormField from "../form-field/FormField";
import { Picker } from "@react-native-picker/picker";

import useSupabase from "../../../services/useSupabase";
import { getAllRiversForFilters } from "../../../services/getData";

import styles from "./filterModal.style";
import { COLORS } from "../../../constants";
import { useForm } from "../../../context/FormContext";


const tags = ["Wheelchair Parking", "Wheelchair Entrance", "Dogs Allowed", "Kid Friendly"];
const categories = ["All", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

/**
 * Map Component for displaying activities on the map
 * @returns {JSX.Element} The map page
 */
const FilterModal = ({isVisible, closeModal, form, setForm}) => {
  const [selectedActivity, setSelectedActivity] = useState(form.activity)
  const [selectedRiver, setSelectedRiver] = useState(form.river_id);
  const [selectedTown, setSelectedTown] = useState(form.town);
  const [selectedTags, setSelectedTags] = useState(form.tags);
  
  const {isResetingSearch, setIsResetingSearch, isFiltering} = useForm();

  const {data, isLoading, error} = useSupabase(getAllRiversForFilters);
  

    // Function to handle checkbox toggle
    const handleCheckboxChange = (tag) => {
        if (selectedTags.includes(tag)) {
            // Remove activity from the array if it's already selected
            setSelectedTags((prevSelected) => 
                prevSelected.filter((item) => item !== tag)
            );
        } else {
            // Add activity to the array if it's not selected
            setSelectedTags((prevSelected) => 
                [...prevSelected, tag]
            );
        }
    };

    const clear = () => {
        setSelectedActivity(categories[0]);
        setSelectedRiver(null)
        setSelectedTown(null)
        setSelectedTags([])
        
    }

    const submit = async () => {
       setForm(prevForm => ({
            ...prevForm,
            activity: selectedActivity,
            river_id: selectedRiver,
            town: selectedTown,
            tags: selectedTags,
        }))
        
        closeModal(); 
    }

    const cancel = () => {
        clear();
        setForm(prevForm => ({
            ...prevForm,
            activity: "All",
            river_id: null,
            town: null,
            tags: [],
        }))
        
        closeModal();
    }

    useEffect(() => {
        if(isResetingSearch){
            clear();
            setIsResetingSearch(false);
        }
    }, [isResetingSearch])

  return (
    <Modal 
        animationType='slide'
        transparent={true}
        visible={isVisible}
        onRequestClose={closeModal}
    >
        <View style={styles.darkenBackground}/>
        <View style={styles.container}>
            <ScrollView style={styles.modalView}>
                <Text style={styles.modalTitle}>Filter activities</Text>

                <TouchableOpacity style={styles.cancelButton} onPress={clear}>
                    <Text style={styles.cancelButtonText}>Clear Filter</Text>
                </TouchableOpacity>

{/**_______________________________________________FILTER BY ACTIVITIES____________________________________________________________ */}

                <View style={styles.filterContainer}>
                    <Text style={styles.modalText}>Filter by activity type</Text>
                    <View>
                        {categories.map((activity) => (
                            <TouchableOpacity
                                key={activity}
                                onPress={() => setSelectedActivity(activity)}
                                style={styles.checkBoxContainer}
                            >
                            <View style={styles.radioButton}>
                                {selectedActivity === activity ? (
                                <View
                                    style={styles.selectedRadioButton}
                                />
                                ) : null}
                            </View>
                            <Text style={styles.checkBoxText}>{activity}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

{/**_______________________________________________FILTER BY RIVERS____________________________________________________________ */}

                <View style={styles.filterContainer}>
                    <Text style={styles.modalText}>Filter by river</Text>
                    {isLoading ? (
                        <ActivityIndicator size='large' color={COLORS.primary} />
                    ) : error ? (
                        <Text>Something went wrong</Text>
                    ) : (
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={selectedRiver}
                            onValueChange={(id) => setSelectedRiver(id)}
                        >
                            <Picker.Item label={'All'} value={null} key={`All`} />    
                            {data?.map((item) => (
                                <Picker.Item label={item.name} value={`${item.id}`} key={`${item.id}`} />
                            ))}
                        </Picker>
                    )}
                </View>
                
{/**_______________________________________________FILTER BY TOWN____________________________________________________________ */}

                <View style={styles.filterContainer}>
                    <Text style={styles.modalText}>Filter by town</Text>
                    <FormField 
                        value={form.town}
                        placeholder={'Boston'}
                        handleChangeText={(e) => setSelectedTown(e)}
                    />
                </View>

{/**_______________________________________________FILTER BY AMENITIES____________________________________________________________ */}

                <View style={styles.filterContainer}>
                    <Text style={styles.modalText}>Filter by amenities tags</Text>
                    {tags.map((tag) => (
                        <View key={tag} style={styles.checkBoxContainer}>
                            <Checkbox
                                value={selectedTags.includes(tag)}
                                onValueChange={() => handleCheckboxChange(tag)}
                                color={selectedTags.includes(tag) ? COLORS.secondary : undefined}
                                style={styles.checkBox}
                            />
                            <Text style={styles.checkBoxText}>{tag}</Text>
                        </View>
                    ))}
                </View>

{/**_______________________________________________BOTTOM BUTTONS____________________________________________________________ */}

                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={cancel}>
                    <Text style={styles.cancelButtonText}>Clear & Cancel</Text>
                </TouchableOpacity>
                
                <View style={{paddingBottom: 75}}/>
            </ScrollView>
        </View>
    </Modal>
  );
};

export default FilterModal;