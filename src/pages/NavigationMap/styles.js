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

export const LightWaveBottomWrapper = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const LightGreenBottomSvg = styled(Svg).attrs({
  viewBox: '0 0 430 121',
  preserveAspectRatio: 'none',
})`
  width: ${width}px;
  height: 121px;
`;

export const FooterContent = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px; 
  z-index: 2;
  padding: 0 30px;
  justify-content: center;
`;

export const TopRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const RegionTag = styled.View`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 4px 12px;
  border-radius: 20px;
`;

export const RegionText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  font-weight: 500;
`;

export const UserInfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserName = styled.Text`
  color: #FFFFFF;
  font-size: 14px;
  margin-right: 8px;
`;

export const AddressTitle = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const AddressSubtitle = styled.Text`
  color: #E0F2E9; 
  font-size: 14px;
`;