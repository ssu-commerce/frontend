"use client";

import Image from "next/image";
import Carousel from "component/common/carousel";
import * as S from "./layout.styles";
import { FC } from "react";

export const Banner: FC = () => {
  return (
    <S.SlideSection>
      <Carousel>
        <S.ImageWrapper>
          <Image
            alt="banner1"
            fill
            placeholder="empty"
            src="/assets/Banner.png"
          />
        </S.ImageWrapper>
      </Carousel>
    </S.SlideSection>
  );
};

export default Banner;
