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
  font-size: 10px;
  height: 10px;
  width: 110px;
  border: none;
  outline: none;
  margin-left: 10px;
`;

export const SearchButton = styled.img`
  width: 23px;
  height: 23px;
`;

export const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const BrandImg = styled.img`
  width: 120px;
  height: 120px;
  margin-right: 50px;
`;

export const BrandInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button<{ favor: boolean }>`
  background-color: ${(props) => (props.favor ? "#3c87bd" : "white")};
  color: ${(props) => (props.favor ? "white" : "black")};
  border-color: ${(props) => (props.favor ? "none" : "#3c87bd")};
  border-radius: 20px;
  width: 108.15px;
  height: 34.92px;
  font-size: 16px;
  cursor: pointer;
`;
