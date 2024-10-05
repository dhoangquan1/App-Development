import { COLORS, FONT, SHADOWS, SIZES } from '../../constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.neutral,
    },
    infoContainer: {
        flex: 1,
    },
    scrollContainer: {
        marginHorizontal: 16,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 10
    },
    headerText: {
        color: COLORS.primary,
        fontFamily: FONT.bold,
        fontWeight: "200",
        fontSize: 18,
    },
    title: {
        fontSize: 24,
        fontFamily: FONT.medium,
        color: COLORS.primary,
        paddingVertical: 10,
    },
    cardsContainer: {
        ...SHADOWS.small,
        marginTop: SIZES.medium,
        gap: SIZES.small,
    },
    loadingContainer: {
        height: 300,
        width: '100%',
        backgroundColor: COLORS.tertiary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    }
  });

  export default styles;