import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff9ff;
  height: 78px;
  width: 100%;
`;
export const BlueContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 40px;
  background-color: #eff9ff;
  width: 1141px;
  height: 450px;
  margin: 90px 100px 90px 100px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-top: -20px;
`;

export const MainText = styled.h3`
  font-family: "nanum-bold";
`;
export const Text = styled.p`
  font-family: nanum-bold;
  font-size: medium;
  margin: 40px 0 10px 0;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  width: 496px;
  height: 50px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  font-weight: bold;
  font-size: large;
  width: 70%;
  margin-left: 10px;
`;

export const Button = styled.button`
  background-color: #3c87bd;
  border-radius: 7px;
  border: none;
  color: white;
  width: 108.15px;
  height: 34.92px;
  font-size: medium;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  margin: 0 0 50px 0;
`;
export const Img = styled.img`
  width: 200px;
  height: 200px;
`;
