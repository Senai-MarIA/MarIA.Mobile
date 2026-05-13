import { ContainerMission, TitleMission, TextSub, TextHero, BackPage, PlayButton, PlayButtonText } from "./style";
import { Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, } from '@react-navigation/native';

export default function Ad() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <ContainerMission>
            <BackPage onPress={() => navigation.goBack()}>
                <Image source={require('../../assets/backPage.png')} />
            </BackPage>
            <TitleMission>
                Missão MarIA:
            </TitleMission>

            <PlayButton onPress={() => navigation.navigate('GameMaria')}>
                <PlayButtonText>Jogue agora!!!</PlayButtonText>
            </PlayButton>


            <TextHero>
                Torne-se um Herói da Natureza!
            </TextHero>
            <Image source={require('../../assets/BigMaria.png')} style={{ width: 381, height: 446, marginLeft: 26 }} />

        </ContainerMission>
    )
}