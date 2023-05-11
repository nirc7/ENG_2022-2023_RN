import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button as Btn } from 'react-native';

import { Button, Chip } from '@rneui/themed';

import * as LocalAuthentication from 'expo-local-authentication';

import { useState } from 'react';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';


export default function App() {
  const [authenticated, setAuthenticated] = useState(false);


  const scanFingerPrint = async () => {
    try {
      let results = await LocalAuthentication.authenticateAsync();
      setAuthenticated(results.success);
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={styles.container}>
      <Text>Avi's app!</Text>
      <Btn title="btn shel RN" />
      <Button title="Solid" color="warning" />
      <Button title="Outline" type="outline" />
      <Button title="Clear" type="clear" />
      <Button
        title="HOME"
        iconRight
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 35,
          color: 'black',
        }}

        onPress={scanFingerPrint} />
      <Text>aut?= {authenticated ? 'Yes' : 'No'}</Text>
      <Chip title="Solid Chip" containerStyle={{ marginVertical: 15 }} />
      <MapView
        style={styles.map}
        region={{
          latitude: 32.157154,
          longitude: 34.843893,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}      >

        <Marker
          coordinate={{
            latitude: 32.15715,
            longitude: 34.843893
          }}
          title='my place:)'
          description='here i am'
          //image={require('./assets/icon.png')}
        />

      </MapView>
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
  map: {
    width: 300,
    height: 200,
  },
});
