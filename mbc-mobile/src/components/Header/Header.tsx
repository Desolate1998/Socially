import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use a different icon library
import { useNavigation, useTheme } from '@react-navigation/native'; // Import useTheme from React Navigation
import BurgerButton from '../BurgerButton/BurgerButton';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

interface IProps{
}

const Header:React.FC<IProps> = () => {
    const { colors, typography, spacing, borderRadius }: any = useTheme(); // Destructure the theme object

    const styles = StyleSheet.create({
        headerContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: colors.backgroound,
            elevation: 2, // Android shadow
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            zIndex:100
        },
        leftContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        searchInput: {
            borderWidth: 1,
            borderColor: '#DDD',
            borderRadius: 4,
            paddingHorizontal: 12,
            paddingVertical: 8,
            fontSize: 16,
            color: '#333',
        },
        rightContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        searchIcon: {
            marginRight: 10
        }
    });
    return (
        <View style={styles.headerContainer}>
            <View style={styles.leftContainer}>
                <BurgerButton onPress={() => { }} />
            </View>
            <View style={styles.rightContainer}>
            </View>
        </View>
    );
};



export default Header;
