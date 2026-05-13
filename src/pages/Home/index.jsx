import React, { useState, useEffect } from 'react';
import { StatusBar, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Svg, Path } from 'react-native-svg';
import imgmaria from "../../assets/imgmaria.png";
import TagButton from "../../components/TagButton";
import { useNavigation, useRoute } from '@react-navigation/native';

import { descobrirProximaColeta } from '../../utils/dateUtils';

import {
  Container, ContentScroll, Header, HeaderTop, TagSuaRegiao, TagSuaRegiaoText,
  ProfileArea, ProfileName, AddressTitle, AddressSubtitle,
  CardsContainer, Card, CardBorderLeft, CardHeader, DotGreen, CardSubtitle,
  IconBoxPurple, CardTitle, CardTime, TagsRow, RowCards, SmallCard, SmallCardText,
  BottomNavContainer, WaveContainer, HeaderContent, MarIAOwl
} from './styles';

export default function Home() {
  const navigation = useNavigation();
  const route = useRoute();


  const [info, setInfo] = useState(null);

  useEffect(() => {

    const dadosRecebidos = route.params?.info;
    if (dadosRecebidos) {
      setInfo(dadosRecebidos);
    }
  }, [route.params]);


  const addressTitle = info?.logradouro
    ? `${info.logradouro}${info.numero ? `, ${info.numero}` : ''}`
    : 'Aguardando dados...';

  const addressSubtitle = info?.bairro
    ? `${info.bairro}, São Paulo - SP`
    : 'Digite seu CEP para começar';

  const dadosColeta = info?.dados_coleta;

  const textoComum = dadosColeta?.comum
    ? descobrirProximaColeta(dadosColeta.comum.dias)
    : "Aguardando...";
  const horarioComum = dadosColeta?.comum?.horario || "07:00 - 10:00";

  const textoReciclavel = dadosColeta?.reciclavel
    ? descobrirProximaColeta(dadosColeta.reciclavel.dias)
    : null;

  const textoCataBagulho = dadosColeta?.cata_bagulho?.dia_texto || "---";
  const horarioCataBagulho = dadosColeta?.cata_bagulho?.horario || "---";

  return (
    <Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <ContentScroll>
        <Header>
          <View style={{ position: 'absolute', left: -5, top: 5, zIndex: 3 }}>
            <Svg width="36" height="61" viewBox="0 0 36 61" fill="none">
              <Path d="M0 0H31C31 0 31.6541 22.7107 25.5 37.5C18.8202 53.5528 0 52.5 0 52.5V0Z" fill="#A997DF" />
            </Svg>
          </View>

          <WaveContainer style={{ zIndex: 0 }}>
            <Svg width="100%" height="210" viewBox="0 0 412 210" preserveAspectRatio="none">
              <Path d="M0 0H430V150.5C430 150.5 282.5 196.223 209.5 195C136.5 193.777 0 144.5 0 144.5V0Z" fill="#2A7F62" />
            </Svg>
          </WaveContainer>

          <WaveContainer style={{ zIndex: 2 }}>
            <Svg width="100%" height="142" viewBox="0 0 412 142" preserveAspectRatio="none">
              <Path d="M0 0H430V88C430 88 322 158 216 123C110 88 0 88 0 88V0Z" fill="#35A17C" />
            </Svg>
          </WaveContainer>


          <HeaderContent>
            <HeaderTop>
              <TagSuaRegiao><TagSuaRegiaoText>Sua região</TagSuaRegiaoText></TagSuaRegiao>
              <ProfileArea>
                <ProfileName>Maria</ProfileName>
                <Image source={require('../../assets/MarIa.png')} style={{ width: 24, height: 24, borderRadius: 12 }} />
              </ProfileArea>
            </HeaderTop>

            <AddressTitle>{addressTitle}</AddressTitle>
            <AddressSubtitle style={{ textTransform: 'capitalize' }}>{addressSubtitle}</AddressSubtitle>
          </HeaderContent>
        </Header>

        <CardsContainer style={{ marginTop: -70, zIndex: 1 }}>

          <Card>
            <CardHeader>
              <DotGreen />
              <CardSubtitle>PRÓXIMA COLETA</CardSubtitle>
              <IconBoxPurple>
                <MaterialCommunityIcons name="truck-outline" size={20} color="#7B2CBF" />
              </IconBoxPurple>
            </CardHeader>

            <CardTitle>{textoComum}</CardTitle>
            <CardTime>Início às {horarioComum}</CardTime>

            <TagsRow>
              <TagButton
                text="Lixo Comum"
                bgColor="#EAEAEA"
                textColor="#555"
                icon={<MaterialCommunityIcons name="trash-can-outline" size={14} color="#555" />}
              />
              {textoReciclavel === textoComum && (
                <TagButton
                  text="Reciclável"
                  bgColor="#D1F2EB"
                  textColor="#00A86B"
                  icon={<MaterialCommunityIcons name="recycle" size={14} color="#00A86B" />}
                />
              )}
            </TagsRow>
          </Card>

          <CardBorderLeft>
            <CardHeader>
              <MaterialCommunityIcons name="sofa-outline" size={24} color="#7B2CBF" style={{ bottom: 2 }} />
              <CardSubtitle style={{ marginLeft: 10 }}>CATA-BAGULHO</CardSubtitle>
            </CardHeader>
            <CardTitle>{textoCataBagulho}</CardTitle>
            <CardTime>Horário: {horarioCataBagulho}</CardTime>
          </CardBorderLeft>

          <RowCards style={{ paddingHorizontal: 20 }}>
            <SmallCard onPress={() => navigation.navigate('Reminders', { info })}>
              <Feather name="bell" size={26} color="#000" />
              <SmallCardText>Lembretes</SmallCardText>
            </SmallCard>

            <SmallCard onPress={() => navigation.navigate('NavigationMap', { info })}>
              <Feather name="map" size={26} color="#000" />
              <SmallCardText>Mapa</SmallCardText>
            </SmallCard>
          </RowCards>

        </CardsContainer>
      </ContentScroll>

      <MarIAOwl source={imgmaria} style={{ width: 80, height: 80, resizeMode: 'contain' }} />

      <BottomNavContainer>
        <TouchableOpacity onPress={() => navigation.navigate('CepFolder')}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#81818E" />
        </TouchableOpacity>
        <MaterialCommunityIcons name="home" size={28} color="#2A7F62" />
        <TouchableOpacity onPress={() => navigation.navigate('Ad', { info })}>
          <Image source={require('../../assets/anuncio.png')} style={{ width: 28, height: 28, resizeMode: 'contain' }} />
        </TouchableOpacity>
      </BottomNavContainer>
    </Container>
  );
}