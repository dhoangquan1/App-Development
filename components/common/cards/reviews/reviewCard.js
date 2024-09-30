import { View, Text, TouchableOpacity, Image } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "./reviewCard.style";
import { COLORS, icons } from "../../../../constants";

const ReviewCard = ({ item }) => {

  return (
    <View style={styles.container}>
        {/*User Details Section */}
        <View style={styles.topInfoContainer}>
            <View style={styles.userInfoContainer}>
                <Image
                source={{uri: item.users?.image}}
                resizeMode='cover'
                style={styles.imageContainer}
                />
                <View>
                    <Text style={styles.userNameText}>{item.users?.name}</Text>
                    <Text style={styles.dateText}>reviewed on {item.created_at.substring(0,10)}</Text>
                </View>
            </View>
            <View style={styles.ratingContainer}>
                <StarRatingDisplay
                    rating={item.rating}
                    color={COLORS.secondary}
                    starSize={20}
                    starStyle={{marginHorizontal: 0}}
                />
            </View>
        </View>

      {/*if image then show */}
      {item.image && (
        <View>
          <Image
            src={item.image}
            resizeMode='cover'
            style={styles.reviewImage}
          />
        </View>
      )}

      <View style={styles.descriptionContainer}>
        <Text style={styles.titleText}>
            {item.title}
        </Text>
        <Text style={styles.descriptionText}>
            {item.description}
        </Text>
      </View>
    </View>
  );
};

export default ReviewCard;