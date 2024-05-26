import React from "react";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { BannerItem } from "./PromotionalBanner.styles";

const PromotionalBanner: React.FC<{data: any}> = ({data}) => {
  const OPTIONS: EmblaOptionsType = {};
  return (
    <Carousel options={OPTIONS}>
      {data?.map((item: any, index: number) => (
        <BannerItem
          key={index}
          style={{
            position: "relative",
            width: "100%",
            margin: '20px 0px'
          }}
        >
          <Image
            alt={item.name}
            src={item.image}
            layout="responsive"
            width={1920}
            height={1080}
            loading={'eager'}
          />
        </BannerItem>
      ))}
    </Carousel>
  );
};

export default PromotionalBanner;
