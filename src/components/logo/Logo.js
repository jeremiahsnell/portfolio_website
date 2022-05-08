import React from "react";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg version="1.1" viewBox="0 0 303 352" xmlns="http://www.w3.org/2000/svg">
      <desc>Created with Fabric.js 4.6.0</desc>

      <g transform="translate(152.58 175.79)">
        <g vector-effect="non-scaling-stroke">
          <g transform="matrix(1.54 0 0 1.54 121.53 -134.91)">
            <linearGradient
              id="d"
              x1="357.52"
              x2="312.09"
              y1="-238.44"
              y2="-238.44"
              gradientTransform="matrix(1 0 0 -1 0 -76)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#bebebe" offset="0" />
              <stop stop-color="#747474" offset=".5" />
              <stop stop-color="#444" offset="1" />
            </linearGradient>
            <path
              transform="translate(-328.94 -162.44)"
              d="m309.26 188.79 6.166-52.691h33.184v13.229c-6.1e-5 21.861-17.601 39.462-39.35 39.462v0z"
              fill="url(#d)"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
              paint-order="stroke"
            />
          </g>
          <g transform="matrix(1.54 0 0 1.54 -77.74 73.25)">
            <linearGradient
              id="c"
              x1="155.63"
              x2="242.17"
              y1="1453.5"
              y2="1453.5"
              gradientTransform="translate(0 -1156)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#bebebe" offset="0" />
              <stop stop-color="#747474" offset=".5" />
              <stop stop-color="#444" offset="1" />
            </linearGradient>
            <path
              transform="translate(-199.51 -297.53)"
              d="m179.89 279.37s-14.798-0.11212-23.206 11.435v11.547l14.91 9.4171 35.314 3.9238 3.6996-4.4843 31.727-31.727h-62.444l-1.52e-5 -0.11212v0z"
              fill="url(#c)"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
              paint-order="stroke"
            />
          </g>
          <g transform="matrix(1.54 0 0 1.54 -63.61 119.08)">
            <linearGradient
              id="b"
              x1="266.43"
              x2="154.05"
              y1="1483.3"
              y2="1483.3"
              gradientTransform="translate(0 -1156)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#bebebe" offset="0" />
              <stop stop-color="#747474" offset=".5" />
              <stop stop-color="#444" offset="1" />
            </linearGradient>
            <path
              transform="translate(-208.69 -327.3)"
              d="m231.23 311.21h-24.327-4.148c-1.1211 0-2.13 0-3.139-0.11212-23.991-0.89685-36.547-11.547-42.713-20.404-4.9327 6.8386-7.6233 17.713-3.4754 35.09 6.278 21.973 26.57 38.117 50.673 38.117h5.8296v0h53.139c1.6816 0 2.9148-1.3453 2.9148-2.9148v-49.776l-34.753 3.05e-5v0z"
              fill="url(#b)"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
              paint-order="stroke"
            />
          </g>
          <g transform="matrix(1.54 0 0 1.54 62.24 .07)">
            <linearGradient
              id="a"
              x1="290.43"
              x2="290.43"
              y1="1270.2"
              y2="1543.5"
              gradientTransform="translate(0 -1156)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#bebebe" offset="0" />
              <stop stop-color="#747474" offset=".5" />
              <stop stop-color="#444" offset="1" />
            </linearGradient>
            <path
              transform="translate(-290.43 -250)"
              d="m316.77 136.1c-29.148 0-52.691 23.543-52.691 52.691v61.211 61.211 1.2332c0 43.722-31.614 51.682-31.839 51.458h31.839c29.148 0 52.691-23.543 52.691-52.691v0-61.211-62.22c0-43.946 31.839-51.682 31.839-51.682l-31.839 1.52e-5v0z"
              fill="url(#a)"
              stroke-linecap="round"
              vector-effect="non-scaling-stroke"
              paint-order="stroke"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
