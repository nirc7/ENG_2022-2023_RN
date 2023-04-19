import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const btnAsySto = () => {
    //opt1 – with async-await
    let person = {
      id: 7,
      name: 'avi'
    };

    storeData(person);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log(jsonValue);
      await AsyncStorage.setItem('personObj', jsonValue);
    } catch (e) {
      // saving error
    }
  }

  const btnSpalshonTheSceerebnhedfgnn = async () => {
    let person = await getData();
    console.log(person);
    if (person !== null) {
      console.log(person.name);
    }
    else { console.log('no person to present!'); }
  }

  //opt1 – with async-await
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('personObj')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  }


  return (
    <View style={styles.container}>
      <Text>Avi's app!</Text>
      <Button title="save to AsySt" onPress={btnAsySto} />
      <Button title="get from AsySto" onPress={btnSpalshonTheSceerebnhedfgnn} />
      <Image source={require('./assets/cp.jpg')}
        style={{ width: 150, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />
      <Image source={require('./Imgs/cp2.jpg')}
        style={{ width: 150, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Coldplay_%282842037407%29.jpg' }}
        style={{ width: 150, height: 100, borderWidth: 1, borderColor: 'red', margin: 10 }} />
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
