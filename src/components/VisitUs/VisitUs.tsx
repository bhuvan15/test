import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const VisitUs = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: '0 125px',
        marginTop:100,
      }}
    >
      <CustomHeading heading="Come visit us!" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: 'center',
          marginTop: 45,
        }}
      >
        <Image
          src={"/assets/images/companyMap.png"}
          alt={"location map "}
          height={345}
          width={674}
        ></Image>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: '50%',
            marginLeft: 100,
          }}
        >
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 400,
              fontSize: "18px",
              color: "#434343",
            }}
          >
            Xtrabrick offers supportive guidance and assistance to first-time
            buyers throughout the entire homebuying process, from property
            search and financing to closing and beyond, ensuring a smooth and
            stress-free experience.
            <br />
            <br />
            Lets meet!
          </p>
          <br />
          <br />
          <br />
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 700,
              fontSize: "18px",
              color: "#000000",
            }}
          >
            Office No. 45, Vision One Mall, Bhumkar Chowk, <br />
            Wakad - 411033, Pune, Maharashtra, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
