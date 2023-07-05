
import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,View,Button,Image} from 'react-native';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Profile from './Profile';
import Header from './src/Header';

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 40 }}
      source={require('./src/scratch-og.jpg')}
    />
  );
}

const App = ({navigation,route}) => {

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'content'} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Header"
            component={Header}
            options={{headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#25B0F5'},
              headerRight: () => (
                <Button
                  onPress={() => alert('Sign in')}
                  title="Sign in"
                  color="#25B0F5"
                />),
            }}
          />
          <Stack.Screen name="Profile" component={Profile}
           options={{headerTitle: (props) => <LogoTitle {...props} />,
           headerStyle: {
             backgroundColor: '#25B0F5'},
             headerRight: () => (
               <Button
               onPress={() => alert('Done')}
                  title="Done"
                  color="#25B0F5"
                />),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};



export default App;
