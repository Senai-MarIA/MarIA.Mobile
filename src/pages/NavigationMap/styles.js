import styled from 'styled-components/native';
import Svg, { Path } from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const ScreenContainer = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  position: relative;
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
  font-weight: 500;
  margin-left: 4px;
  font-family: 'Poppins_500Medium';
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
  font-weight: 500;
  font-family: 'Poppins_500Medium';
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
  font-weight: 600;
  font-family: 'Poppins_600SemiBold';
`;

export const CurrentAddressValue = styled.Text`
  color: #000000; 
  font-size: 16px;
  font-weight: 500;
  margin-top: 4px;
  font-family: 'Poppins_500Medium';
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
  bottom: 40px;
  margin-left: 10px;
  left: 0;
  right: 0; 
  z-index: 2;
  padding: 0 30px;
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
  font-size: 14px;
  font-weight: 300;
  font-family: 'Poppins_300Light';
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
  font-family: 'Poppins_300Light';
`;

export const AddressTitle = styled.Text`
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Poppins_600SemiBold';
  margin-bottom: 2px;
`;

export const AddressSubtitle = styled.Text`
  color: #E0F2E9; 
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins_400Regular';
`;

export const Button = styled.TouchableOpacity`
position: absolute;
top: 45px;
left: 20px;
z-index: 1;
`