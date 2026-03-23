import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
`;


export const PanelContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const PanelWrapper = styled.View`
  width: 100%;
  background-color: #FFFFFF; 
  border-top-left-radius: 20px; 
  border-top-right-radius: 20px;
`;

export const MiddleContainer = styled.View`
  background-color: #FFFFFF;
  padding: 20px 30px;
  width: 100%;
  z-index: 1;
`;


export const TagsRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const TagCataBagulho = styled.TouchableOpacity`
  background-color: #FFF2E0; 
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const TagCataBagulhoText = styled.Text`
  color: #F2994A;
  font-size: 12px;
  font-weight: bold;
  margin-left: 4px; 
`;

export const TagLixoEletronico = styled.TouchableOpacity`
  background-color: #E0F7F4; 
  flex-direction: row;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
`;

export const TagLixoEletronicoText = styled.Text`
  color: #35A17C; 
  font-size: 12px;
  font-weight: bold;
  margin-left: 4px;
`;


export const CurrentAddressContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px; 
`;

export const AddressTextWrapper = styled.View`
  flex: 1; 
  margin-right: 16px; 
`;

export const CurrentAddressLabel = styled.Text`
  color: #2C6C56; 
  font-size: 16px;
`;

export const CurrentAddressValue = styled.Text`
  color: #333333; 
  font-size: 18px;
  font-weight: bold;
  margin-top: 4px;
`;

export const RouteButton = styled.TouchableOpacity` 
  width: 48px;
  height: 48px;
  border-radius: 24px; 
  justify-content: center;
  align-items: center;
`;

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
  bottom: 60px;
  margin-left: 10px;
  left: 0;
  right: 0; 
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
  margin-right: 15px;
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