import React from "react";
import styled from "styled-components";
import MobileBg from "../data/images/bg-header-mobile.svg";
import DesktopBg from "../data/images/bg-header-desktop.svg";

const StyledHeader = styled.header`
  background-color: hsl(180, 29%, 50%);
  background-image: url(${MobileBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 155px;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    background-image: url(${DesktopBg});
  }
`;

export const Header = () => {
  return <StyledHeader />;
};
