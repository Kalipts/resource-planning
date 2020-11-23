import React from "react";
import styled from "styled-components";
import StickyTop from "../StickyTop";
import MainCellWrapper from "../MainCellWrapper";
import ContentWrapper from "../ContentWrapper";

const StyledGridContainer = styled.div`
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAABCAYAAABT7OOpAAAAP0lEQVR4Ae3BMQGDAAADwaDpdbGw1UA3Fny9JlCRLXfH/37e33VmutQAmS41QKZLDZDpUgNkutQAmS41QKbrA8ARFf4sDiKyAAAAAElFTkSuQmCC)
    260px 0px / 630px 630px;
  padding-left: 260px;
  height: 1000px;
  width: 1260px;
  border-bottom: 1px solid rgb(204, 204, 204);
  transition: height 0.25s ease 0s;
`;

const GridContainer = () => {
  return (
    <StyledGridContainer>
      <StickyTop></StickyTop>
    </StyledGridContainer>
  );
};

export default GridContainer;
