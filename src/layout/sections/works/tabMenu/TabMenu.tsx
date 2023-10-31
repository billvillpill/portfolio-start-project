import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
// типизация сразу в скобка, т.к. только одно значение, так короче запись
export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {/*перебор массива (находится в header and Works), li выводит столько сколько, значений в массиве*/}
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`
const ListItem = styled.li`
    
`


