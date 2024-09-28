import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './FormField.style'
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../../constants';

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    textBoxStyle,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            <View style={textBoxStyle ? textBoxStyle : styles.textBox}>
                <TextInput
                    style={styles.textInput}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        {!showPassword ? 
                            (<Ionicons name="eye" size={24} color={COLORS.primary}/>) : 
                            (<Ionicons name="eye-off" size={24} color={COLORS.primary}/>)
                        }
                    </TouchableOpacity>
                )}
            </View>
        </View>
  )
}

export default FormField