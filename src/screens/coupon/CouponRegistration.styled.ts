import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 40px;
`;

export const Text = styled.div`
  font-family: nanum-bold;
  font-size: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  // flex-direction: row;
  // align-items: center;
  // text-align: center;
  border: 1px solid #3c87bd;
  width: 543px;
  height: 55px;
  margin-top: 40px;
`;

export const Input = styled.input`
  font-family: nanum-light;
  display: flex;
  outline: none;
  border: none;
  width: 480px;
  height: 50px;
  margin-left: 5px;
`;

export const SearchIcon = styled.img`
  width: 32px;
  height: 31px;
  cursor: pointer;
  margin-top: 13px;
  margin-left: 10px;
`;

export const Name = styled.input`
  font-family: nanum-light;
  display: flex;
  outline: none;
  border: 1px solid #3c87bd;
  width: 404px;
  height: 46px;
  margin-top: 40px;
`;

export const Date = styled.input`
  font-family: nanum-light;
  display: flex;
  outline: none;
  border: 1px solid #3c87bd;
  width: 404px;
  height: 46px;
  margin-top: 40px;
`;

export const Link = styled.input`
  font-family: nanum-light;
  display: flex;
  outline: none;
  border: 1px solid #3c87bd;
  width: 404px;
  height: 46px;
  margin-top: 40px;
`;

export const Code = styled.input`
  font-family: nanum-light;
  display: flex;
  outline: none;
  border: 1px solid #3c87bd;
  width: 404px;
  height: 46px;
  margin-top: 40px;
`;

export const ReviewBox = styled.div`
  font-family: nanum-light;
  display: flex;
  width: 530px;
  height: 147px;
  background-color: #eff9ff;
  border-radius: 10px;
  margin-top: 40px;
`;

export const User = styled.textarea`
  display: flex;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
  width: 416px;
  height: 122px;
  margin: 5px;
  border-radius: 10px;
  font-family: nanum-light;
`;

export const Put = styled.img`
  cursor: pointer;
  width: 166px;
  height: 59px;
  margin-top: 130px;
  margin-left: 300px;
`;

export const Bottom = styled.div`
  display: flex;
`;
