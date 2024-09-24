import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

import styles from './reviewDisplay.style'
import { COLORS } from '../../../constants'
import { StarRatingDisplay } from 'react-native-star-rating-widget'
import ReviewModal from '../reviewModal/ReviewModal'

import { useAuth } from '../../../context/AuthContext'

const ReviewDisplay = ({ave_rating, rating_count, activityID}) => {
    const {user} = useAuth();
    const [showReviewModal, setShowReviewModal] = useState(false)

    const handleAddReview = () => {
      setShowReviewModal(true)
    }

  return (
    <View style={styles.container}>
      <View style={styles.topInfoContainer}>
        {/*Average rating number and the star symbol */}
        <View style={styles.ratingDisplay}>
            <Text style={styles.starText}>{ave_rating.toFixed(1)}</Text>
            <StarRatingDisplay
                rating={1}
                starSize={50}
                maxStars={1}
                color={COLORS.secondary}
                starStyle={{marginHorizontal: 0}}
            />
        </View>
        {/*Total reviews count*/}
        <Text style={styles.ratingCountText}>({rating_count} reviews)</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAddReview}>
        <Text style={styles.buttonText}>Add a review</Text>
      </TouchableOpacity>

      <ReviewModal 
        isVisible={showReviewModal} 
        closeModal={() => {
          Alert.alert('Review has been closed.');
          setShowReviewModal(!showReviewModal);
        }}
        handleSubmit={()=>{setShowReviewModal(false)}}
      />
    </View>
  )
}

export default ReviewDisplay