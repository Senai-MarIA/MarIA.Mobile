import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F8F9FA;
`;

export const ContentScroll = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 120 },
  showsVerticalScrollIndicator: false,
})``;


export const Header = styled.View`
  width: 100%;
  height: 230px;
  position: relative;
`;

export const WaveContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
`;

export const HeaderContent = styled.View`
  position: relative;
  z-index: 10;
  padding-top: 45px;
  padding-horizontal: 25px;
`;


export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TagSuaRegiao = styled.View`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 6px 14px;
  border-radius: 20px;
`;

export const TagSuaRegiaoText = styled.Text`
  color: #FFF;
  font-size: 11px;
  font-weight: 600;
`;

export const ProfileArea = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileName = styled.Text`
  color: #FFF;
  margin-right: 10px;
  font-size: 14px;
`;

export const ProfileAvatar = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(255, 255, 255, 0.3);
  align-items: center;
  justify-content: center;
`;

export const AddressTitle = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
`;

export const AddressSubtitle = styled.Text`
  color: #E0F2E9;
  font-size: 13px;
  margin-top: 2px;
`;


export const CardsContainer = styled.View`
  margin-top: -30px;
  padding-horizontal: 20px;
`;

export const Card = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.08;
  shadow-radius: 10px;
`;

export const CardBorderLeft = styled(Card)`
  border-left-width: 6px;
  border-left-color: #A3E4B7;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

export const DotGreen = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #8BC34A;
  margin-right: 8px;
`;

export const CardSubtitle = styled.Text`
  color: #888;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  flex: 1;
`;

export const IconBoxPurple = styled.View`
  background-color: #F3E8FF;
  padding: 8px;
  border-radius: 12px;
`;

export const CardTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #111;
`;

export const CardTime = styled.Text`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`;

export const TagsRow = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TagCataBagulho = styled.View`
  background-color: #F3E8FF;
  padding: 6px 12px;
  border-radius: 12px;
`;

export const TagCataBagulhoText = styled.Text`
  color: #7B2CBF;
  font-size: 11px;
  font-weight: 600;
`;

export const RowCards = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const SmallCard = styled.TouchableOpacity`
  background-color: #FFF;
  width: 48%;
  border-radius: 20px;
  padding-vertical: 25px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 4px;
  border-bottom-color: #A3E4B7;
  position: relative; 
  
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.08;
  shadow-radius: 6px;
`;

export const SmallCardText = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #222;
`;


export const BottomNavContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #FFF;
  padding-top: 15px;
  padding-bottom: 30px;
  border-top-width: 1px;
  border-top-color: #F0F0F0;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NavItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const NavText = styled.Text`
  font-size: 11px;
  color: #555;
  margin-top: 4px;
  font-weight: 500;
`;

export const MarIAOwl = styled.Image`
  position: absolute;
  bottom: 95px;
  right: 15px;
  z-index: 20;
`;