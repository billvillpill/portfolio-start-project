import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

// Стили для меню
// Menu

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

const MenuItem = styled.li`
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


//  Mobile Menu

const MobileMenu = styled.nav`
  
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(31, 31, 32, 0.9);
  display: none; // по умолчанию мобильное меню не работает, т.е. если false
  
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  // приходит пропс на основании переданой информации true or false 
  // отображаем меню
  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
// кнопка меню бургер с анимацией
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999; 

  // линия по центру бургера
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;

    //на основании инф из пропсов показываем крест, вместо бургера
    ${props => props.isOpen && css<{ isOpen: boolean }>`
      // opacity  тут не применишь, т.к. он примениться ко всему span
      background-color: rgba(255, 255, 255, 0);
    `}
      // до т.е. верхния линия бургера
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      
      //изменяем расположение верхней палки бургера, делая из ее крест
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    // нижняя линия бургера
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      //изменяем расположение нижней палки бургера, делая из ее крест
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px; // т.к. изначально ширина меньше
      `}
    }
  }
`

// Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`


export const S = {
    Link,
    Mask,
    MenuItem,

    MobileMenu,
    MobileMenuPopup,
    BurgerButton,

    DesktopMenu
}