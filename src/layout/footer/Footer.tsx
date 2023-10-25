import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

// Имя и ссылки на соц. свои сети
// строка копирайт
// взнизу справа должна быть кнопка возврата на верх.
export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                {/*Заголовок*/}
                <Name>Svetlana</Name>
                {/*список ul and li*/}
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"instagram"}/>
                        </SocialLink>
                    </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"telegram"}/>
                    </SocialLink>
                </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"vk-logo"}/>
                    </SocialLink>
                </SocialItem><SocialItem>
                    <SocialLink>
                        <Icon height={"21px"} width={"21px"} viewbox={"0 0 21px 21px"} iconId={"linkedin"}/>
                    </SocialLink>
                </SocialItem>
                </SocialList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #ffb9b0;
  min-height: 20vh;

`
const Name = styled.span`

`
const SocialList = styled.ul`
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
const Copyright = styled.small`

`