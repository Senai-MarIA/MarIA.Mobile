import React from 'react';
import { Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Path } from 'react-native-svg';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  ScreenContainer,
  PanelContainer,
  PanelWrapper,
  MiddleContainer,
  TagsRow,
  TagCataBagulho,
  TagCataBagulhoText,
  TagLixoEletronico,
  TagLixoEletronicoText,
  CurrentAddressContainer,
  AddressTextWrapper,
  CurrentAddressLabel,
  CurrentAddressValue,
  RouteButton,
  GreenFooterContainer,
  DarkWaveBottomWrapper,
  DarkGreenBottomSvg,
  LightWaveBottomWrapper,
  LightGreenBottomSvg,
  FooterContent,
  TopRow,
  RegionTag,
  RegionText,
  UserInfoRow,
  UserName,
  AddressTitle,
  AddressSubtitle,
  Button
} from './styles.js';

export default function MapScreen() {

  const Navigation = useNavigation();
  useEffect(() => {
    if (Platform.OS === 'android') {

      NavigationBar.setVisibilityAsync("hidden");

      NavigationBar.setBehaviorAsync("overlay-swipe");
    }
  }, []);

  return (

    <ScreenContainer behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <Button onPress={() => Navigation.navigate('Home')}>
        <Image  source={require("../../assets/arrow-left.png")}/>
      </Button>

      <WebView
        source={{
          html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <style>
                body { margin: 0; padding: 0; overflow: hidden; }
                iframe { width: 100vw; height: 100vh; border: none; }
              </style>
            </head>
            <body>
              <iframe 
                src="https://maps.google.com/maps?q=-23.6288,-46.7369&hl=pt-BR&z=15&output=embed" 
                allowfullscreen>
              </iframe>
            </body>
          </html>
        `}}
        style={{ flex: 1 }}
        scrollEnabled={false}
      />

      <PanelContainer>
        <PanelWrapper>
          <MiddleContainer>
            <TagsRow>
              <TagCataBagulho activeOpacity={0.7}>
                <Image source={require('../../assets/CataBagulho.png')} style={{ width: 16, height: 16, resizeMode: 'contain' }} />
                <TagCataBagulhoText>Cata-Bagulho</TagCataBagulhoText>
              </TagCataBagulho>

              <TagLixoEletronico activeOpacity={0.7}>
                <Image source={require('../../assets/batery.png')} style={{ width: 16, height: 16, resizeMode: 'contain' }} />
                <TagLixoEletronicoText>Lixo Eletrônico</TagLixoEletronicoText>
              </TagLixoEletronico>
            </TagsRow>

            <CurrentAddressContainer>
              <AddressTextWrapper>
                <CurrentAddressLabel>Endereço</CurrentAddressLabel>
                <CurrentAddressValue>Av. Giovanni Gronchi, 5910</CurrentAddressValue>
              </AddressTextWrapper>

              <RouteButton activeOpacity={0.8}>
                <Image source={require('../../assets/Route.png')} style={{ width: 24, height: 24, resizeMode: 'contain' }} />
              </RouteButton>
            </CurrentAddressContainer>
          </MiddleContainer>

          <GreenFooterContainer>
            <DarkWaveBottomWrapper>
              <DarkGreenBottomSvg>
                <Path d="M430 183.664L0 183.664V32.789C0 32.789 155 -5.3598 222 0.640198C289 6.6402 430 38.804 430 38.804V183.664Z" fill="#2A7F62" />
              </DarkGreenBottomSvg>
            </DarkWaveBottomWrapper>

            <LightWaveBottomWrapper>
              <LightGreenBottomSvg>
                <Path d="M430 135.931L0 135.931V47.7117C0 47.7117 108 -22.4628 214 12.6244C320 47.7117 430 47.7117 430 47.7117V135.931Z" fill="#35A17C" />
              </LightGreenBottomSvg>
            </LightWaveBottomWrapper>

            <FooterContent>
              <TopRow>
                <RegionTag>
                  <RegionText>Sua região</RegionText>
                </RegionTag>

                <UserInfoRow>
                  <UserName>Maria</UserName>
                  <Image source={require('../../assets/MarIa.png')} style={{ width: 24, height: 24, borderRadius: 12 }} />
                </UserInfoRow>
              </TopRow>

              <AddressTitle>Rua Santa Archelia, 185</AddressTitle>
              <AddressSubtitle>Jardim Casa Blanca</AddressSubtitle>
            </FooterContent>
          </GreenFooterContainer>

        </PanelWrapper>
      </PanelContainer>
    </ScreenContainer>
  );
}