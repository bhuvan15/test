import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  // usePrevNextButtons,
} from "./VerticalCarouselArrowButtons";
import {
  CarouselContainer,
  CarouselViewport,
  CarouselItemContainer,
  CarouselItem,
  ButtonWrapper,
} from "./VerticalCarousel.styles";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};
import { Lato } from "next/font/google";
import { usePrevNextButtons } from "@/hooks/usePrevNextButton";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const VerticalCarousel: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    loop: false,
    align: "center",
    // align: 0.5,
    ...options,
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log("Embla initialized:", emblaApi);
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <CarouselContainer>
      <CarouselViewport ref={emblaRef}>
        <CarouselItemContainer>
          {slides.map((item, index) => (
            <CarouselItem key={index}>
              <div className="embla__slide__number">
                <p
                  style={{
                    fontSize: 22,
                    fontFamily: lato.style.fontFamily,
                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: 18,
                    fontFamily: lato.style.fontFamily,
                    fontWeight: 400,
                    color: '#434343'
                  }}
                >
                  {item.testimony}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselItemContainer>
      </CarouselViewport>
      <div className="embla__controls">
        <ButtonWrapper className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> 
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </ButtonWrapper>
      </div>
    </CarouselContainer>
  );
};

export default VerticalCarousel;
