import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

import PropTypes from "prop-types";

function getWidth() {
  return document.documentElement.clientWidth;
}

const Brick = (props) => {
  const { imgSrc, gap, colWidth } = props;
  const [imgHeight, setImgHeight] = useState(10);
  const [hovering, setHovering] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const itemRef = useRef() || null;
  const imgRef = useRef() || {current: {naturalHeight: 0, naturalWidth: 0}};
  const imgRef2 = useRef();

  useEffect(() => {
    if (imgLoaded === true) {
      window.dispatchEvent(new Event("resize"));
      const ratio = imgRef.current.naturalWidth / colWidth;
      setImgHeight((imgRef.current.naturalHeight || 0) / ratio);
    }
  }, [imgLoaded, colWidth]);

  const handleHover = () => {
    setHovering(!hovering);
  };

  return (
    <div
      ref={itemRef}
      className={`brick${hovering ? " hovering" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      style={{
        width: `${colWidth - gap}px`,
        height: `${imgHeight}px`,
        marginBottom: `${gap}px`,
      }}
    >
      <img
        src={imgSrc}
        alt=""
        ref={imgRef2}
        onLoad={() => setImgLoaded(true)}
        width={colWidth - gap}
        height={imgHeight}
      />
    </div>
  );
};

export const Bricks = (props) => {
  const {
    data,
    columns = 4,
    gap = 0,
    minWidth = 200,
    backgroundColor = "white",
  } = props;

  const [layoutWidth, setLayoutWidth] = useState(getWidth);
  const [colWidth, setColWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setLayoutWidth(getWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const minColumns = Math.floor(layoutWidth / minWidth);
    minColumns < columns
      ? setColWidth(Math.ceil(layoutWidth / minColumns))
      : setColWidth(Math.ceil(layoutWidth / columns));
  }, [layoutWidth, columns, minWidth]);

  return (
    <div
      className="bricksContainer"
      style={{
        backgroundColor: backgroundColor,
        columns: `${columns} ${minWidth}px`,
        columnGap: `${gap}px`,
      }}
    >
      {data &&
        data.map((item, i) => (
          <Brick key={i} {...item} gap={gap} colWidth={colWidth} />
        ))}
    </div>
  );
};

function minimumValPropTest(props, propName, componentName) {
  if (props[propName]) {
    let value = props[propName];
    switch (propName) {
      case "columns":
        return value > 0
          ? null
          : new Error(
              `${propName} in ${componentName} requires a value greater than 0`
            );
      case "gap":
        return value > -1
          ? null
          : new Error(
              `${propName} in ${componentName} requires a value of 0 or greater`
            );
      case "minWidth":
        return value > 0
          ? null
          : new Error(
              `${propName} in ${componentName} requires a value greater than 0`
            );
      default:
        new Error(`Invalid prop ${propName} passed to ${componentName}`);
    }
  }
  return null;
}

Bricks.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string,
    })
  ).isRequired,
  columns: minimumValPropTest,
  gap: minimumValPropTest,
  minWidth: minimumValPropTest,
  backgroundColor: PropTypes.string,
};