import { DirectionKey, DirectionDegree, SizeKey } from "../constants";
import type { IconProps } from "./svg.types";

export interface ArrowIconProps extends IconProps {
  direction?: DirectionKey;
}

const ArrowIcon = ({
  color = "#000000",
  size = 20,
  direction = DirectionKey.Top,
}: ArrowIconProps): JSX.Element => {
  switch (size) {
    case 16:
    case SizeKey.XS:
      return (
        <svg
          fill="none"
          height="16"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.94 10.2733L8 7.22L11.06 10.2733L12 9.33334L8 5.33334L4 9.33334L4.94 10.2733Z"
            fill={color}
          />
        </svg>
      );
    case 20:
    case SizeKey.SM:
      return (
        <svg
          fill="none"
          height="20"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.175 12.8417L10 9.025L13.825 12.8417L15 11.6667L10 6.66667L5 11.6667L6.175 12.8417Z"
            fill={color}
          />
        </svg>
      );
    case 24:
    case SizeKey.MD:
      return (
        <svg
          fill="none"
          height="24"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_78)">
            <path
              d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_78">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      );
    case 28:
    case SizeKey.LG:
      return (
        <svg
          fill="none"
          height="28"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_106)">
            <path
              d="M8.645 17.9783L14 12.635L19.355 17.9783L21 16.3333L14 9.33334L7 16.3333L8.645 17.9783Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_106">
              <rect fill="white" height="28" width="28" />
            </clipPath>
          </defs>
        </svg>
      );
    case 32:
    case SizeKey.XL:
      return (
        <svg
          fill="none"
          height="32"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_119)">
            <path
              d="M9.88 20.5467L16 14.44L22.12 20.5467L24 18.6667L16 10.6667L8 18.6667L9.88 20.5467Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_119">
              <rect fill="white" height="32" width="32" />
            </clipPath>
          </defs>
        </svg>
      );
    default:
      return (
        <svg
          fill="none"
          height="16"
          transform={`rotate(${DirectionDegree[direction]})`}
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.94 10.2733L8 7.22L11.06 10.2733L12 9.33334L8 5.33334L4 9.33334L4.94 10.2733Z"
            fill={color}
          />
        </svg>
      );
  }
};

export { ArrowIcon };
