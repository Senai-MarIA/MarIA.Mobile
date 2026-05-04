import { ContainerMission, TitleMission, TextSub, TextHero, BackPage } from "./style";
import { Image } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Ad() {

    const Navigation = useNavigation();
    const route = useRoute();
    const cepData = route.params?.cepData;


    const validateCepData = (data) => {
        if (!data) {
            console.warn('Ad - Nenhum CEP fornecido');
            return false;
        }

        const requiredFields = ['logradouro', 'bairro', 'localidade', 'uf'];
        const hasAllFields = requiredFields.every(field => data[field]);

        if (!hasAllFields) {
            console.warn('Ad - CEP incompleto, campos faltando:', requiredFields.filter(f => !data[f]));
            return false;
        }

        return true;
    };

    const isValidData = validateCepData(cepData);

    console.log('Ad - cepData recebido:', cepData);
    console.log('Ad - Validação de CEP:', isValidData);

    const handleGoBack = () => {
        console.log('Voltando para Home de Ad');
        if (isValidData) {
            Navigation.navigate('Home', { cepData });
        } else {
            Navigation.navigate('Home');
        }
    };

    return (
        <ContainerMission>
            <BackPage onPress={handleGoBack}>
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