import React, { useEffect } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation } from '@react-navigation/native';
import { Container, CloseButton, CloseButtonText } from './style';

export default function GameMaria() {
  const navigation = useNavigation();

  useEffect(() => {
    // Trava a tela em modo paisagem ao entrar
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

    return () => {
      // Libera a orientação ao sair da tela
      ScreenOrientation.unlockAsync();
    };
  }, []);

  return (
    <Container style={styles.container}>
      <StatusBar hidden />

      <WebView
        source={{ uri: 'https://html-classic.itch.zone/html/17606763/index.html?v=1779246670' }}
        style={styles.game} // Garante que a WebView ocupe o espaço correto e não quebre os toques
        scalesPageToFit={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={false}
        overScrollMode="never"
        
        // Propriedades essenciais para jogos e mídias rodarem sem travar cliques:
        originWhitelist={['*']}
        allowsInlineMediaPlayback={true}
        mixedContentMode="always"
      />

     
      <CloseButton onPress={() => navigation.goBack()}>
        <CloseButtonText>×</CloseButtonText>
      </CloseButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // Garante que o CloseButton (se for absoluto) se alinhe em relação a este container
  },
  game: {
    flex: 1,
    backgroundColor: '#000000', // Evita flashes brancos enquanto o jogo carrega
  },
});