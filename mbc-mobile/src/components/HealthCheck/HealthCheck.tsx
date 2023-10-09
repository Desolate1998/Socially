import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import apiHandler from '../../utils/ApiHandler'
import axios from 'axios';
export default function HealthCheck() {
    const [health, sethealth] = useState<string>('offline')
    async function CheckHealth() {
            // Define the API endpoint URL
            console.log('d')
      const apiUrl = 'http://10.0.0.100:5036/HealthCheck/echo';
    // Make the API call using Axios
    axios
      .get(apiUrl)
      .then((response) => {
          console.log('success')
      })
      .catch((error) => {
        console.log('d2')

        console.error('Error fetching data:', error);
      }).finally(()=>{
        console.log('ddddd')
      });

    }
  return (
    <View>
      <Text>{health}</Text>
      <Button onPress={CheckHealth}>Check Health </Button>
    </View>
  )
}