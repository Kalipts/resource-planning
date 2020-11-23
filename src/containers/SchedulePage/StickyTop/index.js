import React from "styled-components";
import styled from "styled-components";
import TopCellWrapper from "../TopCellWrapper";

const StyledCellWrapper = styled.div`
  top: 0px;
  position: sticky;
  height: 53px;
  z-index: 1000;
`;

const StickyTop = () => {
  return (
    <StyledCellWrapper>
      <TopCellWrapper left={0}></TopCellWrapper>
      <TopCellWrapper left={630}></TopCellWrapper>
    </StyledCellWrapper>
  );
};

export default StickyTop;
