import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

export default function TagButton({ text, icon, bgColor, textColor }) {
 return(
    <ButtonContainer bgColor={bgColor}> 
        
        {icon} 
        
        <ButtonText textColor={textColor}>
            {text}
        </ButtonText>

    </ButtonContainer>
 )
}