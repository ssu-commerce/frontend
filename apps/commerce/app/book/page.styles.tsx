import styled from "@emotion/styled";

export const SlideSection = styled.section``;

export const BookSection = styled.section``;

export const Filter = styled.div`
  display: flex;
  padding: 32px 96px;
  background: #f9f1e7;
  gap: 32px;
`;

export const Status = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  position: relative;
  margin-left: 33px;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  &:before {
    content: "";
    clear: both;
    display: block;
    position: absolute;
    left: -32px;
    width: 2px;
    height: 24px;
    background-color: #9f9f9f;
  }
`;

export const Sort = styled.div`
  margin-left: auto;
  display: flex;
  gap: 16px;
`;

export const SortItem = styled.div`
  display: flex;
  gap: 8px;
`;

export const SortLabel = styled.span`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

export const BookList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 64px 100px;
`;

export const Item = styled.li`
  & > div {
    margin: auto;
  }
`;
