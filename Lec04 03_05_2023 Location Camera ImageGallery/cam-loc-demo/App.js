import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import LocationDemo from './LocationDemo';
import CameraDemo from './CameraDemo';
import ImagePickerDemo from './ImagePickerDemo';

export default function App() {
  

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Location Demo And Camera Demo</Text>
      {/* <LocationDemo/> */}
      {/* <CameraDemo/> */}
      <ImagePickerDemo/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
