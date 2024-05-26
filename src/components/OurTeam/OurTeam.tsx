import { OUR_TEAM_DATA } from "@/constants";
import Image from "next/image";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  CategoryItemLocation,
  CategoryItemTitle,
  CategoryItemType,
  CategoryItemWrapper,
} from "../PropertyCategories/PropertyCategory.styles";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const OurTeam = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <CustomHeading heading="Our Team" />
      <div
        style={{
          width: "100%",
          display: 'flex',
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        {OUR_TEAM_DATA.map((item, index) => {
          return (
            <CategoryItemWrapper key={index}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={352}
                  height={390}
                  loading={"eager"}
                  style={{marginBottom: 10}}
                />

              <CategoryItemTitle className={lato.className}>
                {item.name}
              </CategoryItemTitle>

              <CategoryItemLocation className={lato.className}>
                {item.position}
              </CategoryItemLocation>

              <CategoryItemType className={lato.className}>
                {item.company}
              </CategoryItemType>
            </CategoryItemWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
