// import React from 'react'
import PropTypes from "prop-types";
import { useState } from "react";

function Footer(props) {
  const [hoverStates, setHoverStates] = useState({
    row1: false,
    row2: false,
    row3: false,
    row4: false,
  });

  const handleMouseEnter = (row) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [row]: true,
    }));
  };

  const handleMouseLeave = (row) => {
    setHoverStates((prevState) => ({
      ...prevState,
      [row]: false,
    }));
  };
  return (
    <div className="font-Truculenta text-white capitalize">
      <h1 className="text-lg lg:text-xl font-semibold">{props.Header}</h1>
      <p
        className="text-lg lg:text-xl flex items-center font-normal"
        onMouseEnter={() => handleMouseEnter("row1")}
        onMouseLeave={() => handleMouseLeave("row1")}
      >
        {props.row1}
        {hoverStates.row1 && (
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
          </svg>
        )}
      </p>
      <p
        className="text-lg lg:text-xl flex items-center font-normal"
        onMouseEnter={() => handleMouseEnter("row2")}
        onMouseLeave={() => handleMouseLeave("row2")}
      >
        {props.row2}
        {hoverStates.row2 && (
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
          </svg>
        )}
      </p>
      <p
        className="text-lg lg:text-xl flex items-center font-normal"
        onMouseEnter={() => handleMouseEnter("row3")}
        onMouseLeave={() => handleMouseLeave("row3")}
      >
        {props.row3}
        {hoverStates.row3 && (
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
          </svg>
        )}
      </p>
      <p
        className="text-lg lg:text-xl flex items-center font-normal"
        onMouseEnter={() => handleMouseEnter("row4")}
        onMouseLeave={() => handleMouseLeave("row4")}
      >
        {props.row4}
        {hoverStates.row4 && (
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="18"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
          </svg>
        )}
      </p>
    </div>
  );
}

Footer.propTypes = {
  Header: PropTypes.string,
  row1: PropTypes.string,
  row2: PropTypes.string,
  row3: PropTypes.string,
  row4: PropTypes.string,
};
export default Footer;
