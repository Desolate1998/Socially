import React from 'react'
import { TouchableOpacity, StyleSheet, Text, DimensionValue } from 'react-native'
import { useTheme } from '@react-navigation/native';
interface IProps {
    color: 'primary' | 'secondary';
    variant: 'outlined' | 'filled' | 'text';
    onClick: () => void;
    label: string;
    width?:DimensionValue;
    shadowSize?: 'none'| 'small' | 'medium' | 'large';
}
export const Button: React.FC<IProps> = ({ onClick, label, color='primary', variant='filled',width='100%',shadowSize = 'small' }) => {
    const { colors, typography, borderRadius,spacing ,shadows}: any = useTheme();
    const getBackgroundColor = () => {
        if (variant === 'outlined' || variant === 'text') {
            return 'none'
        } else {
            return colors[color]
        }
    }

    const getTextColor = () => {
        if (variant === 'outlined' || variant === 'text') {
            return colors[color]
        }else{
            return colors.buttonText[color]
        }
    }

   const getBorderColor = () => {
        if (variant === 'outlined' ) {
            return colors[color]
        }else{
            return 'none'
        }
    }
    const styles = StyleSheet.create({
        button: {
          width: width,
          height: 40,
          backgroundColor: getBackgroundColor(),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius.small,
          borderColor: getBorderColor(),
          borderWidth: variant === 'outlined' ? 1 : 0,
          margin: spacing.small,
           ...shadows[shadowSize]
        },
        text: {
          color: getTextColor(),
          fontSize: typography.fontSize,
        },
      });
    

    return (
        <TouchableOpacity style={styles.button} onPress={onClick}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}
