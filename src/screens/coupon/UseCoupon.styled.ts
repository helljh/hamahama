import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`
export const LContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4em;
`;

export const CouponWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  width: 397px;
  height: 170px;
  margin-top: 170px;
  margin-left: 50px;
`;

export const TextWrapper = styled.div`
  margin: 30px 0 0 40px;
  width: 190px;
`;

export const TextWrapper2 = styled.div`
  margin-top: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

export const BrandName = styled.div`
  font-family: SUIT-Bold;
  font-size: 25px;
`;

export const Name = styled.div`
  font-family: SUIT-Light;
  font-size: 15px;
  margin: 20px 0 0 0;
  height: 20px;
  overflow: hidden;
`;

export const BrandImgBox = styled.div`
  position: absolute;
  left : 16.5em;
  top: 2em;
`;
export const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 70%;

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

export const Link = styled.a`
  font-size: 20px;
  margin-left: 30px;
  padding-top: 10px;
  padding-left: 20px;
  text-decoration: none;
  color: black;
`;

export const LinkText = styled.div`
  font-size: 20px;
  margin-left: 0px;
  padding-top: 10px;
  padding-left: 20px;
  text-decoration: none;
  color: black;
`

export const Line = styled.div`
  height: 578px;
  border: 1px solid #3c87bd;
  margin-top: 90px;
  margin-left: 50px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 400px;
  word-break: break-all;
  height: auto;
  overflow: hidden;
  background-color: #eff9ff;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 50px;
  padding: 10px;
`;

export const RContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1em;
`;
export const StarContainer = styled.div`
  display: flex;
  margin-top: 4em;
  margin-bottom: 6em;
`;

export const Review = styled.div`
  font-family: SUIT-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 158px;
  height: 41px;
  border-radius: 25px;
  border: 2px solid #3c87bd;
  margin-top: 50px;
  margin-left: 400px;
`;

export const Star = styled.div`
  width: 49px;
  height: 51px;
  margin-top: 25px;
  margin-left: 260px;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 15px;
  margin-left: 20px;

`;

export const BrandText = styled.p`
  font-family: SUIT-Bold;
  font-size: 25px;
  margin-left: 20px;
  

`;

export const CouponText = styled.p`
  font-family: SUIT-Light;
  font-size: 15px;
  margin-left: 20px;

`;

export const DateText = styled.p`
  font-family: SUIT-Light;
  line-height: 5px;
  font-size: 12px;
  margin-top: 20px;

`;

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 495px;
  height: 50px;
  background-color: #eff9ff;
  border-radius: 15px;
  margin-top: 30px;
  margin-left: 28px;
`;

export const ReviewPage = styled.div`
  font-family: SUIT-Bold;
  margin-top: 30px;
  margin-left: 28px;
`;

export const User = styled.div`
  margin-top: 30px;
  margin-left: 270px;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

export const Edit = styled.img`
  cursor: pointer;
`;

export const Save = styled.img`
  margin-left: 30px;
  cursor: pointer;
`;

export const SatisfactionBox = styled.div`
  display:flex;
  flex-direction: row;
`;

export const Satisfaction = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 180px;
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
  font-family: SUIT-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const unSatisfaction = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  width: 180px;
  margin-left: 100px;
`;

export const unSatisfactionButton = styled.img`
  cursor: pointer;
  padding: 0;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const unSatisfactionText = styled.div`
font-family: SUIT-Bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
