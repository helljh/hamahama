import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 233px;
  height: 618px;
  background-color: #eff9ff;
  margin-top: 5%;
  margin-bottom: 200px;
  // font-family: "notosans-light";
`;

export const Info = styled.div`
  font-size: 15px;
  display: flex;
  padding: 30px 0 0 20px;
  cursor: pointer;
`;

export const CategoryMenuBox = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: flex-start;
  padding: 0 0 0 20px;
  cursor: pointer;
`;

export const DropDownContainer = styled.ul`
  // width: 100%;
  // height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
  padding: 0 0 0 20px;
  margin: 0px;
`;

export const ListItem = styled.li<{ clicked: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 13px;
  font-weight: 100;
  list-style: none;
  padding: 5px;
  z-index: 1;
  margin-top: 0.2rem;
  cursor: pointer;

  /* 마우스 클릭 시 글자색 변경 */
  ${({ clicked }) =>
    clicked &&
    css`
      color: #3c87bd; /* 원하는 색상으로 변경 */
    `}
`;

export const Line = styled.div`
  border: 1px solid #3c87bd;
  width: 182px;
  margin-bottom: 10px;
`;
