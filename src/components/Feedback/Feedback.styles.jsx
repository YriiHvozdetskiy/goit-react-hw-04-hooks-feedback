import styled from '@emotion/styled';

export const TitleH1 = styled.h1``;

export const TitleH2 = styled.h2``;

export const List = styled.ul`
  display: ${({ display }) => display};
`;

List.defaultProps = {
  display: 'block',
};

export const Button = styled.button`
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 4px;
  border: solid 1px grey;
  background-color: transparent;
  cursor: pointer;
  transition: transform 0.3s ease 0s;

  :hover {
    transform: scale(1.2);
  }
`;

export const ItemList = styled.li`
  margin-bottom: ${({ gapBottom }) => gapBottom}px;
  margin-right: ${({ gapRight }) => gapRight}px;
`;

ItemList.defaultProps = {
  gapBottom: 0,
  gapRight: 0,
};

export const Span = styled.span`
  margin-left: ${({ gapLeft }) => gapLeft}px;
`;

Span.defaultProps = {
  gapLeft: 0,
};
