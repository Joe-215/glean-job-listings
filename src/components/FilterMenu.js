import React from "react";
import styled from "styled-components";
import { useJobs } from "../JobProvider";

const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 24px -3px hsla(180, 14%, 20%, 0.1);
  padding: 5px 25px;
  margin: -30px auto 0 auto;
  max-width: 1000px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const ListStyled = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  list-style-type: none;
  margin: 10px 0;
  padding: 0;
`;

const Filter = styled.li`
  background-color: hsl(180, 31%, 95%);
  border-radius: 5px;
  color: hsl(180, 29%, 50%);
  font-size: 12px;
  font-weight: 700;
  margin: 5px 10px 0 0;
  padding: 10px 0 10px 10px;
`;

const Remove = styled.span`
  background-color: hsl(180, 29%, 50%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: #fff;
  margin-left: 10px;
  padding: 10px 10px 10px 5px;

  :hover {
    background-color: hsl(180, 14%, 20%);
    cursor: pointer;
  }
`;

const Clear = styled.a`
  color: hsl(180, 29%, 50%);
  font-size: 12px;
  font-weight: 700;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const FilterMenu = (props) => {
  const { filters, removeFilter, clearFilters } = useJobs();

  return (
    <Container>
      <ListStyled>
        {filters.map((tag, i) => (
          <Filter key={i}>
            {tag}
            <Remove aria-label="Close" onClick={() => removeFilter(tag)}>
              {" "}
              X
            </Remove>
          </Filter>
        ))}
      </ListStyled>

      <Clear onClick={() => clearFilters()}>Clear</Clear>
    </Container>
  );
};
