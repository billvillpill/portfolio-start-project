import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {
    {/*показывать или скрывать скрол*/
    }
    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, [])


    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"goTop"} height={"15"} width={"16"} viewbox={"0 0 16 15"}/>
                </StyledGoTopBtn>
            )}
        </>
    );
};

const StyledGoTopBtn = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 8px;
  position: fixed;
  right: 30px;
  bottom: 30px;
`