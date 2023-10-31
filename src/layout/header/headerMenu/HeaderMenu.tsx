import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
// типизация сразу в скобка, т.к. только одно значение, так короче запись
export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {/*перебор массива (находится в header and Works), li выводит столько сколько, значений в массиве*/}
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
`

const Link = styled.a`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  color: transparent;
 
`
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.accent};
  
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    };
  } 
`
const ListItem = styled.li`
  position: relative;
  
  &::before {
    content: "" ;
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    
    transform: scale(0); // спрятали линию
  }
  
  &:hover {
    &::before {
      transform: scale(1); // показали линию
    }
    
    ${Mask} {
      transform: skewX(12deg) translateX(5px); // верхняя маска сдвигаетс (в право) на 5px и на 12 градусов
      color: ${theme.colors.font};   // цыет при наведении на ссылку
      
      & + ${Mask} {
        transform: skewX(12deg) translateX(-5px);  // нижняя маска сдвигаетс (в влево) на -5px и на 12 градусов 
      }
    }
  }
`