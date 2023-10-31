import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 10px;

  position: relative;
  z-index: 0;
  
  &:hover {
    &::before {
      height: 10px; // показывает линию при наведении на ссылку
    }
  }
  
  // Линия под ссылкой
  &::before {
    content: "";
    display: inline-block;
    
    background-color: ${theme.colors.accent};
    
    position: absolute;
    bottom: 5px;
    left: 0; // т.к есть padding отсчитывыет от 0 с учетом этого пространсвта
    right: 0;
    z-index: -1;
  }
`