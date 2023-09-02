import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  margin-left: 100px;
`;

export const BrandGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 25px;
`;

export const Brand = styled.div<{ brandImgUrl: string }>`
  width: 150px;
  height: 150px;
  margin: 0 30px 0 30px;
  cursor: pointer;
  background-image: ${({ brandImgUrl }) =>
    `url(${process.env.PUBLIC_URL}${brandImgUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 100%;
`;
