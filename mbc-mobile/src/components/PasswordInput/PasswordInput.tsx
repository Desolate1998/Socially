// PasswordInput.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
interface PasswordInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    color?:'primary'|'secondary'
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, onChangeText, value,color='primary' }) => {
    const { colors, typography, spacing, borderRadius }: any = useTheme();
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    const styles = StyleSheet.create({
        passwordContainer: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: colors.primary,
            borderWidth: 1,
            borderRadius: borderRadius.small,
            marginBottom: spacing.small,
        },
        passwordInput: {
            flex: 1,
            height: 40,
            fontSize: typography.fontSize,
            color: colors.text,
            paddingLeft: spacing.small,
        },
        togglePasswordButton: {
            padding: spacing.small,
        },
    });

    return (
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder={placeholder}
                placeholderTextColor={colors.text}
                secureTextEntry={!isPasswordVisible}
                onChangeText={onChangeText}
                value={value}                         
            />
            <TouchableOpacity style={styles.togglePasswordButton} onPress={togglePasswordVisibility}>
                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors[color]} />
            </TouchableOpacity>
        </View>
    );
};



export default PasswordInput;
