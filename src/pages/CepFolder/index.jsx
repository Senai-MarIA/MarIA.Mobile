import React, { useEffect, } from 'react';
import { Platform } from 'react-native';
import { Path } from 'react-native-svg';
import * as NavigationBar from 'expo-navigation-bar';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  KeyBoardBehavior,
  WavesBackground,
  LightWaveWrapper,
  DarkWaveWrapper,
  LightGreenSvg,
  DarkGreenSvg,
  TopLeafWrapper,
  TopLeafSvg,
  BottomLeafWrapper,
  BottomLeafSvg,
  Content,
  Title,
  Subtitle,
  Input,
  Button,
  ButtonText,
  Footer,
  FooterIcon,
  FooterText,
  Image,
} from './styles';

export default function CepScreen() {

  const Navigation = useNavigation();
  
  useEffect(() => {
    if (Platform.OS === 'android') {
    
      NavigationBar.setVisibilityAsync("hidden");
     
      NavigationBar.setBehaviorAsync("overlay-swipe");
    }
  }, []);


  return (
    <Container>
      <KeyBoardBehavior behavior={Platform.OS === 'android' ? 'padding' : 'height'}>

        
        <WavesBackground>
          <DarkWaveWrapper>
            <DarkGreenSvg>
              <Path
                d="M5 0H435V635.88C435 635.88 284 805 205.5 778.5C127 752 5 610.53 5 610.53V0Z"
                fill="#2A7F62"
              />
            </DarkGreenSvg>
          </DarkWaveWrapper>

          <LightWaveWrapper>
            <LightGreenSvg>
              <Path
                d="M5 2.8H430V444.278C430 444.278 336.105 709.193 213.547 636.02C90.9884 562.847 5 444.278 5 444.278V2.8Z"
                fill="#35A17C"
              />
            </LightGreenSvg>
          </LightWaveWrapper>
        </WavesBackground>

       
        <TopLeafWrapper>
          <TopLeafSvg>
            <Path
              d="M4 0H35C35 0 35.6541 22.7107 29.5 37.5C22.8202 53.5528 4 52.5 4 52.5V0Z"
              fill="#A997DF"
            />
          </TopLeafSvg>
        </TopLeafWrapper>

        <BottomLeafWrapper>
          <BottomLeafSvg>
            <Path
              d="M9.6732 19C17.2186 7.96853 35.6732 0 35.6732 0C35.6732 0 36.3273 22.7107 30.1732 37.5C23.4934 53.5528 4.67318 52.5 4.67318 52.5C4.67318 52.5 1.29518 31.2488 9.6732 19Z"
              fill="#A997DF"
            />
          </BottomLeafSvg>
        </BottomLeafWrapper>

        
        <Content>
          <Title>Onde você mora?</Title>
          <Subtitle>Qual seu CEP?</Subtitle>

          <Input
            placeholder="CEP"
            keyboardType="numeric"
            maxLength={9}
          />

          <Button onPress={() => Navigation.navigate('Home')}>
            <ButtonText >Pesquisar</ButtonText>
          </Button>
        </Content>

        <Footer>
          <FooterIcon>
            <Image source={require('../../assets/Frame.png')} />
          </FooterIcon>
          <FooterText>Não salvamos seus dados pessoais</FooterText>
        </Footer>

      </KeyBoardBehavior>
    </Container>
  );
}