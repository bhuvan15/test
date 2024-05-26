import { WHO_ARE_WE_DATA } from "@/constants";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { Lato } from "next/font/google";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const WhoAreWe = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "0 50px",
      }}
    >
      <CustomHeading heading="Who are we?" />

      {WHO_ARE_WE_DATA.map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: "95%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 75,
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginRight: 75,
              }}
            >
              {<item.icon />}
              <p
                style={{
                  marginTop: 5,
                  fontSize: 22,
                  fontFamily: lato.style.fontFamily,
                  fontWeight: 400,
                }}
              >
                {item.name}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "75%",
                marginTop: 25,
              }}
            >
              {item?.data?.map((para, index) => {
                return (
                  <p
                    key={index}
                    style={{
                      fontFamily: lato.style.fontFamily,
                      fontWeight: 400,
                      fontSize: 18,
                      color: "#434343",
                      marginBottom: 30,
                    }}
                  >
                    {para}
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhoAreWe;
