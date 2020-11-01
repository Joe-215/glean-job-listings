import React from "react";
import styled from "styled-components";

const ListStyled = styled.ul`
  align-items: center;
  display: flex;
  color: hsl(180, 8%, 52%);
  font-size: 12px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const New = styled.li`
  background-color: hsl(180, 29%, 50%);
  border-radius: 25px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  margin: 0 5px;
  padding: 5px 10px 2px 10px;
  text-transform: uppercase;
`;

const Featured = styled.li`
  background-color: hsl(180, 14%, 20%);
  border-radius: 25px;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  margin: 0 5px;
  padding: 5px 10px 2px 10px;
  text-transform: uppercase;
`;

export const Features = (props) => {
  return (
    <ListStyled>
      {props.new ? <New>New!</New> : ""}
      <Featured>Featured</Featured>
    </ListStyled>
  );
};
