"use client";

import { FC } from "react";
import { MainProps } from "./layout.types";
import * as S from "./layout.styles";

export const Main: FC<MainProps> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
