import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "../Screens/Main";
import QuizScreen from "../Screens/QuizScreen";
import Results from "../Screens/Results";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
        <Stack.Screen name="QuizScreen" component={QuizScreen}/>
        <Stack.Screen name="Results" component={Results}/>
    </Stack.Navigator>
);

export default AuthNavigator;