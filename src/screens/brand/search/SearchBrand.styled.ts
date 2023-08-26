import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InputContainer = styled.div`
  width: 130px;
  height: 23px;
  border: 2px solid #3c87bd;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  font-size: 13px;
  height: 15px;
  width: 110px;
  border: none;
  outline: none;
  margin-left: 10px;
`;

export const SearchButton = styled.img`
  width: 23px;
  height: 23px;
`;
