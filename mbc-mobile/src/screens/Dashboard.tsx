import { View, Text ,StyleSheet, ScrollView} from 'react-native'
import React,{useState} from 'react'
import Header from '../components/Header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/Footer/Footer'
import ContentView from '../components/ContentView/ContentView'
import { Button } from '../components/Button/Button'

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const setMenuOpenEvent = (open:boolean) =>{
        setMenuOpen(open)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header headerToggeledEvent={setMenuOpenEvent}/>
                <ContentView menuOpen={menuOpen}/>
            <Footer />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    footer: {
        alignSelf: 'stretch',
    },
});

export default Dashboard;