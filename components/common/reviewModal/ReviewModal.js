import { View, Text, Modal } from 'react-native'
import React from 'react'

const ReviewModal = ({isVisible, closeModal, handleSubmit}) => {
  return (
    <Modal visible={isVisible} onRequestClose={closeModal} >
      <Text>ReviewModal</Text>
    </Modal>
  )
}

export default ReviewModal