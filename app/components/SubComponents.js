import React from 'react';
import {View, StyleSheet, TouchableOpacity,Image} from 'react-native';
import colors from '../config/colors';
import Text from '../components/Text';

function SubComponents({onPress,image}) {
    return (
        <TouchableOpacity  onPress={onPress}>
        <View style={styles.container}>
         <Image style={styles.img}source={image}/>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        width:350,
        height:120,
        margin:3,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
    },
    img:{
        height:'97%',
        width:'99%',
        borderRadius:10,
        resizeMode:"stretch"
    },
    text:{
        color:colors.light
    }
})

export default SubComponents;