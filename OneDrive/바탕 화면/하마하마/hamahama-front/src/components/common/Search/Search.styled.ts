import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  height: 340px;
  background-color: white;
  border: 1px solid #3c87bd;
  display: flex;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto; /* 스크롤 생성 */
`;

export const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #3c87bd;
`;
