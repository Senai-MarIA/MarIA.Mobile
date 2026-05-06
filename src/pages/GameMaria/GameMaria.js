import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import { Container, CloseButton, CloseButtonText } from './style';

export default function GameMaria() {
  const navigation = useNavigation();

  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <Container>
      <WebView
        source={{ uri: 'https://mar-ia-eco-game.vercel.app/' }}
        style={{ flex: 1 }}
        injectedJavaScript={`
          (function setupTouchMapping() {
            const canvas = document.querySelector('canvas');
            if (!canvas) {
              setTimeout(setupTouchMapping, 100);
              return;
            }
            
            const scaleX = window.innerWidth / 1366;
            const scaleY = window.innerHeight / 768;
            const scale = Math.min(scaleX, scaleY);
            
            const scaledWidth = 1366 * scale;
            const scaledHeight = 768 * scale;
            const offsetX = (window.innerWidth - scaledWidth) / 2;
            const offsetY = (window.innerHeight - scaledHeight) / 2;
            
            canvas.style.width = scaledWidth + 'px';
            canvas.style.height = scaledHeight + 'px';
            canvas.style.position = 'absolute';
            canvas.style.left = offsetX + 'px';
            canvas.style.top = offsetY + 'px';
            canvas.style.background = '#000';
            canvas.style.imageRendering = 'pixelated';
            
            document.body.style.margin = '0';
            document.body.style.padding = '0';
            document.body.style.overflow = 'hidden';
            document.body.style.background = '#000';
            document.body.style.width = '100vw';
            document.body.style.height = '100vh';
            
            document.documentElement.style.margin = '0';
            document.documentElement.style.padding = '0';
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.background = '#000';
            
            const mapCoordinates = (clientX, clientY) => ({
              x: (clientX - offsetX) / scale,
              y: (clientY - offsetY) / scale
            });
            
            const createMouseEvent = (type, clientX, clientY) => {
              const coords = mapCoordinates(clientX, clientY);
              return new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                view: window,
                clientX: coords.x,
                clientY: coords.y,
                screenX: coords.x,
                screenY: coords.y
              });
            };
            
            document.addEventListener('touchstart', (e) => {
              if (!e.target.closest('canvas')) return;
              const touch = e.touches[0];
              canvas.dispatchEvent(createMouseEvent('mousedown', touch.clientX, touch.clientY));
            }, {capture: true});
            
            document.addEventListener('touchmove', (e) => {
              if (!e.target.closest('canvas')) return;
              const touch = e.touches[0];
              canvas.dispatchEvent(createMouseEvent('mousemove', touch.clientX, touch.clientY));
            }, {capture: true});
            
            document.addEventListener('touchend', (e) => {
              if (!e.target.closest('canvas')) return;
              canvas.dispatchEvent(createMouseEvent('mouseup', 0, 0));
            }, {capture: true});
            
            window.addEventListener('resize', setupTouchMapping);
          })();
          
          true;
        `}
        scalesPageToFit={true}
        javaScriptEnabled={true}
        pointerEvents={true}
      />

      <CloseButton onPress={() => navigation.goBack()}>
        <CloseButtonText>×</CloseButtonText>
      </CloseButton>
    </Container>
  );
}