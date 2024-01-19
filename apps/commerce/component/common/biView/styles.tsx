import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 150px;
  background: var(--Color-Light-BG, #f4f5f7);
  & > a {
    display: flex;
  }
  border-radius: 8px;
  overflow: hidden;
`;

export const Info = styled.div`
  padding: 32px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Name = styled.div``;

export const Title = styled.h4`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
`;

export const Subtitle = styled.div`
  color: var(--Color-Gray-3, #898989);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const Price = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  align-items: center;
`;
