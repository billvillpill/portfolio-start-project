import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Skills = styled.section`
 position: relative;
`

const Skill = styled.div`
  width: 330px;
  padding: 42px 20px 52px;
  flex-grow: 1;
  
  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`
const IconWrapper = styled.div`
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.1);
    transform: rotate(45deg) translate(-50%, -50%);
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`
const SkillText = styled.p`
  text-align: center;
  line-height: 1.4;
`

export const S = {
    Skills,
    Skill,
    IconWrapper,
    SkillTitle,
    SkillText
}