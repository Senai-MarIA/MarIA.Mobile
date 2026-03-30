import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
background-color: #FFFF;
`;

export const ContainerInfo = styled.View`
justify-content: center;
align-items: center;
flex-direction: row;
justify-content: space-around;
padding:50px 43px;
gap: 29px;
`

export const ContentTitles = styled.View`
`;

export const Title = styled.Text`
font-size: 20px;
font-family: 'Poppins_600SemiBold';
`;

export const SubTitle = styled.Text`
font-size: 14px;
font-family: 'Poppins_400Regular';

`;

export const SectionUser = styled.View`
flex-direction: row;
align-self: center;
gap: 7px;
`;

export const UserName = styled.Text`
font-size: 14px;
align-self: center;
font-family: 'Poppins_300Light';
`;

export const Reminder = styled.View`
flex-direction: row;
align-items: center;
padding-left: 31px;
gap: 10px;
`;

export const RemindersTitle = styled.Text`
font-size: 20px;
font-family: 'Poppins_500Medium';
margin-top: 5px;
`;

export const ContainerCollect = styled.View`
padding: 43px 31px;
gap: 30px;
padding-right: 130px;
`;

export const ContainerTruck = styled.View`
flex-direction: row;
gap: 16px;
align-items: center;

`;

export const CollectText = styled.Text`
font-size: 16px;
font-family: 'Poppins_400Regular';
`;

export const ContainerGameMaria = styled.View`
flex-direction: row;
gap: 16px;
`;

export const TextGameMaria = styled.Text`
font-size: 16px;
font-family: 'Poppins_400Regular';  
`;

export const LinkGameMaria = styled.Text`
font-size: 19px;
color: #FF00C8;
font-family: 'Poppins_500Medium';
`;

export const ContentLinkGameMaria = styled.View`
flex-direction: row;
align-self: flex-end;
padding: 0px 43px;
padding-right: 80px;
align-items: center;
gap: 8px;
font-family: 'Poppins_400Regular';
font-weight: 400;
`;

export const WavesContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  /* Largura do maior SVG para garantir que não corte */
  width: 272px; 
  height: 202px;
`;

export const SvgWrapper = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 45px;
  left: 35px;
  width: 52px;
  height: 52px;
  background-color: #3ba07b;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
`;