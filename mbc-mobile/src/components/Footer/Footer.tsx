import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const Footer = () => {
    const { colors, typography, spacing, borderRadius }: any = useTheme(); // Destructure the theme object
    const [selectedMenu, setselectedMenu] = useState<string>('Home')

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: colors.background, // Facebook blue color
            borderTopColor: colors.backgroundLighter,
            borderTopWidth: 1,
            padding: 10,
            
        },
        iconContainer: {
            alignItems: 'center',
            borderRadius: borderRadius.large,
            padding: 10
        },
        text: {
            color: colors.text,
            fontSize: 15,
            marginTop: 5,
        },
        selected: {
            backgroundColor: colors.backgroundLighter,
            alignItems: 'center',
            borderRadius: borderRadius.large,
            elevation: 1,
            padding: 10

        },
        selectedText:{
            color: colors.primary,
            fontSize: 15,
            marginTop: 5,
        }

    });

    const changeMenue = (option:string)=>{
        setselectedMenu(option)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>changeMenue('Home')} style={ selectedMenu =='Home'? styles.selected:styles.iconContainer}>
                <Icon name="home" style={ selectedMenu =='Home'? styles.selectedText:styles.text}  size={24} />
                <Text style={ selectedMenu =='Home'? styles.selectedText:styles.text}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeMenue('Friends')} style={ selectedMenu =='Friends'? styles.selected:styles.iconContainer}>
                <Icon name="users" size={24} style={ selectedMenu =='Friends'? styles.selectedText:styles.text} />
                <Text style={ selectedMenu =='Friends'? styles.selectedText:styles.text}>Friends</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeMenue('Groups')} style={ selectedMenu =='Groups'? styles.selected:styles.iconContainer}>
                <Icon name="group" size={24} style={ selectedMenu =='Groups'? styles.selectedText:styles.text} />
                <Text style={ selectedMenu =='Groups'? styles.selectedText:styles.text}>Groups</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeMenue('Marketplace')} style={ selectedMenu =='Marketplace'? styles.selected:styles.iconContainer}>
                <Icon name="shopping-bag" size={24} style={ selectedMenu =='Marketplace'? styles.selectedText:styles.text} />
                <Text style={ selectedMenu =='Marketplace'? styles.selectedText:styles.text}>Marketplace</Text>
                </TouchableOpacity>
            <TouchableOpacity onPress={()=>changeMenue('More')} style={ selectedMenu =='More'? styles.selected:styles.iconContainer}>
                <Icon name="ellipsis-h" size={24} style={ selectedMenu =='More'? styles.selectedText:styles.text} />
                <Text style={ selectedMenu =='More'? styles.selectedText:styles.text}>More</Text>
                </TouchableOpacity>
        </View>
    );
};

export default Footer;
