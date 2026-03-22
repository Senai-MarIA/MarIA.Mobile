import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const GreenFooterContainer = styled.View`
  width: 100%;
  height: 168px; 
  position: relative;
  justify-content: flex-end;
  border-bottom-left-radius: 20px; 
  border-bottom-right-radius: 20px;
  overflow: hidden; 
`;

export const DarkWaveBottomWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
`;

export const DarkGreenBottomSvg = styled(Svg).attrs({
  viewBox: '0 0 430 168',
  preserveAspectRatio: 'none',
})`
  width: ${width}px;
  height: 168px;
`;