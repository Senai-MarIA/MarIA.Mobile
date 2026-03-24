import './style.js';
import { Container, ContainerInfo, ContentTitles, SectionUser, SubTitle, Title, UserName, Reminder, RemindersTitle, ContainerCollect, ContainerTruck, CollectText, ContainerGameMaria, TextGameMaria, LinkGameMaria, ContentLinkGameMaria } from './style.js';
import { Image } from 'react-native';

export default function Reminders() {
    return (
        <Container>
            <ContainerInfo>
                <ContentTitles>
                    <Title>Rua Santa Archelia, 185 </Title>
                    <SubTitle>Jardim Casa Blanca</SubTitle>
                </ContentTitles>

                <SectionUser>
                    <UserName>Maria</UserName>
                    <Image source={require('../../assets/iconMaria.png')} />
                </SectionUser>
            </ContainerInfo>

            <Reminder>
                <Image source={require('../../assets/Bell.png')} />
                <RemindersTitle>Lembretes</RemindersTitle>
            </Reminder>

            <ContainerCollect>
                <ContainerTruck>
                    <Image source={require('../../assets/Truck.png')} />
                    <CollectText>O caminhão da coleta seletiva passará amanhã, às 08:00.</CollectText>
                </ContainerTruck>

                <ContainerGameMaria>
                    <Image source={require('../../assets/GameMaria.png')} />
                    <TextGameMaria>
                        Missão MarIA:  Ajude a MarIA a colocar tudo na lixeira certa e ganha pontos.
                    </TextGameMaria>
                </ContainerGameMaria>
            </ContainerCollect>
            <ContentLinkGameMaria>
                <LinkGameMaria>Jogue agora</LinkGameMaria>
                <Image source={require('../../assets/arrow.png')} />
            </ContentLinkGameMaria>

        </Container>
    )
}