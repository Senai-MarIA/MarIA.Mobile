import { ContainerMission, TitleMission, TextSub, TextHero, BackPage } from "./style";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';




export default function Ad() {

    const Navigation = useNavigation();
    return (
        <ContainerMission>
            <BackPage onPress={() => {
                console.log('Voltando para Home de Ad');
                Navigation.navigate('Home');
            }}>
                <Image source={require('../../assets/backPage.png')} />
            </BackPage>
            <TitleMission>
                Missão MarIA: <TextSub>Jogue agora!!!</TextSub>
            </TitleMission>
            <TextHero>
                Torne-se um Herói da Natureza!
            </TextHero>
            <Image source={require('../../assets/BigMaria.png')} style={{ width: 381, height: 446, marginLeft: 26 }} />



        </ContainerMission>
    )
}