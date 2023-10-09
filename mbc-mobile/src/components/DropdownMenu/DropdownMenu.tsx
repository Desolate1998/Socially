import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import { useTheme } from '@react-navigation/native';
import Overlay from '../Overlay/Overlay';

const DropdownMenu = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
    const { colors, typography, spacing, borderRadius }: any = useTheme();

    const styles = StyleSheet.create({
        dropdownContainer: {
            position: 'absolute',
            top: 60,
            right: 10,
            backgroundColor: colors.backgroundLighter,
            elevation: 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            zIndex: 1000,
            borderRadius: borderRadius.large,
        },
        menuItem: {
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderColor: '#DDD',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        menuItemText: {
            color: colors.text,
            fontSize: typography.fontSize,
            marginRight: 10,
        },
        themeSwitcher: {
            marginRight: 10,
        },
        signOutButton: {
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderColor: '#DDD',
            color: colors.primary,
            fontSize: typography.fontSize,
            textAlign: 'center',
        },
    });
    const onSignOut = () => {

    }
    return (
        <>
        <Overlay isVisible={isVisible} onClose={onClose}/>
        <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={onClose}>
                <Text style={styles.menuItemText}>Dark Theme</Text>
                <ThemeSwitcher />
            </TouchableOpacity>
            <TouchableOpacity  style={styles.menuItem} onPress={onSignOut}>
                <Text style={styles.menuItemText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

export default DropdownMenu;
