import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-left: 20px;
  margin-bottom: 50px;
`;

export const CouponGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 5em;
  width: 90%;
`;

export const Coupon = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 230px;
  height: 100px;
  background-image: url(${process.env.PUBLIC_URL}/img/coupon/coupon.svg);
  background-size: cover;
  background-position: center;
  margin: 0 30px 30px 50px;
`;

export const CouponInfo = styled.div`
  margin: 5px 0 0 20px;
  width: 50%;
`;

export const BrandText = styled.div`
  font-family: SUIT-Bold;
  font-size: 15px;
`;

export const Text = styled.div`
  font-family: SUIT-Light;
  font-size: 11px;
  height: 13px;
  width: 100%;
  overflow: hidden;
  margin-top: 10px;

`;

export const DateText = styled.p`
  font-family: SUIT-Light;
  font-size: 2px;
  line-height: 10px;
  margin-top: 10px;
`;

export const BrandImgBox = styled.div`
  position: absolute;
  left: 9.5em;
  top: 1.0em;
`;

export const BrandImg = styled.img`
  display: flex;
  justify-self: flex-end;
  height: 65px;
  width: 65px;
  border-radius: 70%;
`;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 125px;
`;
export const Button = styled.img<{ active: boolean }>`
  display: ${(props) => (props.active ? "block" : "none")};
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
