import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: hsl(180, 29%, 50%);
  background-image: url(${process.env.PUBLIC_URL +
  "images/bg-header-mobile.svg"});
  background-size: cover;
  background-repeat: no-repeat;
  height: 155px;
  margin: 0;
  padding: 0;

  @media (min-width: 600px) {
    background-image: url(${process.env.PUBLIC_URL +
    "images/bg-header-desktop.svg"});
  }
`;

export const Header = () => {
  return <StyledHeader />;
};
