import React from "react";
import styled from "styled-components";

const StyledCRowGroup = styled.div`
  width: 100%;
  position: absolute;
  left: 0px;
  border-top: 1px solid rgb(204, 204, 204);
  transition: height 0.25s ease 0s, transform 0.25s ease 0s;
`;

const RowGroup = () => {
  return <StyledCRowGroup></StyledCRowGroup>;
};

export default RowGroup;
