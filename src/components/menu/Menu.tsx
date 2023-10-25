import React from 'react';
import styled from "styled-components";
// типизация сразу в скобка, т.к. только одно значение, так короче запись
export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {/*перебор массива (находится в header and Works), li выводит столько сколько, значений в массиве*/}
                {props.menuItems.map((item, index) => {
                    return <li key={index}>
                            <a href="">{item}</a>
                        </li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
  
`