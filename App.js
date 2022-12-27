import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { DetalleJugador } from './src/pages/DetalleJugador';
import { Inicio } from './src/pages/Inicio';
import { JugadorCarousel } from './src/pages/CarouselJugador';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './src/router/routes';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const Stack = createNativeStackNavigator();

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <View style={styles.container}>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName={ROUTES.INICIO}
        >
          <Stack.Screen
            name={ROUTES.INICIO}
            component={Inicio}
          />
          <Stack.Screen
            name={ROUTES.DETALLE_JUGADOR}
            component={DetalleJugador}
          />
          <Stack.Screen
            name={ROUTES.CAROUSEL_JUGADOR}
            component={JugadorCarousel}
          />
        </Stack.Navigator>

      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
