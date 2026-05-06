import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  background-color: #000000;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const CloseButtonText = styled.Text`
  font-size: 24px;
  color: #ffffff;
  font-weight: bold;
`;
