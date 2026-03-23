import React from 'react';
import { StatusBar, View } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
// import { Image } from 'react-native';
import imgmaria from "../../assets/imgmaria.png"
import TagButton from "../../components/TagButton";
import { MarIAOwl } from './styles';
import {
  Container, ContentScroll, Header, HeaderTop, TagSuaRegiao, TagSuaRegiaoText,
  ProfileArea, ProfileName, ProfileAvatar, AddressTitle, AddressSubtitle,
  CardsContainer, Card, CardBorderLeft, CardHeader, DotGreen, CardSubtitle,
  IconBoxPurple, CardTitle, CardTime, TagsRow, TagCataBagulho, TagCataBagulhoText,
  RowCards, SmallCard, SmallCardText, BottomNavContainer, NavItem, NavText,
} from './styles';

export default function Home() {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#359D73" />

      <ContentScroll>
        <Header>
          <HeaderTop>
            <TagSuaRegiao>
              <TagSuaRegiaoText>Sua região</TagSuaRegiaoText>
            </TagSuaRegiao>

            <ProfileArea>
              <ProfileName>Maria</ProfileName>
              <ProfileAvatar>
                <Feather name="user" size={20} color="#FFF" />
                /* Ícone de usuário dentro do avatar, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones */
              </ProfileAvatar>
            </ProfileArea>
          </HeaderTop>

          <AddressTitle>Rua Santa Archelia, 185</AddressTitle>
          <AddressSubtitle>Jardim Casa Blanca</AddressSubtitle>
        </Header>

        <CardsContainer>

          <Card>
            <CardHeader>
              <DotGreen />
              <CardSubtitle>PRÓXIMA COLETA</CardSubtitle>
              <IconBoxPurple>
                <MaterialCommunityIcons name="truck-outline" size={20} color="#7B2CBF" />
                /* caminhãozinho, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones */
              </IconBoxPurple>
            </CardHeader>
            <CardTitle>Amanhã</CardTitle>
            <CardTime>07:00 - 10:00</CardTime>

            <TagsRow>
              <TagButton
                text="Lixo Comum"
                bgColor="#EAEAEA"
                textColor="#555"
                icon={<MaterialCommunityIcons name="trash-can-outline" size={14} color="#555" />}
              /* desenho de uma lixeira, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones */
              />
              <TagButton
                text="Reciclável"
                bgColor="#D1F2EB"
                textColor="#00A86B"
                icon={<MaterialCommunityIcons name="recycle" size={14} color="#00A86B" />}
              /* desenho de reciclagem, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones */
              />
            </TagsRow>
          </Card>

          <CardBorderLeft>
            <CardHeader>
              <TagCataBagulho>
                <TagCataBagulhoText>Operação cata-bagulho</TagCataBagulhoText>
              </TagCataBagulho>
              <MaterialCommunityIcons name="sofa-outline" size={24} color="#7B2CBF" style={{ marginLeft: 'auto' }} />
              /* desenho de um sofá humilde, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones */
            </CardHeader>
            <CardTitle>Domingo</CardTitle>
            <CardTime>07:00 - 10:00</CardTime>
          </CardBorderLeft>

          <RowCards>
            <SmallCard>
              <Feather name="bell" size={26} color="#000" />
              /* desenho de um sino, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones, voltada para icones mais minimalistas */
              <SmallCardText>Lembretes</SmallCardText>
            </SmallCard>
            <SmallCard>
              <Feather name="map" size={26} color="#000" />
              /* desenho de um mapa, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones, voltada para icones mais minimalistas */
              <SmallCardText>Mapa</SmallCardText>
            </SmallCard>
          </RowCards>

        </CardsContainer>
      </ContentScroll>

      <MarIAOwl source={imgmaria} />

      <BottomNavContainer>
        <NavItem>
          <Feather name="chevron-left" size={24} color="#555" />
          /* desenho de uma seta para esquerda, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones, voltada para icones mais minimalistas */
          <NavText>Voltar</NavText>
        </NavItem>

        <NavItem>
          <Feather name="home" size={24} color="#555" />
          /* desenho de uma casa, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones, voltada para icones mais minimalistas */
          <NavText>Home</NavText>
        </NavItem>

        <NavItem>
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#359D73', justifyContent: 'center', alignItems: 'center' }}>
            <Feather name="smile" size={16} color="#FFF" />
            /* desenho de um rosto sorridente, é de uma biblioteca especifica que coloquei no projeto da expo, podemos testar o quão viavel ela é ou só simplesmente baixar os icones, voltada para icones mais minimalistas */
          </View>
        </NavItem>
      </BottomNavContainer>

    </Container>
  );
}