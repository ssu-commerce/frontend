import { SizeKey } from "../constants";
import type { IconProps } from ".";

const CheckedIcon = ({
  color = "#000000",
  size = 20,
}: IconProps): JSX.Element => {
  switch (size) {
    case 16:
    case SizeKey.XS:
      return (
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2222 0H1.77778C0.791111 0 0 0.8 0 1.77778V14.2222C0 15.2 0.791111 16 1.77778 16H14.2222C15.2089 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2089 0 14.2222 0ZM6.22222 12.4444L1.77778 8L3.03111 6.74667L6.22222 9.92889L12.9689 3.18222L14.2222 4.44444L6.22222 12.4444Z"
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
          viewBox="0 0 20 20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7778 0H2.22222C0.988889 0 0 1 0 2.22222V17.7778C0 19 0.988889 20 2.22222 20H17.7778C19.0111 20 20 19 20 17.7778V2.22222C20 1 19.0111 0 17.7778 0ZM7.77778 15.5556L2.22222 10L3.78889 8.43333L7.77778 12.4111L16.2111 3.97778L17.7778 5.55556L7.77778 15.5556Z"
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
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM9.33333 18.6667L2.66667 12L4.54667 10.12L9.33333 14.8933L19.4533 4.77333L21.3333 6.66667L9.33333 18.6667Z"
            fill={color}
          />
        </svg>
      );
    case 28:
    case SizeKey.LG:
      return (
        <svg
          fill="none"
          height="28"
          viewBox="0 0 28 28"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8889 0H3.11111C1.38444 0 0 1.4 0 3.11111V24.8889C0 26.6 1.38444 28 3.11111 28H24.8889C26.6156 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6156 0 24.8889 0ZM10.8889 21.7778L3.11111 14L5.30444 11.8067L10.8889 17.3756L22.6956 5.56889L24.8889 7.77778L10.8889 21.7778Z"
            fill={color}
          />
        </svg>
      );
    case 32:
    case SizeKey.XL:
      return (
        <svg
          fill="none"
          height="32"
          viewBox="0 0 32 32"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.4444 0H3.55556C1.58222 0 0 1.6 0 3.55556V28.4444C0 30.4 1.58222 32 3.55556 32H28.4444C30.4178 32 32 30.4 32 28.4444V3.55556C32 1.6 30.4178 0 28.4444 0ZM12.4444 24.8889L3.55556 16L6.06222 13.4933L12.4444 19.8578L25.9378 6.36444L28.4444 8.88889L12.4444 24.8889Z"
            fill={color}
          />
        </svg>
      );
    default:
      return (
        <svg
          fill="none"
          height="16"
          viewBox="0 0 16 16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2222 0H1.77778C0.791111 0 0 0.8 0 1.77778V14.2222C0 15.2 0.791111 16 1.77778 16H14.2222C15.2089 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2089 0 14.2222 0ZM6.22222 12.4444L1.77778 8L3.03111 6.74667L6.22222 9.92889L12.9689 3.18222L14.2222 4.44444L6.22222 12.4444Z"
            fill={color}
          />
        </svg>
      );
  }
};

export { CheckedIcon };
