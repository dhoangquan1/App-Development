/**
 * @fileOverview This file defines the Create component for the Explore page.
 * It provides a form for users to create new posts within the community.
 * 
 * @module (Tabs)/Home/CreateModal
 */

import {SafeAreaView, Alert, Text, TouchableOpacity, View, ScrollView, Image, Modal, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import MapView, { Marker } from 'react-native-maps';
import uuid from 'react-native-uuid';
import React, { useState, useEffect } from 'react'
import styles from './createModal.style'
import { COLORS, icons } from '../../../constants';
import useSupabase from "../../../services/useSupabase";
import { getAllRivers } from "../../../services/getData";

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FormField from '../../../components/common/form-field/FormField'
import { useAuth } from '../../../context/AuthContext';
import { uploadPost, uploadPostImage, uploadPostTags } from '../../../services/uploadData';
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";



const categories = ["Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];
const tags = ["Wheelchair Parking", "Wheelchair Entrance", "Dogs Allowed", "Kid Friendly"];



/**
 * Create Component for creating new posts.
 * This component provides a form with fields that users can fill out to create a new post.
 * 
 * @component
 * @returns {JSX.Element} The rendered Create post page component.
 */


const createModal = ({isVisible, closeModal, refetch}) => {
  const {user, userLocation} = useAuth()
  const { data, isLoading, error } = useSupabase(() => getAllRivers());
  const postID = uuid.v4();

  const [isSubmitting, setSubmitting] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);

  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const [selectedPostName, setSelectedPostName] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState(null);
  const [selectedRiver, setSelectedRiver] = useState(null);
  const [selectedActivityType, setSelectedActivityType] = useState(null)
  const [selectedTown, setSelectedTown] = useState(null);
  const [selectedStreet, setSelectedStreet] = useState(null);
  const [selectedZipCode, setSelectedZipCode] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCoordinate, setSelectedCoordinate] = useState(null);

  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedCoordinate({ latitude, longitude });
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('You cannot upload an image without granting access to the library!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow images
      quality: 0, // Quality of the image (0 to 1)
      base64: true,
    });

    if (!result.canceled) {
      setSelectedPostImage(result.assets[0].uri); // Store the selected image's URI
      setImageBase64(result.assets[0].base64)
    }
  };

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

  const cancel = () => {
    Alert.alert('Warning', 'Are you sure you want to discard this post? All progress will be lost',
      [{ text: 'Cancel', style: 'cancel' },
      {
        text: 'Discard',
        onPress: () => {
          setSelectedPostName(null);
          setSelectedDescription(null);
          setSelectedRiver(null);
          setSelectedActivityType(null)
          setSelectedTown(null);
          setSelectedStreet(null);
          setSelectedZipCode(null);
          setSelectedTags([]);

          closeModal()
        }
      },
      ]
    )
  }

  
  const submit = async () => {

    if (selectedPostImage === null ||
      selectedPostName === "" || 
      selectedPostName === null || 
      selectedDescription === "" || 
      selectedDescription === null || 
      selectedActivityType === null || 
      selectedRiver === null || 
      selectedStreet === "" || 
      selectedStreet === null || 
      selectedTown === "" || 
      selectedTown === null || 
      selectedZipCode === "" || 
      selectedZipCode === null ||
      selectedCoordinate === null) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    const updatedForm = { 
      post_image: selectedPostImage,
      post_name: selectedPostName,
      description: selectedDescription,
      activity_type: selectedActivityType,
      river_id: selectedRiver,
      street: selectedStreet,
      town: selectedTown,
      zip_code: selectedZipCode,
      tags: selectedTags,
      longitude: selectedCoordinate.longitude,
      latitude: selectedCoordinate.latitude
    };

    const updatedTags = selectedTags.map(tag => ({
      id: postID,
      tag: tag
    }));
    
    // console.log('Form data:', updatedForm);

    try {
      const url = await uploadPostImage(imageBase64, user?.id, postID);

      const post = await uploadPost(updatedForm, url.publicUrl, user?.id, postID);
      
      const tagsInsert = await uploadPostTags(updatedTags);
      

      if (post.error) {
        Alert.alert("Error", post.error.message);
        return;
      } else if (post.success) {
        Alert.alert("Success", 'Your post has been successfully submitted');
        setSelectedPostImage(null);
        setSelectedPostName(null);
        setSelectedDescription(null);
        setSelectedActivityType(null);
        setSelectedTown(null);
        setSelectedStreet(null);
        setSelectedZipCode(null);
        setSelectedTags([]);
        setSelectedCoordinate(null);
        
        closeModal();
        refetch();
      }
      

    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };


  return (
      
    <Modal 
    animationType='slide'
    transparent={true}
    visible={isVisible}
    onRequestClose={closeModal}>
      
      <View style={styles.darkenBackground}/>
      <View style={styles.container}>
        <ScrollView style={styles.modalView}>
          {/* ________________________________________ Header ________________________________________ */}
          <Text style={styles.createANew}>Create a new post</Text>


          {/* ________________________________________ Image Uploader ________________________________________ */}
          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Upload an image</Text>
            <View style={styles.imageContainer}>
              <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
                {selectedPostImage ? (
                  <Image
                    source={{ uri: selectedPostImage }}
                    resizeMode='cover'
                    style={styles.image}
                  />
                ) : (
                  <MaterialCommunityIcons name="file-image-plus" size={50} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>


          {/* ________________________________________ Basics ________________________________________ */}
          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Name</Text>
            <FormField
              value={selectedPostName}
              placeholder={'The name of the location'}
              textBoxStyle={styles.formPostName}
              handleChangeText={(e) => setSelectedPostName(e)}
            />

            <Text style={styles.formHeader}>Description</Text>
            <FormField
              value={selectedDescription}
              placeholder={'Describe your experience'}
              textBoxStyle={styles.formDescription}
              multiline={true}
              handleChangeText={(e) => setSelectedDescription(e)}
            />
          </View>


          {/* ________________________________________ Activity Dropdown ________________________________________ */}

          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Activity</Text>
            <View>
              {categories.map((activity) => (
                <TouchableOpacity
                  key={activity}
                  onPress={() => setSelectedActivityType(activity)}
                  style={styles.checkBoxContainer}
                >
                  <View style={styles.radioButton}>
                    {selectedActivityType === activity ? (
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


          {/* ________________________________________ River Dropdown ________________________________________ */}
          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>River</Text>
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
                <Picker.Item label={'Select a River:'} value={null} key={`All`} />
                {data?.map((item) => (
                  <Picker.Item label={item.name} value={`${item.id}`} key={`${item.id}`} />
                ))}
              </Picker>
            )}
          </View>

          {/* ________________________________________ Map ________________________________________ */}

          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Location</Text>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                region={{
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude,
                  latitudeDelta: 2,
                  longitudeDelta: 2,
                }}
                showsUserLocation={true}
                onPress={handleMapPress}
              >
                {selectedCoordinate && (
                  <Marker
                    coordinate={selectedCoordinate}
                  >
                    <View style={styles.activityMarker(selectedActivityType)}>
                      {icons.IconSelect(selectedActivityType, 16)}
                    </View>
                  </Marker>
                )}
              </MapView>
            </View>
          </View>

          {/* ________________________________________ Address ________________________________________ */}
          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Address</Text>
            <FormField
              value={selectedStreet}
              placeholder={'Street Address'}
              textBoxStyle={styles.formStreet}
              handleChangeText={(e) => setSelectedStreet(e)}
            />
            <FormField
              value={selectedTown}
              placeholder={'Town'}
              textBoxStyle={styles.formTown}
              handleChangeText={(e) => setSelectedTown(e)}
            />
            <FormField
              value={selectedZipCode}
              placeholder={'Zip Code'}
              textBoxStyle={styles.formZip}
              handleChangeText={(e) => setSelectedZipCode(e)}
            />
          </View>


          {/* ________________________________________ Ammenities ________________________________________ */}

          <View style={styles.formContainer}>
            <Text style={styles.formHeader}>Amenities</Text>
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



          {/* ________________________________________ Cancel / Submit ________________________________________ */}

          <View style={styles.formContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={submit}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton} onPress={cancel}>
              <Text style={styles.cancelButtonText}>Clear & Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={{paddingBottom: 75}}/>
        </ScrollView>
      </View>
    </Modal>
  )
}

export default createModal