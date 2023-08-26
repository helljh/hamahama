import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const JoinForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: larger;
  font-weight: bold;
  margin: 85px 41.81px 41.81px 0;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 675.32px;
  height: 67.28px;
  border: 2px solid #3c87bd;
  border-radius: 20px;
  margin-bottom: 50px;
  background: linear-gradient(to left, white 85%, #3c87bd 15%);
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
  margin-left: 30px;
`;

export const SubmitButton = styled.button`
  background-color: #3c87bd;
  border-radius: 7px;
  border: none;
  font-size: x-large;
  color: white;
  width: 675.32px;
  height: 67.28px;
  margin: 40px 0 70px 0;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  place-content: #c6c6c6;
  font-weight: bold;
  font-size: large;
  margin: 0 53px 0 30px;
  opacity: 55%;
`;

export const InputStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 52px;
`;

export const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin: 0 30px 0 30px;
`;
