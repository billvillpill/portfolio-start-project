import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string

}
export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>

            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>demo</Link>
                <Link href={"#"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: ${theme.colors.secondaryBg};
  max-width: 540px;
  width: 100%;
  
  ${Link} {
    padding: 10px 0;
    & + ${Link} {   // применятся к Link, который идет после другого Link
      margin-left: 20px; // отступ между ссылкой Demo and Code
    }
  }
`
const ImageWrapper = styled.div` // размытие картинки
  position: relative;
  
  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.30);
      backdrop-filter: blur(4px);
    }
    ${Button} {
      opacity: 1; // не прозрачный
    }
  }
  
  ${Button} {   // копка на картинке
    opacity: 0; //прозрачность, прячу кнопку по умолчанию, при наведении будет появляться
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &::before {     // фон для кнопки в проектах должен быть больше, для читаемости
      width: 100%;
      height: 100%;
    }
    
  } 
  
`
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
  
`
const Title = styled.h3`
    
`

const Text = styled.p`
  margin: 14px 0 10px;
`

