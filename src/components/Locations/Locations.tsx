import { LOCATIONS } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
import CustomHeading from "../CustomHeading/CustomHeading";
import Image from "next/image";

const Locations = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CustomHeading heading="Our Locations" />
      <Marquee speed={75}>
        {LOCATIONS?.map((item, index) => {
          return <Image src={item} alt={'Locations'} key={index} height={323} width={427} style={{margin: '24px'}} loading={'eager'}/>;
        })}
      </Marquee>
    </div>
  );
};

export default Locations;
