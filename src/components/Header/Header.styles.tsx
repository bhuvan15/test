import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 89px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 30px;
`

export const HeaderItemsContainer = styled.div<{gap?: string}>`
    display: flex;
    flex-direction: row;
    gap: ${({gap}) => gap ? gap : '20px'};
`

export const HeaderItem = styled.p`
    color: ${theme.colors.black};
    font-size: 16;
    letter-spacing: 0.05rem;
    font-weight: 400;
    cursor: pointer;
    @media(max-width: 767px) {
       display: none;
    }
`

export const SearchIconWrapper = styled.div`
    height: 42px;
    width: 60px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(0, 0, 0, 0.2);
    margin: 0px 15px;
`

export const PhoneNumberWrapper = styled.div`
    width: 186px;
    height: 42px;
    border-radius: 15px;
    background-color: #0173B0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 15px;
    cursor: pointer;
    gap: 10px;
`

export const MenuIconWrapper = styled.div`
    height: 42px;
    width: 60px;
    border-radius: 15px;
    border: 2px solid rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0px 15px;
`

export const PhoneNumberText = styled.p`
    color: ${theme.colors.white};
    font-size: 18;
    letter-spacing: 0.05rem;
    font-weight: 400;
   

`