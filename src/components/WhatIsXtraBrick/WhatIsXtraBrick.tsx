import { WHAT_IS_EXTRABRICS, WHAT_IS_EXTRABRICS_DATA } from "@/constants";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const WhatIsXtraBrick = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "space-between",
        width: "80%",
        marginTop: 135,
      }}
    >
      <CustomHeading heading="What Xtrabrick stands for ? " />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 30,
        }}
      >
        <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
          {WHAT_IS_EXTRABRICS_DATA.map((item, index) => {
            return (
              <p
                key={index}
                style={{
                  fontFamily: lato.style.fontFamily,
                  fontWeight: 400,
                  fontSize: 18,
                  color: "#434343",
                  margin: index === 1 ? "30px 0px" : 0,
                }}
              >
                {item}
              </p>
            );
          })}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(2, auto)",
            gap: "20px",
          }}
        >
          {WHAT_IS_EXTRABRICS?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: 200,
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                {<item.icon />}
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 22,
                    fontFamily: lato.style.fontFamily,
                    fontWeight: 400,
                  }}
                >
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIsXtraBrick;
