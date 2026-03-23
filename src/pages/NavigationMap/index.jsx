import React from 'react';
import { Path } from 'react-native-svg';
import { Image } from 'react-native';
import {
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
} from './styles.js';

export default function BottomPanel() {
  return (
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
  );
}