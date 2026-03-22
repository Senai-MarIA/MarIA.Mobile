import React from 'react';
import { Path } from 'react-native-svg';
import {
  GreenFooterContainer,
  DarkWaveBottomWrapper,
  DarkGreenBottomSvg,
} from './styles.js';

export default function BottomPanel() {
  return (
    <GreenFooterContainer>
      <DarkWaveBottomWrapper>
        <DarkGreenBottomSvg>
          <Path 
            d="M430 183.664L0 183.664V32.789C0 32.789 155 -5.3598 222 0.640198C289 6.6402 430 38.804 430 38.804V183.664Z" 
            fill="#2A7F62" 
          />
        </DarkGreenBottomSvg>
      </DarkWaveBottomWrapper>
    </GreenFooterContainer>
  );
}