import styled from 'styled-components/native';
import Svg from 'react-native-svg';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

export const KeyBoardBehavior = styled.KeyboardAvoidingView`
  flex: 1;
`;


export const WavesBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 800px;
  z-index: 0;
`;

export const LightWaveWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const DarkWaveWrapper = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 0;
  
`;

export const LightGreenSvg = styled(Svg).attrs({
  viewBox: '0 0 430 658',
  preserveAspectRatio: 'xMidYMin slice',
})`
  width: ${width}px;
  height: 658px;
`;

export const DarkGreenSvg = styled(Svg).attrs({
  viewBox: '0 0 430 796',
  preserveAspectRatio: 'xMidYMin slice',
})`
  width: ${width}px;
  height: 796px;
`;


export const TopLeafWrapper = styled.View`
  position: absolute;
  top: 0px; 
  left: -4px; 
  z-index: 2;
`;

export const TopLeafSvg = styled(Svg).attrs({
  viewBox: '0 0 40 61',
})`
  width: 40px;
  height: 61px;
`;

export const BottomLeafWrapper = styled.View`
  position: absolute;
  bottom: 110px; 
  right: 30px; 
  z-index: 2;
  
`;

export const BottomLeafSvg = styled(Svg).attrs({
  viewBox: '0 0 40 61',
})`
  width: 40px;
  height: 61px;
`;



export const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 40px;
  z-index: 3; 
  margin-top: -190px; 
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#A0A0A0',
})`
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  align-self: center;
  width: 314px;
  height: 48px;
  border-radius: 8px;
  padding: 0 15px;
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
  
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #CFC0FE;
  height: 45px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  align-self: center; 
  padding: 0 40px;
  top: 79px;
  
`;

export const ButtonText = styled.Text`
  color: #2a2a2a;
  font-size: 14px;
  font-weight: bold;
`;



export const Footer = styled.View`
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;


export const FooterIcon = styled.View`
  margin-right: 6px;
  justify-content: center;
  align-items: center;
`;


export const Image = styled.Image`
  width: 16px;  
  height: 16px; 
 
`;
export const FooterText = styled.Text`
  color: #666666;
  font-size: 12px;
`;