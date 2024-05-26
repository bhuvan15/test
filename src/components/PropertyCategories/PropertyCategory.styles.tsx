import { theme } from "@/constants/basetheme";
import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 44px;
`;

export const CategoryListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CategoryItemWrapper = styled.div`
  display: flex;
  width: 406px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CategoryItemTitle = styled.p`
    font-size: 20px;
    letter-spacing: 0.5%;
    font-weight: 700;
    line-height: 29px;
  
`;

export const CategoryItemLocation = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.5%;
  line-height: 24px;
  margin: 10px 0px;
`;

export const CategoryItemType = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.5%;
  color: #20B2FF;

`;
export const CategoryItemButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
    width: 160px;
    height: 42px;
    border-radius: 20px;
    background-color: #0173B0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;
export const CategoryItemButtonText = styled.p`
color: ${theme.colors.white}`;

export const CategoryItemImageWrapper = styled.div`
  width: 100%;
`;
