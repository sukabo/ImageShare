import React from 'react';
import {
    Image, TouchableOpacity, View, ScrollView, Dimensions, StyleSheet
} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class ImagesGrid extends React.Component  {

    render() {
        return (

            <ScrollView>
                <View style={StyleSheet.imageContainer}>
                    {
                        this.props.images && this.props.images.map (
                            img => {
                                return (
                                    <Image style={styles.images} key={img.id} source={{uri:img.src}}/>
                                );
                            }
                        )
                    }
                </View>
            </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    imageContainer: {
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    image: {
        width: (width/3 - 2),
        margin: 1,
        height: (width/3 - 2),
        resizeMode: 'cover',
    }
});