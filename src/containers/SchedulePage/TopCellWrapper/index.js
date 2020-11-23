import React from "react";
import styled from "styled-components";
import TopBar from "../TopBar";
import TopWeek from "../TopWeek";

const StyledTopCellWrapper = styled.div`
  position: absolute;
  top: 0px;
  border-bottom: 1px solid ${(props) => props.theme.borders.greyBorderButton};
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 630px;
  left: ${(props) => props.left}px;
`;

const TopCellWrapper = ({ left }) => {
  return (
    <StyledTopCellWrapper left={left}>
      <TopBar></TopBar>
      <TopWeek></TopWeek>
    </StyledTopCellWrapper>
  );
};

export default TopCellWrapper;
