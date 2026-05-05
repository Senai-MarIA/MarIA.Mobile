import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function GameMaria() {

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync(); 
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://mar-ia-eco-game.vercel.app/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}