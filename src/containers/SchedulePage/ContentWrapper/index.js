import React from "react";
import styled from "styled-components";
import RowGroup from "../RowGroup";

const StyledContentWrapper = styled.div`
  transform: translate(0px, -1px);
  height: 153px;
  width: 94500px;
  z-index: 0;

  position: absolute;
  left: 0px;
  border-top: 1px solid rgb(204, 204, 204);
  transition: height 0.25s ease 0s, transform 0.25s ease 0s;
`;

const ContentWrapper = () => {
  return <StyledContentWrapper></StyledContentWrapper>;
};

export default ContentWrapper;
