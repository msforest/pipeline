import React from "react";
import PropTypes from "prop-types";

export function CommonSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
      <defs>
        <g id="manual">
          <title>pointer/hand</title>
          <desc>for manual dod item</desc>
          <rect stroke="null" fill="#FFF" x="0" y="3" width="5" height="7" />
          <path
            stroke="null"
            d="m2.279445,2.7606c-0.333332,0 -0.606616,0.348577 -0.606616,0.773713l0.001566,3.29229l-0.582925,-0.745498
                    c-0.235375,-0.300216 -0.623966,-0.298202 -0.859356,0c-0.235375,0.3002 -0.233793,0.795857 0,1.096073l1.453335,1.851668
                    c0.478672,0.610512 1.129522,0.955047 1.807226,0.953034c1.00313,0 1.819848,-1.041688 1.819848,-2.321123l0,-1.547426
                    c0,-0.425136 -0.273298,-0.773698 -0.606616,-0.773698c-0.078981,0 -0.156394,0.020147 -0.225901,0.056413
                    c-0.071089,-0.326417 -0.304897,-0.572217 -0.582925,-0.572217c-0.154828,0 -0.296975,0.078573 -0.404405,0.20148
                    c-0.107431,-0.122907 -0.249592,-0.20148 -0.404421,-0.20148c-0.071073,0 -0.138999,0.020147 -0.202195,0.048345l0,-1.337862
                    c0,-0.425136 -0.273284,-0.773713 -0.606616,-0.773713l0.000001,0.000001zm0,0.515804
                    c0.113726,0 0.202195,0.112827 0.202195,0.257909l0,2.836926l0.404421,0l0,-0.773713
                    c0,-0.145067 0.088469,-0.257894 0.202195,-0.257894c0.113741,0 0.20221,0.112827 0.20221,0.257894
                    l0,0.773713l0.404405,0l0,-0.773713c0,-0.145067 0.088469,-0.257894 0.20221,-0.257894
                    c0.113726,0 0.20221,0.112827 0.20221,0.257894l0,0.773713l0.404405,0l0,-0.257909
                    c0,-0.145067 0.088469,-0.257894 0.20221,-0.257894c0.113726,0 0.202195,0.112827 0.202195,0.257894
                    l0,1.547426c0,1.00138 -0.630291,1.80532 -1.415427,1.80532c-0.570304,0.002013 -1.118437,-0.288122 -1.522873,-0.803941
                    l-1.450188,-1.851653c-0.082143,-0.102762 -0.082143,-0.261935 0,-0.362684
                    c0.080561,-0.104774 0.205358,-0.104774 0.284353,0l1.274831,1.623986l-0.001582,-4.537472
                    c0,-0.145083 0.088469,-0.257909 0.20221,-0.257909l0.000015,0l0.000001,0z"
          />
        </g>
      </defs>
    </svg>
  );
}
// <use xlinkHref="#manual" transform="translate(0, -3)"/>
export function TwoArrow({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <path d="M7 14A7 7 0 1 1 7 0a7 7 0 0 1 0 14z" />
      <path d="M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12z" fill="#FFF" />
      <path
        d="M6.415 7.04L4.579 5.203a.295.295 0 0 1 .004-.416l.349-.349a.29.29 0 0 1 .416-.004l2.214 2.214a.289.289 0 0 1
             .019.021l.132.133c.11.11.108.291 0 .398L5.341 9.573a.282.282 0 0 1-.398 0l-.331-.331a.285.285 0 0 1 0-.399L6.415
              7.04zm2.54 0L7.119 5.203a.295.295 0 0 1 .004-.416l.349-.349a.29.29 0 0 1 .416-.004l2.214 2.214a.289.289 0 0 1
               .019.021l.132.133c.11.11.108.291 0 .398L7.881 9.573a.282.282 0 0 1-.398 0l-.331-.331a.285.285 0 0 1 0-.399L8.955 7.04z"
      />
      {useRef}
    </svg>
  );
}
TwoArrow.propTypes = {
  useRef: PropTypes.node
};

export function Success({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <path
          d="M6.278 7.697L5.045 6.464a.296.296 0 0 0-.42-.002l-.613.614a.298.298 0 0 0 .002.42l1.91 1.909a.5.5 0 0 0
                     .703.005l.265-.265L9.997 6.04a.291.291 0 0 0-.009-.408l-.614-.614a.29.29 0 0 0-.408-.009L6.278 7.697z"
        />
        {useRef}
      </g>
    </svg>
  );
}
Success.propTypes = {
  useRef: PropTypes.node
};

export function Moon({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <path d="M7 3c2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.3 0-2.5-.7-3.3-1.7L7 7V3" />
        {useRef}
      </g>
    </svg>
  );
}
Moon.propTypes = {
  useRef: PropTypes.node
};

export function Cancel({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <path d="M5.2 3.8l4.9 4.9c.2.2.2.5 0 .7l-.7.7c-.2.2-.5.2-.7 0L3.8 5.2c-.2-.2-.2-.5 0-.7l.7-.7c.2-.2.5-.2.7 0" />
        {useRef}
      </g>
    </svg>
  );
}
Cancel.propTypes = {
  useRef: PropTypes.node
};

export function Fail({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <path
          d="M7 5.969L5.599 4.568a.29.29 0 0 0-.413.004l-.614.614a.294.294 0 0 0-.004.413L5.968 7l-1.4 1.401a.29.29 0 0 0
                     .004.413l.614.614c.113.114.3.117.413.004L7 8.032l1.401 1.4a.29.29 0 0 0 .413-.004l.614-.614a.294.294 0 0 0 .004-.413L8.032
                      7l1.4-1.401a.29.29 0 0 0-.004-.413l-.614-.614a.294.294 0 0 0-.413-.004L7 5.968z"
        />
        {useRef}
      </g>
    </svg>
  );
}
Fail.propTypes = {
  useRef: PropTypes.node
};

export function Circle({ useRef }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
      width="100%"
      height="100%"
    >
      <g fillRule="evenodd">
        <path d="M0 7a7 7 0 1 1 14 0A7 7 0 0 1 0 7z" />
        <path d="M13 7A6 6 0 1 0 1 7a6 6 0 0 0 12 0z" fill="#FFF" />
        <circle cx="7" cy="7" r="3.25" />
        {useRef}
      </g>
    </svg>
  );
}
Circle.propTypes = {
  useRef: PropTypes.node
};
