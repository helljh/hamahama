import styled from "styled-components";

export const Images: string[] = [
  `${process.env.PUBLIC_URL}/img/home/page1.png`,
  `${process.env.PUBLIC_URL}/img/home/page2.png`,
  `${process.env.PUBLIC_URL}/img/home/page3.png`,
];

export const Bg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 50px;
  height: 100%;
  width: 100%;
`;
export const Container = styled.div`
  position: relative;
  width: 950px;
  height: 312px;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  margin: 50px auto 0 auto;
`;

export const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PickerWrapper = styled.div`
  position: absolute;
  left: 97%;
  top: 5%;
  transform: translate(-97%, -5%);
  display: flex;
`;

export const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;

export const Promo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  // margin-left: 50px;
`;

export const PromoImg1 = styled.img`
  display: flex;
  margin-right: 50px;
  width: 365px;
  height: 96px;
`;

export const PromoImg2 = styled.img`
  display: flex;
  margin-left: 50px;
  width: 365px;
  height: 96px;
`;
