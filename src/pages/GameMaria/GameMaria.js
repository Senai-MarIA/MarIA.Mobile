import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function GameMaria() {
  
  useEffect(() => {
    // Bloqueia a orientação para paisagem
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE); 
    return () => {
      // Desbloqueia a orientação ao sair da tela
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <WebView 
        source={{ uri: 'https://mar-ia-mobile-web.vercel.app/' }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        style={styles.game}
        scrollEnabled={false}
        overScrollMode="never"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  game: {
    flex: 1,
  },
});