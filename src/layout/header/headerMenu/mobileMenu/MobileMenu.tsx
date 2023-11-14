import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'
// типизация сразу в скобка, т.к. только одно значение, так короче запись
export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen) }   //аргумент - противоположное значение
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <Menu />
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
