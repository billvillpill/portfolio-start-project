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
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`
const ListItem = styled.li`
    
`


