import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-image: url(${process.env.PUBLIC_URL}/img/category/Bg.svg);
  background-position: 0% 40%;
  background-repeat: no-repeat;
`;

export const MainText = styled.h1`
  font-family: nanum-bold;
  padding-top: 20px;
  margin-bottom: 90px;
`;
export const Text = styled.p`
  display: flex;
  align-self: flex-start;
  font-family: nanum-bold;
  font-size: large;
  margin: 70px 0 0 50px;
`;
export const ViewText = styled.p`
  font-family: nanum-light;
  cursor: pointer;
`;
export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 40px 0 60px;
`;

export const MyCoupon = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 1200px;
  border: 1px solid #3c87bd;
  margin: 20px 0 20px 50px;
`;
