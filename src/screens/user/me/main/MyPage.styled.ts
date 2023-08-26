import { styled } from "styled-components";

export const Layout = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const MainText = styled.h1`
  font-family: nanum-bold;
  padding-top: 20px;
  margin-bottom: 90px;
`;
export const Text = styled.p`
  font-family: nanum-bold;
  font-size: large;
  margin-left: 60px;
`;
export const ViewText = styled.p`
  font-family: nanum-light;
  font-size: 12px;
  padding-top: 15px;
  cursor: pointer;
`;
export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px -5px 60px;
`;

export const MyCoupon = styled.div``;

export const Line = styled.div`
  width: 1095px;
  border: 1px solid #3c87bd;
  margin: 0 0 70px 100px;
`;
