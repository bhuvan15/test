import React from "react";
import Image from "next/image";
import { theme } from "@/constants/basetheme";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const AboutUs = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "590px",
        paddingTop: 75,
        marginTop: 55
      }}
    >
      <Image
        src={"/assets/images/aboutUsBg.png"}
        alt={"About Us"}
        layout={"responsive"}
        objectFit={"cover"}
        width={1920}
        height={1080}
        style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
        loading={"eager"}
      />
      <div
        style={{
          borderRadius: 40,
          height: 326,
          width: 326,
          backgroundColor: theme.colors.white,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          alt="XTRABRICK"
          src={"/assets/images/Logo.png"}
          height={98}
          width={174}
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", marginLeft: 140 }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 700,
              fontSize: "32px",
              color: "#20B2FF",
              marginBottom: 15,
            }}
          >
            About Us
          </h2>
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 400,
              fontSize: "22px",
              color: "#ffffff",
              marginBottom: 20,
            }}
          >
            XTRABRICK REALTORS
          </p>
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 400,
              fontSize: "22px",
              color: "#20B2FF",
            }}
          >
            20 +
          </p>
          <p
            style={{
              fontFamily: lato.style.fontFamily,
              fontWeight: 700,
              fontSize: "22px",
              color: "#ffffff",
              marginTop: 5,
            }}
          >
            Years of Experience
          </p>
        </div>
        <p
          style={{
            marginTop: 135,
            fontFamily: lato.style.fontFamily,
            fontWeight: 700,
            fontSize: "22px",
            color: "#ffffff",
          }}
        >
          Office No. 45, Vision One Mall, Bhumkar Chowk, <br />Wakad - 411033,
          Pune, Maharashtra, India
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
