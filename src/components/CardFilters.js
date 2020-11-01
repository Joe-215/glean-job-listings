import React from "react";
import styled from "styled-components";
import { useJobs } from "../JobProvider";

const StyledList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  list-style-type: none;
  margin: 20px 0;
  padding: 0;
`;

const Filter = styled.li`
  background-color: hsl(180, 31%, 95%);
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  font-size: 12px;
  font-weight: 700;
  margin: 10px 10px 0 0;
  padding: 10px;

  :hover {
    background-color: hsl(180, 29%, 50%);
    color: #fff;
    cursor: pointer;
  }
`;

export const Filters = (props) => {
  const { addFilter } = useJobs();

  return (
    <StyledList>
      {props.tags.map((tag, i) => (
        <Filter key={i} onClick={() => addFilter(tag)}>
          {tag}
        </Filter>
      ))}
    </StyledList>
  );
};
