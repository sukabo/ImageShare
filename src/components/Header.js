import React from 'react';
import {    Icon, Button } from 'native-base';
import {    Image, View, StyleSheet, Platform} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    Platform.OS === 'android' && 
                    <Button transparent onPress={this.props.onMenuButtonPress}>
                        <Icon android='menu' style={styles.menuIcon} />
                    </Button>
                }
                <Image source={require('../../img/logo.png')} style={styles.logo} />
                {
                    Platform.OS === 'android' && 
                    <Button transparent onPress={this.props.onCameraPress}>
                        <Icon android='camera' style={styles.cameraIcon} />
                    </Button>
                }

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    menuIcon: {
        fontSize: 30,
        color: 'black',
    },
    logo: {
        height: 25,
        resizeMode: 'contain',
        margin: 10
    },
    cameraIcon: {
        fontSize: 30,
        color: 'black'
    }
});