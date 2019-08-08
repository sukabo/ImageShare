import React, {Component} from 'react';
import {
    Dimensions, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import {Button, Icon} from 'native-base';
import Camera from 'react-native-camera';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class CameraScreen extends React.Component  {

    static navigationOptions = {
        tabBarIcon: ( {tintColor}) => (
            <Icon name='camera' style={{fontSize:40, color: tintColor}} />
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <Camera
                    ref={
                        (cam) => {
                            this.camera = cam;
                        }
                    }
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Button onPress={this.takePicture.bind(this)} style={styles.cameraButton} transparent>
                        <Icon name='camera' style={{fontSize:70, color:'white'}} />
                    </Button>
                </Camera>
                <Button onPress={
                        () => this.props.navigation.navigate('ImageList')
                    }
                    style={styles.backButton} transparent
                >
                    <Icon ios='arrow-dropleft' android='arrow-dropleft' style={{fontSize:30, color:'white'}} />

                </Button>
            </View>

        );
    }

    takePicture() {
        const options = {};
        this.camera.capture({metadata: options}).then(
            (data) => {
                this.props.addImage(data);
                this.props.navigation.navigate('ImageList');
            }
        ).catch(err=>console.error(err));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 20,
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    cameraButton: {
        flex: 0,
        alignSelf: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
    }
});


function mapStateToProps(state) {
    return {}
}

function mapStateActionsToProps(dispatch){
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapStateActionsToProps)(CameraScreen);