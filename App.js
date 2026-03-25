import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { StyleSheet, View } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold, Poppins_300Light, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import CepFolder from './src/pages/CepFolder';
import NavigationMap from './src/pages/NavigationMap';
import Reminders from './src/pages/Reminders';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,

  });

  if (!fontsLoaded) return null;

  const Stack = createNativeStackNavigator();



  return (
    <ContainerApp>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CepFolder" screenOptions={{ HeaderShow: false }}>

          <Stack.Screen options={{ headerShown: false }} name="CepFolder" component={CepFolder} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
          <Stack.Screen options={{ headerShown: false }} name="NavigationMap" component={NavigationMap} />
          <Stack.Screen options={{ headerShown: false }} name="Reminders" component={Reminders} />
        </Stack.Navigator>
      </NavigationContainer>


    </ContainerApp>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
