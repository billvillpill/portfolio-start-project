import React from 'react';
import {S} from '../HeaderMenu_Styles'

const items = [
    {
        title: "Home",
        href: "home"
    },
    {
        title: "Skills",
        href: "kills"
    },
    {
        title: "Works",
        href: "works"
    },
    {
        title: "Testimony",
        href: "testimony"
    },
    {
        title: "Contact",
        href: "contact"
    }
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {/*перебор массива (находится в header and Works), li выводит столько сколько, значений в массиве*/}
            {/*NavLink используется библиотека react-scroll для плавного перехода ссылкиб поэтому вместо href пишется to. При этом в стилях импортируется библиотека и
            указывается: const NavLink = styled(Link)*/}
            {items.map((item, index) => {
                return <S.MenuItem key={index}>
                    <S.NavLink
                        to={item.href}
                        activeClass="active"
                        smooth={true}
                        spy={true}
                    >
                        {item.title}
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                        <S.Mask>
                            <span>{item.title}</span>
                        </S.Mask>
                    </S.NavLink>
                </S.MenuItem>
            })}
        </ul>
    );
};
