import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import Text from '../components/Text';
import SubComponents from '../components/SubComponents';

function Main({ navigation}) {
    return (
        <Screen style={styles.container}>
            <Text style={styles.mainText}>Quiz App</Text>
            <Text style={styles.subText}>Tap to select</Text>
            <SubComponents image={require("../assets/maths.png")} onPress={() => navigation.navigate("QuizScreen")}/>
            <SubComponents image={require("../assets/biology.jpg")} onPress={() => navigation.navigate("QuizScreen")}/>
            <SubComponents image={require("../assets/chemistry.jpg")} onPress={() => navigation.navigate("QuizScreen")}/>
            <SubComponents image={require("../assets/phy1.jpg")} onPress={() => navigation.navigate("QuizScreen")} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.main,
        alignItems:'center',
    },
    mainText:{
        color: colors.primary,
        fontSize:30,
        marginBottom:10,
    },
    subText:{
        fontSize:15,
        marginBottom:10
    }
})

export default Main;