import { View, Text, Button } from 'react-native';
import React from 'react'

export default function Page1(props) {

  const btnAdd = () => {
    //debugger;
    let num = 7;
    num++;
    console.log(num);
  }

  return (
    <View>
      <Text>Page1</Text>
      <Text>Ruupin's app!</Text>
      <Button title='Add' onPress={btnAdd} />
      <Button title='go2SecondPage' onPress={() => props.navigation.navigate('SecondPage')} />
      <View style={{margin:20}}>
        <Button title='go2Tabs' onPress={() => props.navigation.navigate('TabbedPageNavigator')} />
      </View>
    </View>
  )
}