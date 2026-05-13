import React from 'react';
import {
  Container, ContainerInfo, ContentTitles, SectionUser, SubTitle, Title,
  UserName, Reminder, RemindersTitle, ContainerCollect, ContainerTruck,
  CollectText, ContainerGameMaria, TextGameMaria, LinkGameMaria,
  ContentLinkGameMaria, WavesContainer, SvgWrapper, BackButton
} from './style.js';
import { Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';

import { descobrirProximaColeta } from '../../utils/dateUtils';

export default function Reminders() {
  const navigation = useNavigation();
  const route = useRoute();

 
  const info = route.params?.info;

  
  const addressTitle = info?.logradouro
    ? `${info.logradouro}${info.numero ? `, ${info.numero}` : ''}`
    : 'Rua não informada';

  const addressSubtitle = info?.bairro
    ? `${info.bairro}, São Paulo - SP`
    : 'Bairro não informado';

  const dadosReciclavel = info?.dados_coleta?.reciclavel;
  const textoReciclavel = dadosReciclavel
    ? descobrirProximaColeta(dadosReciclavel.dias).toLowerCase()
    : "amanhã";

  const horarioCompleto = dadosReciclavel?.horario || "08:00 - 12:00";
  const horarioInicial  = horarioCompleto.split(" - ")[0];

  return (
    <Container>
      <ContainerInfo>
        <ContentTitles>
          <Title>{addressTitle}</Title>
          <SubTitle>{addressSubtitle}</SubTitle>
        </ContentTitles>

        <SectionUser>
          <UserName>Maria</UserName>
          <Image source={require('../../assets/iconMaria.png')} />
        </SectionUser>
      </ContainerInfo>

      <Reminder>
        <Image source={require('../../assets/Bell.png')} />
        <RemindersTitle>Lembretes</RemindersTitle>
      </Reminder>

      <ContainerCollect>
        <ContainerTruck>
          <Image source={require('../../assets/Truck.png')} />
          <CollectText>
            O caminhão da coleta seletiva passará {textoReciclavel}, às {horarioInicial}.
          </CollectText>
        </ContainerTruck>

        <ContainerGameMaria>
          <Image source={require('../../assets/GameMaria.png')} />
          <TextGameMaria>
            Missão MarIA: Ajude a MarIA a colocar tudo na lixeira certa e ganha pontos.
          </TextGameMaria>
        </ContainerGameMaria>
      </ContainerCollect>

      <ContentLinkGameMaria>
        
        <LinkGameMaria onPress={() => navigation.navigate('Ad', { info })}>
          Jogue agora
        </LinkGameMaria>
        <Image source={require('../../assets/arrow.png')} />
      </ContentLinkGameMaria>

      <WavesContainer pointerEvents="none">
        <SvgWrapper>
          <Svg width="272" height="202" viewBox="0 0 272 202" fill="none">
            <Path d="M434.587 132.137L58.5004 340.605L5.99999 201C5.99999 201 81 111 164 82C247 53 271 -4.90063e-06 271 -4.90063e-06L434.587 132.137Z" fill="#2A7F62" />
          </Svg>
        </SvgWrapper>

        <SvgWrapper>
          <Svg width="227" height="123" viewBox="0 0 227 123" fill="none">
            <Path d="M387.428 53.3627L11.342 261.831L5.80004 123.8C5.80004 123.8 29.01 70.9369 138.73 50.2351C248.451 29.5333 225.3 2.79999 225.3 2.79999L387.428 53.3627Z" fill="#35A17C" />
          </Svg>
        </SvgWrapper>
      </WavesContainer>

      
      <BackButton onPress={() => navigation.goBack()}>
        <Image source={require('../../assets/arrow-left.png')} style={{ width: 24, height: 24 }} />
      </BackButton>
    </Container>
  );
}