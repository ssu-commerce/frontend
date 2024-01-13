
import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  flex-basis: auto;
  width: 100%;
  & > * {
    flex: 1;
  }
`;

export const Logo = styled.h1`
  width: 185px;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const LNB = styled.ul`
  display: flex;
  gap: 75px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  vertical-align: middle;
  text-align: center;
  color: #000;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Account = styled.ul`
  justify-content: end;
  display: flex;
  gap: 45px;
`;

export const Main = styled.main``;

export const Footer = styled.footer``;
