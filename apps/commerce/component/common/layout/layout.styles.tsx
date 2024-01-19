import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  flex-basis: auto;
  align-items: center;
  width: 100%;
  padding: 0 56px;
  height: 100%;
  & > * {
    flex: 1;
  }
`;

export const Logo = styled.h1`
  font-size: 0;
  display: inline-block;
  & > a {
    display: inline-block;
  }
`;

export const LNB = styled.ul`
  display: flex;
  gap: 75px;
`;

export const Account = styled.ul`
  justify-content: end;
  display: flex;
  gap: 45px;
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

export const Main = styled.main``;

export const Footer = styled.footer``;

export const SlideSection = styled.section`
  height: 300px;
  width: auto;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
`;
