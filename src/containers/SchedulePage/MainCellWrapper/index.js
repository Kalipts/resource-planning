import React from "react";
import styled from "styled-components";
import NoWorkingDay from "../NoWorkDayItem";

const StyledMainCellWrapper = styled.div`
  left: ${(props) => props.leff}px;
  width: 630px;
  box-sizing: border-box;
  top: 0px;
  padding: 0px;
  margin: 0px;
  position: absolute;
  height: 100%;
  overflow: hidden;
  outline: none;
`;

const MainCellPositioner = styled.div`
  position: relative;
  height: 100%;
  background: rgba(200, 209, 211, 0);
  transition: background 0.35s ease 0s;
`;

const MainCellWrapper = ({ left = 0 }) => {
  return (
    <StyledMainCellWrapper left={left}>
      <MainCellPositioner>
        <NoWorkingDay  left={1}></NoWorkingDay>
        <NoWorkingDay left={541}></NoWorkingDay>
      </MainCellPositioner>
    </StyledMainCellWrapper>
  );
};

export default MainCellWrapper;
