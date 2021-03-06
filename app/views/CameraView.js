import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';


export class CameraView extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} 
          type={this.state.type}
          ref={ref => {
            this.camera = ref;
          }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.5,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={                    
                    async () => {
                        if (this.camera) {
                            let photo = await this.camera.takePictureAsync();
                            this.props.navigation.state.params.returnData(photo);
                            this.props.navigation.goBack();
                        }
                    }   
                }>
                <Text style={{ fontSize: 18, marginBottom: 20, color: 'white', backgroundColor: '#000000' ,padding:15}}> Foto </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}