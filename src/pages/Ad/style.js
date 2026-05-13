import styled from 'styled-components/native';



export const ContainerMission = styled.View`
flex: 1;
background-color: #000000;
justify-content: center;
align-items: center;
`

export const BackPage = styled.TouchableOpacity`
margin-right: 320px;
bottom: 20px;
`;

export const TitleMission = styled.Text`
font-size: 32px;
text-align: center;
width: 275px;
font-family: 'Poppins_400Regular';
color: #FFFFFF;
`;

export const TextSub = styled.Text`
color: #FF00C8;
text-decoration: underline;
font-family: 'Poppins_400Regular';
`

export const TextHero = styled.Text`
padding: 52px;
font-size: 20px;
font-family: 'Poppins_400Regular';
width: 393px;
text-align: center;
color: #FFFFFF;
`

export const PlayButton = styled.TouchableOpacity`
  background-color: rgba(255, 0, 200, 0.1);
  border: 2px solid #FF00C8;
  border-radius: 25px;
  padding: 12px 24px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #FF00C8;
  font-size: 18px;
  font-family: 'Poppins_400Regular';
  font-weight: bold;
`;