import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  color: hsl(180, 8%, 52%);
  font-size: 12px;
  margin: 0;
  padding: 0;

  li:first-of-type {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
  }
`;

const ListItem = styled.li`
  margin: 0 10px;
  padding: 0 15px;
`;

export const Details = (props) => {
  return (
    <StyledList>
      <ListItem>{props.postedAt}</ListItem>
      <ListItem>{props.position}</ListItem>
      <ListItem>{props.location}</ListItem>
    </StyledList>
  );
};
