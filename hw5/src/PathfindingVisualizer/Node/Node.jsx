import React from "react";

import "./Node.css";

// BEGIN PART 3

const Node = (props) => {
  const {
    col, 
    isFinish,
    isStart,
    isWall,
    onMouseDown,
    onMouseEnter,
    onMouseUp,
    row
  } = props;
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

  return <div 
  id = {`node-${row}-${col}`}
  className = {`node ${extraClassName}`}
  onMouseDown = {() => onMouseDown(row, col)}
  onMouseEnter = {() => onMouseEnter(row, col)}
  onMouseUp = {() => onMouseUp()}
  ></div>;
};

// END PART 3

export default Node;