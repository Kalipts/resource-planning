import React from "react";
import styled from "styled-components";

const StyledTopWeek = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAABCAYAAABT7OOpAAAAP0lEQVR4Ae3BMQGDAAADwaDpdbGw1UA3Fny9JlCRLXfH/37e33VmutQAmS41QKZLDZDpUgNkutQAmS41QKbrA8ARFf4sDiKyAAAAAElFTkSuQmCC)
    0% 0% / 630px 630px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAnYAAAABCAYAAABT7OOpAAAAP0lEQVR4Ae3BMQGDAAADwaDpdbGw1UA3Fny9JlCRLXfH/37e33VmutQAmS41QKZLDZDpUgNkutQAmS41QKbrA8ARFf4sDiKyAAAAAElFTkSuQmCC);
  background-position-x: initial;
  background-position-y: initial;
  background-size: 630px 630px;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: initial;
`;

const TopCell = styled.div`
  height: 100%;
  padding-left: 10px;
  font-size: 11px;
  line-height: 29px;
  color: ${(props) => props.theme.borders.greyText};
  font-weight: bold;
  width: 90px;
  align-self: center;
  position: relative;
  display: flex;
`;

const TopWeek = () => {
  return (
    <StyledTopWeek>
      <TopCell>1 SUN</TopCell>
      <TopCell>2 MON</TopCell>
      <TopCell>3 TUE</TopCell>
      <TopCell>4 WED</TopCell>
      <TopCell>5 THU</TopCell>
      <TopCell>6 FRI</TopCell>
      <TopCell>7 SAT</TopCell>
    </StyledTopWeek>
  );
};

export default TopWeek;
