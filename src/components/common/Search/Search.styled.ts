import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  height: 300px;
  word-break: break-all;
  background-color: white;
  border: 1px solid #3c87bd;
  display: flex;
  overflow-y: auto; /* 스크롤 생성 */
`;

export const List = styled.div`
  font-family: SUIT-Light;
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
  :hover{
    font-family: SUIT-Bold;
  }
`;

export const ListItem = styled.div`
  padding: 10px;
  //border-bottom: 1px solid #3c87bd;
`;
