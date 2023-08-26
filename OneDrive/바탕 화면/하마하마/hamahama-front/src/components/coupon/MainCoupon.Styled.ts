import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0 40px 0;
`;

export const Coupon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 330px;
  height: 140px;
  background-image: url("./img/coupon/coupon.svg");
  background-size: cover;
  margin: 0 30px 0 30px;
`;

export const CouponInfo = styled.div`
  margin: 15px 20px 0 10px;
`;
export const Text = styled.div`
  font-family: nanum-regular;
  font-size: smaller;
  margin: 0 0 5px 0;
`;

export const BrandText = styled.div`
  font-family: nanum-bold;
  font-size: large;
  margin: 0 0 10px 0;
`;

export const DateText = styled.p`
  font-size: small;
  margin: 0 0 -15px 0;
`;
export const BrandImg = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 80px;
  width: 80px;
  border-radius: 70%;
  margin-left: 55px;
`;
