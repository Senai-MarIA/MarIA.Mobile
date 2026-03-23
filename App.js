import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import CepFolder from './src/pages/CepFolder';
import NavigationMap from './src/pages/NavigationMap';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <NavigationMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
