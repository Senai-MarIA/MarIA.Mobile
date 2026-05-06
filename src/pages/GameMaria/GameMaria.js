import React, { useEffect } from 'react';
import { View } from 'react-native';
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
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: 'https://mar-ia-eco-game.vercel.app/' }}
        style={{ flex: 1 }}
        injectedJavaScript={`
          // Wait for canvas to load and scale it to fit
          setTimeout(() => {
            const canvas = document.querySelector('canvas');
            if (canvas) {
              const scaleX = window.innerWidth / 1366;
              const scaleY = window.innerHeight / 768;
              let scale = Math.min(scaleX, scaleY);
              
              // Slightly enlarge to hide small white edges
              scale = Math.min(scale * 1.02, Math.max(scaleX, scaleY));
              
              canvas.style.width = '1366px';
              canvas.style.height = '768px';
              canvas.style.transform = 'scale(' + scale + ')';
              canvas.style.transformOrigin = 'top left';
              canvas.style.background = '#000';
              
              // Center if needed
              const scaledWidth = 1366 * scale;
              const scaledHeight = 768 * scale;
              const offsetX = (window.innerWidth - scaledWidth) / 2;
              const offsetY = (window.innerHeight - scaledHeight) / 2;
              canvas.style.position = 'absolute';
              canvas.style.left = offsetX + 'px';
              canvas.style.top = offsetY + 'px';
            }
            document.documentElement.style.background = '#000';
            document.body.style.background = '#000';
            document.body.style.overflow = 'hidden';
            document.body.style.margin = '0';
            document.body.style.padding = '0';
          }, 1000);
          true;
        `}
        scalesPageToFit={false}
        javaScriptEnabled={true}
      />
    </View>
  );
}