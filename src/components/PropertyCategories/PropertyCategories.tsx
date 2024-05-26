import { PROPERTY_CATEGORIES } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  CategoriesWrapper,
  CategoryItemButton,
  CategoryItemButtonText,
  CategoryItemImageWrapper,
  CategoryItemLocation,
  CategoryItemTitle,
  CategoryItemType,
  CategoryItemWrapper,
  CategoryListWrapper,
} from "./PropertyCategory.styles";
import RightArrow from "../../../public/assets/svg/RightArrow";
import { Lato } from "next/font/google";


const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const PropertyCategories = () => {
  const router = useRouter();
  return (
    <CategoriesWrapper>
      <CustomHeading heading="Find the property of your dreams" />
      <CategoryListWrapper>
        {PROPERTY_CATEGORIES.map((item, index) => {
          return (
            <CategoryItemWrapper key={index}>
              <CategoryItemImageWrapper>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout={"responsive"}
                  objectFit={"cover"}
                  width={406}
                  height={306}
                  loading={'eager'}
                />
              </CategoryItemImageWrapper>

              <CategoryItemTitle className={lato.className}>
                {item.title}
              </CategoryItemTitle>

              <CategoryItemLocation className={lato.className}>
                {item.location}
              </CategoryItemLocation>

              <CategoryItemType className={lato.className}>
                {item.type}
              </CategoryItemType>

              {item.ctaTitle && (
                <CategoryItemButton onClick={() => router.push(item.ctaLink)}>
                  <CategoryItemButtonText className={lato.className}>
                    {item.ctaTitle}
                  </CategoryItemButtonText>
                  <RightArrow />
                </CategoryItemButton>
              )}
            </CategoryItemWrapper>
          );
        })}
      </CategoryListWrapper>
    </CategoriesWrapper>
  );
};

export default PropertyCategories;
