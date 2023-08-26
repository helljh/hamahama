import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 70%;
  min-width: 70%;
  /* padding-top: 1100px;
  position: absolute; */
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 50px 0 0 0;
`;

export const CouponContainer = styled.div`
  display: flex;
  justify-self: flex-start;
  margin: 20px 0 0 0;
`;

export const BlueContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 470px;
  width: 1200px;
  border-radius: 34px;
  background-color: #eff9ff;
  margin-top: 43px;
  margin: 50px 0 0 0;
  padding: 20px 0 20px 0;
`;
export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Coupon = styled.div`
  width: 304px;
  height: 127px;
  background-image: url("./img/main/Coupon.png");
  background-size: cover;
  margin-right: 112px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 10px 0 10px 0;
`;

export const Text = styled.div`
  display: flex;
  align-self: flex-start;
  font-weight: bold;
  font-size: large;
  margin: 10px 0 10px 0;
`;

export const ViewText = styled.p`
  font-size: 12px;
  padding-top: 15px;
  cursor: pointer;
`;

export const IconGroup = styled.div`
  width: 100%;
  margin-top: 49.15px;
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 45px;
`;
