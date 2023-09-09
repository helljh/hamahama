import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  height: auto;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0 40px 0;
`;

export const Coupon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 330px;
  height: 140px;
  background-image: url("./img/coupon/coupon.svg");
  background-size: cover;
  margin: 0 30px 0 30px;
`;

export const CouponInfo = styled.div`
  margin: 0 20px 0 10px;
  width: 170px;
  padding: 10px 0 10px 10px;
`;
export const Text = styled.div`
  font-family: SUIT-Light;
  font-size: smaller;
  height:15px;
  margin: 10px 0 10px 15px;
  overflow: hidden;
`;

export const BrandText = styled.div`
  font-family: SUIT-Bold;
  font-size: large;
  margin: 15px 0 10px 15px;
`;

export const DateText = styled.p`
  font-family: SUIT-Light;
  font-size: 5px;
  line-height: 10px;
  margin: 5px 0 0 15px;
`;

export const BrandImgBox = styled.div`
  position: absolute;
  left: 13.9em;
  top: 1.7em;
`;

export const BrandImg = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 80px;
  width: 80px;
  border-radius: 70%;
`;
