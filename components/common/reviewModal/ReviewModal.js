import React, { useState } from 'react';
import {Alert, Modal, Text, TouchableOpacity, View , ScrollView, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import StarRating from 'react-native-star-rating-widget';

import styles from './ReviewModal.style';
import { COLORS } from '../../../constants';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FormField from '../form-field/FormField';
import { useAuth } from '../../../context/AuthContext';
import { uploadReview, uploadReviewImage } from '../../../services/uploadData';

const ReviewModal = ({isVisible, closeModal, activityID, refetch}) => {
  const [submitting, setSubmitting] = useState(false);
  const [imageBase64, setImageBase64] = useState(null);
  const {user} = useAuth()
  const [form, setForm] = useState({
    user_id: user?.id,
    activity_id: activityID,
    rating: 0,
    title: '',
    description: '',
    image: null,
  })

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
      setForm({...form, image: result.assets[0].uri}); // Store the selected image's URI
      setImageBase64(result.assets[0].base64)
    }
  };

  const cancel = () => {
    Alert.alert('Warning', 'Are you sure you want to discard this review? All progress will be lost',
      [{ text: 'Cancel', style: 'cancel' },
      { text: 'Discard', 
        onPress: () => {
          setForm({
            user_id: user?.id,
            activity_id: activityID,
            rating: 0,
            title: '',
            description: '',
            image: null,}
          )
          closeModal();
        } 
        },
      ]
    )
  }

  const submit = async () => {
    if (form.title === "" || form.description === "" || form.rating === 0) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setSubmitting(true);

    try {
      const url = await uploadReviewImage(imageBase64, form.user_id, activityID);

      const post = await uploadReview(form, url.publicUrl)

      if(post.error){
        Alert.alert("Error", post.error.message);
        return;
      }else if (post.success){
        Alert.alert("Success", 'Your review has been successfully added');
        setForm({
          user_id: user?.id,
          activity_id: activityID,
          rating: 0,
          title: '',
          description: '',
          image: null,}
        )
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
      onRequestClose={closeModal}
    >

      <View style={styles.darkenBackground}/>
      <View style={styles.container}>
        <ScrollView style={styles.modalView}>

          <Text style={styles.modalText}>Rate this activity</Text>
          <StarRating
            rating={form.rating}
            onChange={(e) => setForm({...form, rating: e})}
            color={COLORS.secondary}
            starSize={35}
            starStyle={{marginHorizontal: 2, marginTop: -10}}
            enableHalfStar={false}
          />

          <Text style={styles.modalText}>Upload an image (optional)</Text>
          <View style={styles.imageContainer}>
            <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
              {form.image ? (
                <Image
                  source={{ uri: form.image }}
                  resizeMode='cover'
                  style={styles.image}
                />
              ) : (
                <MaterialCommunityIcons name="file-image-plus" size={50} color="black" />
              )}
            </TouchableOpacity>
          </View>

          <Text style={styles.modalText}>Sum up your experience</Text>
          <FormField 
            value={form.title}
            placeholder={'Great Time, Beautiful Scenery, etc.'}
            handleChangeText={(e) => setForm({ ...form, title: e })}
          />

          <Text style={styles.modalText}>Describe your journey</Text>
          <FormField 
            value={form.description}
            placeholder={'This is a good place for kayaking...'}
            textBoxStyle={styles.customTextBox}
            multiline
            handleChangeText={(e) => setForm({ ...form, description: e })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={submit}>
            <Text style={styles.buttonText}>Submit review</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={cancel}>
            <Text style={styles.cancelButtonText}>Cancel review</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </Modal>
  )
}

export default ReviewModal