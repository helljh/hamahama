import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const LContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CouponWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  width: 397px;
  height: 170px;
  margin-top: 170px;
  margin-left: 50px;
`;

export const TextWrapper = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
`;

export const TextWrapper2 = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const Name = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 40px;
  font-size: 15px;
`;

export const Logo = styled.img`
  // background-image: url(${process.env.PUBLIC_URL}/img/coupon/logo.svg);
  display: flex;
  width: 58px;
  height: 50px;
  margin-top: 60px;
  margin-left: 90px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  margin-left: 55px;
`;

export const LinkImg = styled.img`
  width: 58px;
  height: 50px;
`;

export const Link = styled.div`
  fonst-size: 13px;
  margin-top: 20px;
  margin-left: 30px;
`;

export const Line = styled.div`
  height: 578px;
  border: 1px solid #3c87bd;
  margin-top: 90px;
  margin-left: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  // text-align: center;
  justify-content: center;
  align-items: center;
  width: 413px;
  height: 76px;
  background-color: #eff9ff;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 50px;
`;

export const RContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StarContainer = styled.div`
  display: flex;
`;

export const Review = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 158px;
  height: 41px;
  border-radius: 25px;
  border: 1px solid #3c87bd;
  margin-top: 50px;
  margin-left: 400px;
`;

export const Star = styled.div`
  width: 49px;
  height: 51px;
  margin-top: 30px;
  margin-left: 260px;
  cursor: pointer;
`;

export const Text = styled.div`
  display: flex;
  margin-top: 40px;
  margin-left: 30px;
`;

export const Number = styled.div`
  display: flex;
  // text-align: center;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 101px;
  background-color: #eff9ff;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 28px;
`;

export const ReviewPage = styled.div`
  margin-top: 30px;
  margin-left: 28px;
`;

export const User = styled.div`
  margin-top: 30px;
  margin-left: 270px;
  display: flex;
`;

export const Edit = styled.img`
  cursor: pointer;
`;

export const Save = styled.img`
  margin-left: 30px;
  cursor: pointer;
`;

export const Satisfaction = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

export const SatisfactionButton = styled.img`
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SatisfactionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
