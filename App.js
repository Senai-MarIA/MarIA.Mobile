import React, { useEffect } from 'react'; // Importe o useEffect
import { Platform, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import * as NavigationBar from 'expo-navigation-bar'; // Importe o NavigationBar
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_300Light, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CepFolder from './src/pages/CepFolder';
import Home from './src/pages/Home';
import NavigationMap from './src/pages/NavigationMap';
import Reminders from './src/pages/Reminders';
import Ad from './src/pages/Ad';
import GameMaria from './src/pages/GameMaria/GameMaria';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
  background-color: #F5F5F5; /* Cor de fundo padrão para evitar flashes brancos */
`

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  // Configuração para esconder a barra de baixo no Android
  useEffect(() => {
    async function hideNavigationBar() {
      if (Platform.OS === 'android') {
        // Esconde os botões (voltar, home, abas)
        await NavigationBar.setVisibilityAsync('hidden');
        
        // Faz com que a barra só apareça com swipe e suma logo depois
        await NavigationBar.setBehaviorAsync('overlay-swipe');
      }
    }

    hideNavigationBar();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ContainerApp>
      {/* Esconde a barra de cima (hora, bateria) */}
      <StatusBar hidden={true} />
      
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="CepFolder" 
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="CepFolder" component={CepFolder} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="NavigationMap" component={NavigationMap} />
          <Stack.Screen name="Reminders" component={Reminders} />
          <Stack.Screen name="Ad" component={Ad} />
          <Stack.Screen name="GameMaria" component={GameMaria} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContainerApp>
  );
}