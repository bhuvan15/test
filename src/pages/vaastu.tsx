import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import { FILTER_DATA, JOBS_DATA, KEY_PRINCIPLES, WHY_IS_VAASTU_IMPORTANT } from "@/constants";
import { theme } from "@/constants/basetheme";
import LocationIcon from "../../public/assets/svg/LocationIcon";
import JobIcon from "../../public/assets/svg/JobIcon";
import RupeeIcon from "../../public/assets/svg/RupeeIcon";
import CustomHeading from "@/components/CustomHeading/CustomHeading";
import WhatIsVaastuShastra from "@/components/Vaastu/WhatIsVaastuShastra";
import VaastuDetailsContainer from "@/components/Vaastu/VaastuDetailsContainer";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const Vastu = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
      <div
        style={{
          width: "100%",
        }}
      >
        <Image
          src={"/assets/images/vaastu.png"}
          alt={"Vaastu"}
          layout={"responsive"}
          objectFit={"cover"}
          width={1920}
          height={1080}
          loading={"eager"}
        />
      </div>

      <WhatIsVaastuShastra />
      <CustomHeading heading="Why is Vaastu Important?" /> 
      <VaastuDetailsContainer data={WHY_IS_VAASTU_IMPORTANT} />
      
      <CustomHeading heading="Key Principles" /> 
      <VaastuDetailsContainer data={KEY_PRINCIPLES} />
      <Footer />
    </div>
  );
};

export default Vastu;
