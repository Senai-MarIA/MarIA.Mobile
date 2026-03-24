import './style.js';
import { Container, ContainerInfo, ContentTitles, SectionUser, SubTitle, Title, UserName, Reminder, RemindersTitle } from './style.js';
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

        </Container>
    )
}