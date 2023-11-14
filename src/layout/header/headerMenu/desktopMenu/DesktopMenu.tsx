import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'
// типизация сразу в скобка, т.к. только одно значение, так короче запись
export const DesktopMenu: React.FC = () => {
    return (
        <S.DesktopMenu>
            <Menu />
        </S.DesktopMenu>
    );
};

