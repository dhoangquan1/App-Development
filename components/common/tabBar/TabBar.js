import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './TabBar.style';
import { COLORS, icons } from '../../../constants';

import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabBar = ({ state, descriptors, navigation }) => {
  
  const iconSelect = {
    home: (props) => <Ionicons name="home" size={24} color={COLORS.primary} {...props}/>,
    explore: (props) => <Ionicons name="compass" size={24} color={COLORS.primary} {...props}/>,
    map: (props) => <Ionicons name="map-sharp" size={24} color={COLORS.primary} {...props}/>,
    bookmark: (props) => <Ionicons name="bookmark" size={24} color={COLORS.primary} {...props}/>,
    profile: (props) => <MaterialCommunityIcons name="account" size={24} color={COLORS.primary} {...props}/>,
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.tabBarItem}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {
              iconSelect[route.name]({
                color: isFocused ? COLORS.neutral : COLORS.secondary
              })
            }
            <Text style={{ color: isFocused ? COLORS.neutral : COLORS.secondary }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}

export default TabBar;
