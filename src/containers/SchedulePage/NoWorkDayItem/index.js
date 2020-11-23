import React from "react";
import styled from "styled-components";

const StyledNoWorkDayItem = styled.div`
  position: absolute;
  opacity: 1;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
      -45deg,
      rgb(230, 230, 230) 12.5%,
      transparent 12.5%,
      transparent 50%,
      rgb(230, 230, 230) 50%,
      rgb(230, 230, 230) 62.5%,
      transparent 62.5%,
      transparent
    )
    0% 0% / 5px 5px;
  width: 89px;
  height: 100%;
  left: ${(props) => props.left}px;
  top: -1px;
  box-sizing: border-box;
`;

const NoWorkDayItem = ({ left = 1 }) => {
  return <StyledNoWorkDayItem left={left}></StyledNoWorkDayItem>;
};

export default NoWorkDayItem;
