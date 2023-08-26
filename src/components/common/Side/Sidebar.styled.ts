import styled from "styled-components";

export const SideBarWrap = styled.div`
  z-index: 5;
  background-color: #ffffff;
  height: 100%;
  width: 18%;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 1.5s ease;
  &.open {
    right: 0;
    transition: 1.5s ease;
  }
`;

// export const
