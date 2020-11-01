import React from "react";
import styled from "styled-components";

const PositionTitle = styled.h3`
  color: hsl(180, 14%, 20%);
  font-size: 15px;
`;

export const Title = (props) => {
  return <PositionTitle>{props.position}</PositionTitle>;
};
