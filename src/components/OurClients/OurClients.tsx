import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { CliensWrapper, ClientsContainer } from "./OurClients.styles";
import Image from "next/image";

const OurClients: React.FC = () => {
  return (
    <ClientsContainer>
      <CustomHeading heading="Our Clients" />
      <CliensWrapper
        style={{
          position: "relative",
          width: "100%",
          marginTop: -35,
        }}
      >
        <Image
          alt={"Our Clients"}
          src={"/assets/images/ourClients.png"}
          layout="responsive"
          width={1920}
          height={1080}
          loading={'eager'}
        />
      </CliensWrapper>
    </ClientsContainer>
  );
};

export default OurClients;
