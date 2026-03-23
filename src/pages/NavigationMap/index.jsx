import React from 'react';
import { Path } from 'react-native-svg';
import { Image,Text } from 'react-native';
import {
  PanelWrapper,
  MiddleContainer,
  TagsRow,
  TagCataBagulho,
  TagCataBagulhoText,
  TagLixoEletronico,
  TagLixoEletronicoText,
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
  CurrentAddressContainer,
  AddressTextWrapper,
  CurrentAddressLabel,
  CurrentAddressValue,
  RouteButton,
} from './styles.js';

export default function BottomPanel() {
  return (
    <PanelWrapper>


      <MiddleContainer>
        <TagsRow>
          <TagCataBagulho>
            <Image
              source={require('../../assets/CataBagulho.png')}
              style={{ width: 16, height: 16 }}
            />
            <TagCataBagulhoText> Cata-Bagulho</TagCataBagulhoText>
          </TagCataBagulho>

          <TagLixoEletronico>
            <Image
              source={require('../../assets/batery.png')}
              style={{ width: 16, height: 16 }}
            />
            <TagLixoEletronicoText> Lixo Eletrônico</TagLixoEletronicoText>
          </TagLixoEletronico>
        </TagsRow>

        <CurrentAddressContainer>
          <AddressTextWrapper>
            <CurrentAddressLabel>Endereço atual</CurrentAddressLabel>
            <CurrentAddressValue>Av. Giovanni Gronchi, 5910</CurrentAddressValue>
          </AddressTextWrapper>

          <RouteButton activeOpacity={0.8}>
            <Image
              source={require('../../assets/Route.png')}
              style={{ width: 24, height: 24 }}
            />
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
            <Path
              d="M430 135.931L0 135.931V47.7117C0 47.7117 108 -22.4628 214 12.6244C320 47.7117 430 47.7117 430 47.7117V135.931Z"
              fill="#35A17C"
            />
          </LightGreenBottomSvg>
        </LightWaveBottomWrapper>

        <FooterContent>
          <TopRow>
            <RegionTag>
              <RegionText>Sua região</RegionText>
            </RegionTag>

            <UserInfoRow>
              <UserName>Maria</UserName>
              <Image
                source={require('../../assets/MarIa.png')}
                style={{ width: 24, height: 24, borderRadius: 12 }}
              />
            </UserInfoRow>
          </TopRow>

          <AddressTitle>Rua Santa Archelia, 185</AddressTitle>
          <AddressSubtitle>Jardim Casa Blanca</AddressSubtitle>
        </FooterContent>
      </GreenFooterContainer>

    </PanelWrapper>
  );
}