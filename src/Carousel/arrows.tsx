import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import styled from "styled-components";

const ArrowBtn = styled.button`
  cursor: pointer;
  justify-content: center;
  user-select: none;
  z-index: 999;
  position: absolute;
  height: 400px;
  width: 80px;
  font-size: 30px;
  background: rgba(255, 255, 255, 0.5);
  color: ${props => props.theme.themeColor};
  opacity: 0.5;
  border: 0;
  &.rightArrow {
    right: 20px;
  }
`
export function LeftArrow() {
  const {
    getPrevElement,
    isFirstItemVisible,
    scrollToItem,
    visibleElements,
    initComplete
  } = React.useContext(VisibilityContext);
  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  // NOTE: for scroll 1 item
  const clickHandler = () => scrollToItem(getPrevElement(), "smooth", "start");
   return (
    <ArrowBtn
      disabled={disabled}
      onClick={clickHandler}
      style={{
        opacity: disabled ? "0" : "1",
      }}
    >
      <FontAwesomeIcon icon={faChevronLeft}/>
    </ArrowBtn>
  );
}

export function RightArrow() {
  const {
    getNextElement,
    isLastItemVisible,
    scrollToItem,
    visibleElements
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  // NOTE: for scroll 1 item
  const clickHandler = () => scrollToItem(getNextElement(), "smooth", "end");
  return (
    <ArrowBtn
      disabled={disabled}
      className="rightArrow"
      onClick={clickHandler}
      style={{
        opacity: disabled ? "0" : "1",
      }}
    >
      <FontAwesomeIcon icon={faChevronRight}/>
    </ArrowBtn>
  );
}
