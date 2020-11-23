import React from "react";
import styled from "styled-components";

const StyledTopBar = styled.div`
  width: 100%;
  height: 23px;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.borders.greyBorder};
`;

const WeekOfYear = styled.div`
  font-size: 11px;
  letter-spacing: -0.1px;
  color: ${(props) => props.theme.borders.greyText};
  line-height: 22px;
  position: absolute;
  left: 10px;
`;
const WeekString = styled.div`
  line-height: 22px;
  font-size: 11px;
  color: rgb(134 141 146 / 1);
  width: 100%;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`;
const DevideBar = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.borders.greyText};
  height: 23px;
  width: 3px;
  top: 0px;
  right: -1.5px;
  z-index: 1;
`;

const TopBar = () => {
  return (
    <StyledTopBar>
      <WeekOfYear>45</WeekOfYear>
      <WeekString>Nov</WeekString>
      <DevideBar></DevideBar>
    </StyledTopBar>
  );
};

export default TopBar;
