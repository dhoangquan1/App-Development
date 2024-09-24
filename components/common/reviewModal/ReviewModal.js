import React, { useState } from 'react';
import {Alert, Modal, Text, TouchableOpacity, View , ScrollView} from 'react-native';
import StarRating from 'react-native-star-rating-widget';

import styles from './ReviewModal.style';
import { COLORS } from '../../../constants';
import FormField from '../form-field/FormField';

const ReviewModal = ({isVisible, closeModal, handleSubmit}) => {
  const [rating, setRating] = useState(0);
  const [form, setForm] = useState({
    user_id: '',
    activity_id: '',
    rating: '',
    title: '',
    description: '',
  })

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
            rating={rating}
            onChange={setRating}
            color={COLORS.secondary}
            starSize={35}
            starStyle={{marginHorizontal: 2, marginTop: -10}}
            enableHalfStar={false}
          />

          <Text style={styles.modalText}>Sum up your experience</Text>
          <FormField 
            FormField
            value={form.title}
            placeholder={'Great Time, Beautiful Scenery, etc.'}
            handleChangeText={(e) => setForm({ ...form, title: e })}
          />

          <Text style={styles.modalText}>Describe your journey</Text>
          <FormField 
            FormField
            value={form.description}
            placeholder={'This is a good place for kayaking...'}
            textBoxStyle={styles.customTextBox}
            multiline
            handleChangeText={(e) => setForm({ ...form, description: e })}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit review</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

    </Modal>
  )
}

export default ReviewModal