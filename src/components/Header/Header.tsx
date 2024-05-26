import React from "react";
import {
  HeaderContainer,
  HeaderItem,
  HeaderItemsContainer,
  MenuIconWrapper,
  PhoneNumberText,
  PhoneNumberWrapper,
  SearchIconWrapper,
} from "./Header.styles";
import Image from "next/image";
import { HEADER_ITEMS } from "@/constants";
import { useRouter } from "next/router";
import SearchIcon from "../../../public/assets/svg/SearchIcon";
import PhoneIcon from "../../../public/assets/svg/PhoneIcon";
import MenuIcon from "../../../public/assets/svg/MenuIcon";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <HeaderContainer>

      <Image
        alt="XTRABRICK"
        src={"/assets/images/Logo.png"}
        height={49}
        width={87}
        onClick={() => router.push('/')}
        style={{
          cursor: 'pointer',
        }}
      />

      
      <HeaderItemsContainer gap={'50px'}>
        {HEADER_ITEMS?.map((item, index) => {
          return (
            <HeaderItem key={index} onClick={() => router.push(item.link)} className={lato.className}>
              {item?.name}
            </HeaderItem>
          );
        })}
      </HeaderItemsContainer>

      <HeaderItemsContainer>

        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <PhoneNumberWrapper>
          <PhoneIcon />
          <PhoneNumberText className={lato.className}>9850004775</PhoneNumberText>
        </PhoneNumberWrapper>
        {/* Menu icon */}
        <MenuIconWrapper>
            <MenuIcon />
        </MenuIconWrapper>
      </HeaderItemsContainer>
    </HeaderContainer>
  );
};

export default Header;
