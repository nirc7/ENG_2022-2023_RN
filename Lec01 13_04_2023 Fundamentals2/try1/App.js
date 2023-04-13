import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function App() {
  const [counter, setCounter] = useState(0);

  const btnAddOne = () => {
    //console.log(1);
    setCounter(prevC => prevC + 1);
  }

  return (
    <View style={styles.container}>
      <Text>Avi app!</Text>

      <View style={{
        borderWidth: 4,
        borderRadius: 15,
        padding: 15,
        margin: 20,
        backgroundColor: 'lightgrey'
      }}>
        <Text style={{ color: 'red', fontSize: 30 }}>counter={counter}</Text>
      </View>

      <TouchableOpacity onPress={btnAddOne}>
        <View style={{
          borderWidth: 4,
          borderRadius: 15,
          padding: 15,
          margin: 20,
          backgroundColor: 'lightgrey'
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>add +1</Text>
        </View>
      </TouchableOpacity>

      <Button title='add1' onPress={btnAddOne} />

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
