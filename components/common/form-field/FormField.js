import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from './FormField.style'
import Ionicons from '@expo/vector-icons/Ionicons';

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    ...props
}) => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.textBox}>
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
                            (<Ionicons name="eye" size={24} color="black"/>) : 
                            (<Ionicons name="eye-off" size={24} color="black"/>)
                        }
                    </TouchableOpacity>
                )}
            </View>
        </View>
  )
}

export default FormField