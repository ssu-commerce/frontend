import { ReactElement } from "react";
import { Color, Size } from ".";

function UnCheckIcon({
  color = "#ffffff",
  size = 20,
}: {
  color?: Color;
  size?: Size;
}): ReactElement {
  switch (size) {
    case 16:
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.2222 1.77778V14.2222H1.77778V1.77778H14.2222ZM14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z"
            fill={color}
          />
        </svg>
      );
    case 20:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7778 2.22222V17.7778H2.22222V2.22222H17.7778ZM17.7778 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19 1 20 2.22222 20H17.7778C19 20 20 19 20 17.7778V2.22222C20 1 19 0 17.7778 0Z"
            fill={color}
          />
        </svg>
      );
    case 24:
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3333 2.66667V21.3333H2.66667V2.66667H21.3333ZM21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0Z"
            fill={color}
          />
        </svg>
      );
    case 28:
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.8889 3.11111V24.8889H3.11111V3.11111H24.8889ZM24.8889 0H3.11111C1.4 0 0 1.4 0 3.11111V24.8889C0 26.6 1.4 28 3.11111 28H24.8889C26.6 28 28 26.6 28 24.8889V3.11111C28 1.4 26.6 0 24.8889 0Z"
            fill={color}
          />
        </svg>
      );
    case 32:
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.4444 3.55556V28.4444H3.55556V3.55556H28.4444ZM28.4444 0H3.55556C1.6 0 0 1.6 0 3.55556V28.4444C0 30.4 1.6 32 3.55556 32H28.4444C30.4 32 32 30.4 32 28.4444V3.55556C32 1.6 30.4 0 28.4444 0Z"
            fill={color}
          />
        </svg>
      );
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.2222 1.77778V14.2222H1.77778V1.77778H14.2222ZM14.2222 0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H14.2222C15.2 16 16 15.2 16 14.2222V1.77778C16 0.8 15.2 0 14.2222 0Z"
        fill={color}
      />
    </svg>
  );
}

export { UnCheckIcon };
