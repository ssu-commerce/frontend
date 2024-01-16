import { Button, SizeKey } from "@sc/ui";
import * as S from "./styles";
import { ColorKey } from "@sc/ui";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onClick: (page: number) => void;
}

export const Pagination = ({
  currentPage,
  lastPage,
  onClick,
}: PaginationProps) => {
  return (
    <S.Wrapper>
      {currentPage > 1 && (
        <S.Page>
          <Button size={SizeKey.MD} onClick={() => onClick(currentPage - 1)}>
            {currentPage - 1}
          </Button>
        </S.Page>
      )}
      <S.Page>
        <Button size={SizeKey.MD} disabled>
          {currentPage}
        </Button>
      </S.Page>
      {currentPage < lastPage && (
        <S.Page>
          <Button size={SizeKey.MD} onClick={() => onClick(currentPage + 1)}>
            {currentPage + 1}
          </Button>
        </S.Page>
      )}
    </S.Wrapper>
  );
};
