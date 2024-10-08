import { COLORS, FONT, SIZES, SHADOWS, getTabColors } from '../../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    map: {
      width: '100%',
      height: '100%',
    },
    infoContainer: {
      flex: 1,
      bottom: 100,
      heigh: 50,
      position: 'absolute',
    },
    cardsContainer: {
      gap: 10,
    },
    button: {
      marginTop: 10,
      borderRadius: 15,
      backgroundColor: COLORS.secondary,
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.small,
    },
    searchBar: {
      marginHorizontal: 16,
    },
    activityMarker: (item) => ({
      height: 24,
      width: 24,
      borderRadius: 12,
      backgroundColor: COLORS.neutral,
      borderColor: getTabColors(item),
      borderWidth: 2,
      justifyContent: 'center',
      alignItems: 'center'
    }),
  });

  export default styles;