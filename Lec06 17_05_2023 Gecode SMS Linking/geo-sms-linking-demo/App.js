import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import { useState } from 'react/cjs/react.development';


export default function App() {
  const [location, setLocation] = useState(false);
  const [reverseGC, setReverseGC] = useState(null);

  const btnSendSms = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      //alert('send');
      const { result } =
        await SMS.sendSMSAsync(
          ['0524567897', '0522323232323'],
          'hello you!');
      // alert(result);
    } else {
      alert('misfortune... there\'s no SMS available on this device');
    }
  };

  const btnLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };


  const btnReverseGC = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    }
    if (location) {
      let reverseGC = await Location.reverseGeocodeAsync(location.coords);
      setReverseGC(reverseGC);
      console.log(reverseGC[0].city);
    } else {
      console.log(
        `You must push the Location button first in order to get the location before you 
      can get the reverse geocode for the latitude and longitude!`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Avi app!</Text>
      <Button title="Send SMS"
        color="#aaaa22"
        variant="outlined"
        onPress={btnSendSms} />

      <Button title="Location"
        color="#aaaaff"
        variant="outlined"
        onPress={btnLocation} />

      {location && <Text> location={JSON.stringify(location)}</Text>}

      <Button title="geCode"
        color="#00aaff"
        variant="outlined"
        onPress={btnReverseGC} />

      {reverseGC && <Text> reverseGC={JSON.stringify(reverseGC[0])}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
