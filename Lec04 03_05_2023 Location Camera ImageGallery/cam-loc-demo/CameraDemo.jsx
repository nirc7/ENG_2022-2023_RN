import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View,Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CameraDemo() {
  const [camera, setCamera] = useState();
  const [type, setType] = useState(CameraType.back);
  const [imgSrc, setImgSrc] = useState('http://t2.gstatic.com/images?q=tbn:ANd9GcSpiz6GsEsfY8DPUs41wZvj6eIryeHG4kKyKqIWTl3y20lnWKxr');
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = () => {
    if (camera) {
      camera.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  };

  const onPictureSaved = photo => {
    console.log(photo);
    console.log(photo.uri); 
    setImgSrc(photo.uri);
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Snap</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Image source={{uri:imgSrc}}
        style={{ width:windowWidth - 70, height: 200, borderWidth: 1, borderColor: 'red', margin: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  camera: {
    flex: 0.4,
    width: windowWidth - 70
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 10,
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'red',
  },
});
