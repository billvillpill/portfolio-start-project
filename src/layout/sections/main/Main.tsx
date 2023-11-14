import React from 'react';
import photo from '../../../asset/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const valueTilt = {
    enable: true,
    scaleTilt: 1.03
}

export const Main: React.FC = () => {
    {if (window.screen.width <= 1110) {
        valueTilt.enable = false;
        valueTilt.scaleTilt = 1
    }}
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            {/*Анимация печати заголовка с помощью библиотеки typewriter-effect*/}
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer', 'A Frontend Developer', 'A Web Designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 400,
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt
                        tiltEnable={valueTilt.enable}
                        className="parallax-effect-img"
                        tiltMaxAngleX={40}
                        tiltMaxAngleY={40}
                        perspective={800}
                        transitionSpeed={1500}
                        scale={valueTilt.scaleTilt}
                        gyroscope={true}
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} className="inner-element" alt="girl"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
