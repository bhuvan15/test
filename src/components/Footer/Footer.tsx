import React from "react";
import { Lato } from "next/font/google";
import { theme } from "@/constants/basetheme";
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/constants";
import Image from "next/image";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });
const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1C1C1C",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        marginTop: 55,
      }}
    >
 
      <div style={{ display: "flex", width: "80%", justifyContent: 'space-between' }}>

        <div
          style={{
            width: "55%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "repeat(3, auto)",
            gap: "10px",
          }}
        >
          {FOOTER_LINKS.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 25,
                }}
              >
                <p
                  style={{
                    color: theme.colors.white,
                    fontFamily: lato.style.fontFamily,
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: 12,
                  }}
                >
                  {item.heading}
                </p>
                {item.links.map((link, i) => {
                  return (
                    <p
                      key={i + index}
                      style={{
                        color: "#DBE9FF",
                        fontFamily: lato.style.fontFamily,
                        fontSize: "14px",
                        fontWeight: "400",
                        marginBottom: 12,
                        cursor: "pointer",
                      }}
                    >
                      {link.name}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>

  
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "30%",
            
          }}
        >
 
          <Image
            alt="XTRABRICK"
            src={"/assets/images/Logo.png"}
            height={116}
            width={207}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10
            }}
          >
            {CONTACT_INFO.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ display: "flex", flexDirection: "column", marginTop: '20px', marginRight: '25px' }}
                >
                  <p
                    style={{
                      color: "#DBE9FF",
                      fontFamily: lato.style.fontFamily,
                      fontSize: "14px",
                      fontWeight: "400",
                      marginBottom: 12,
                      cursor: "pointer",

                    }}
                  >
                    {item.heading}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {item.data.map((info, i) => {
                      return (
                        <p
                          key={index + i}
                          style={{
                            color: "#DBE9FF",
                            fontFamily: lato.style.fontFamily,
                            fontSize: "14px",
                            fontWeight: "400",
                            marginBottom: 12,
                            cursor: "pointer",
                          }}
                        >
                          {info}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        
          <div style={{display: 'flex', alignItems: 'center'}}>
            {SOCIAL_LINKS.map((item, index) => <div key={index} style={{marginRight: 35, marginTop: 20}}>
              {<item.icon />}
            </div>)}
          </div>
        </div>
      </div>


      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          height: 60,
          borderTop: "1px solid #ffffff",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: lato.style.fontFamily,
            fontWeight: 400,
            fontSize: "16px",
            letterSpacing: "0.5%",
            lineHeight: "17px",
            color: theme.colors.white,
            width: "80%",
          }}
        >
          2022 © xtrabrick. All rights reserved by VIGHNAHATRA AND COMPANY
        </p>
      </div>
    </div>
  );
};

export default Footer;
