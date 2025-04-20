import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from './pages/Welcome';
import MemberSign from "./pages/MemberSign";
import MemberResult from "./pages/MemberResult";

const Stack = createStackNavigator();

 function Router () {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen 
                name='WelcomeScreen' 
                component={Welcome}
                options={{title:'Welcome'}}/>
                <Stack.Screen name='MemberSignScreen' component={MemberSign} />
                <Stack.Screen name='MemberResultScreen' component = {MemberResult} />
            </Stack.Navigator>
        </NavigationContainer>
    )

 }
 export default Router;