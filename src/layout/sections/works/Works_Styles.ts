import styled from "styled-components";
import {Link} from "../../../components/Link";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";

const Works = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};
  width: 330px;
  flex-grow: 1;
  
  ${Link} {
    padding: 10px 0;
    & + ${Link} {   // применятся к Link, который идет после другого Link
      margin-left: 20px; // отступ между ссылкой Demo and Code
    }
  }
  
  @media ${theme.media.desktop} {
    max-width: 540px;
  }
`
const ImageWrapper = styled.div` // размытие картинки
  position: relative;

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
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
  }
  
  &:hover {
    &::before {
      opacity: 1;
    }
    
    ${Button} {
      opacity: 1; // не прозрачный
    }
  }
  
  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1; // не прозрачный
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

export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text
}