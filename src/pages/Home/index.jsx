import React from 'react';
import { StatusBar, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { Svg, Path, } from 'react-native-svg';
import imgmaria from "../../assets/imgmaria.png"
import TagButton from "../../components/TagButton";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  Container, ContentScroll, Header, HeaderTop, TagSuaRegiao, TagSuaRegiaoText,
  ProfileArea, ProfileName, AddressTitle, AddressSubtitle,
  CardsContainer, Card, CardBorderLeft, CardHeader, DotGreen, CardSubtitle,
  IconBoxPurple, CardTitle, CardTime, TagsRow, TagCataBagulho, TagCataBagulhoText,
  RowCards, SmallCard, SmallCardText, BottomNavContainer, WaveContainer, HeaderContent,
  MarIAOwl
} from './styles';

// const Navigation = useNavigation();

export default function Home() {
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

          <WaveContainer style={{ zIndex: 1 }}>
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
                <Image source={require('../../assets/MarIa.png')} style={{ width: 24, height: 24, borderRadius: 12, }} />
              </ProfileArea>
            </HeaderTop>
            <AddressTitle>Rua Santa Archelia, 185</AddressTitle>
            <AddressSubtitle>Jardim Casa Blanca</AddressSubtitle>
          </HeaderContent>
        </Header>

        <CardsContainer style={{ marginTop: -70, zIndex: 1 }}>
          <View style={{ position: 'absolute', left: 336, top: -20, zIndex: 0, }}>
            <Svg width="40" height="61" viewBox="0 0 40 61" fill="none">
              <Path d="M9.6732 19C17.2186 7.96853 35.6732 0 35.6732 0C35.6732 0 36.3273 22.7107 30.1732 37.5C23.4934 53.5528 4.67318 52.5 4.67318 52.5C4.67318 52.5 1.29518 31.2488 9.6732 19Z" fill="#A997DF" />
            </Svg>
          </View>

          <Card>
            <CardHeader>
              <DotGreen />
              <CardSubtitle>PRÓXIMA COLETA</CardSubtitle>
              <IconBoxPurple>
                <MaterialCommunityIcons name="truck-outline" size={20} color="#7B2CBF" />
              </IconBoxPurple>
            </CardHeader>
            <CardTitle>Amanhã</CardTitle>
            <CardTime>07:00 - 10:00</CardTime>
            <TagsRow>
              <TagButton text="Lixo Comum" bgColor="#EAEAEA" textColor="#555" icon={<MaterialCommunityIcons name="trash-can-outline" size={14} color="#555" />} />
              <TagButton text="Reciclável" bgColor="#D1F2EB" textColor="#00A86B" icon={<MaterialCommunityIcons name="recycle" size={14} color="#00A86B" />} />
            </TagsRow>
          </Card>

          <CardBorderLeft>
            <CardHeader>
              <TagCataBagulho><TagCataBagulhoText>Operação cata-bagulho</TagCataBagulhoText></TagCataBagulho>
              <MaterialCommunityIcons name="sofa-outline" size={24} color="#7B2CBF" style={{ marginLeft: 'auto' }} />
            </CardHeader>
            <CardTitle>Domingo</CardTitle>
            <CardTime>07:00 - 10:00</CardTime>
          </CardBorderLeft>

          <RowCards style={{ paddingHorizontal: 20 }}>
            <SmallCard>
              <View style={{ position: 'absolute', right: -5, top: -5, zIndex: -1 }}>
                <Svg width="26" height="27" viewBox="0 0 26 27" fill="none">
                  <Path d="M10.5152 15.8357C8.44313 18.7941 4.7738 19.7469 2.31958 17.9638C-0.710252 15.7625 0.0720633 16.3861 2.14418 13.4277C4.21629 10.4693 9.9055 10.984 12.3597 12.7671C14.7046 14.6386 12.5874 12.8773 10.5152 15.8357Z" fill="#B6A3EF" />
                </Svg>
              </View>
              <Feather name="bell" size={26} color="#000" />
              <SmallCardText>Lembretes</SmallCardText>
            </SmallCard>


            <SmallCard>
              <Feather name="map" size={26} color="#000" />
              <SmallCardText>Mapa</SmallCardText>
            </SmallCard>
          </RowCards>
        </CardsContainer>
      </ContentScroll>


      <MarIAOwl source={imgmaria} style={{ width: 80, height: 80, resizeMode: 'contain' }} />

      <BottomNavContainer>

      </BottomNavContainer>
    </Container>
  );
}