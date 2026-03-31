import { ContainerMission, TitleMission, TextSub,TextHero } from "./style";
import { Image } from "react-native";




export default function Ad() {
    return (
        <ContainerMission>
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