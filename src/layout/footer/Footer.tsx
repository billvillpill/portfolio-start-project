import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from './Footer_Styles'
import {theme} from "../../styles/Theme";

// Имя и ссылки на соц. свои сети
// строка копирайт
// взнизу справа должна быть кнопка возврата на верх.

const socialData = [
    {
        id: 1,
        iconId: "instagram"
    },
    {
        id: 2,
        iconId: "telegram"
    },
    {
        id: 3,
        iconId: "vk-logo"
    },
    {
        id: 4,
        iconId: "linkedin"
    }
];

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                {/*Заголовок*/}
                <S.Name>Svetlana</S.Name>
                {/*список ul and li*/}
                <S.SocialList>
                    {socialData.map((s) => {
                        return <S.SocialItem key={s.id}>
                                    <S.SocialLink>
                                        <Icon height={theme.social.sizeheight}
                                              width={theme.social.sizeWidth}
                                              viewbox={theme.social.sizeViewbox}
                                              iconId={s.iconId}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                    })}
                </S.SocialList>
                <S.Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};

