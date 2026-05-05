import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function GameMaria() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://gx.games/games/tg3q14/maria-ecogame/' }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
            />
        </SafeAreaView>
    );
}