import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

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
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`
const Name = styled.span`
  ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
   letter-spacing: 3px;
  
`
const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.10);
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${theme.colors.accent};
  
  &:hover {
    color: ${theme.colors.primaryBg};
    transform: translateY(-4px);
  }
`
const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`